import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import fs from "fs/promises";
import path from "path";

// Allowed MIME types
const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
  "application/pdf",
];

// 15 MB Max file size limit
const MAX_FILE_SIZE = 15 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const folder = (formData.get("folder") as string) || "uploads";
    const category = (formData.get("category") as string) || "Uploaded Asset";

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file was provided in the request." },
        { status: 400 }
      );
    }

    // Validate MIME Type
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          success: false,
          error: `Invalid file type (${file.type}). Allowed types: JPG, PNG, WEBP, GIF, SVG, and PDF.`,
        },
        { status: 400 }
      );
    }

    // Validate File Size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          success: false,
          error: `File size exceeds maximum limit of 15MB (${(file.size / (1024 * 1024)).toFixed(2)}MB).`,
        },
        { status: 400 }
      );
    }

    const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const uniqueFileName = `${Date.now()}-${cleanFileName}`;
    const isPdf = file.type === "application/pdf";

    // 1. Try Vercel Blob if token is available
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      try {
        const blobPathname = `${folder}/${uniqueFileName}`;
        const blob = await put(blobPathname, file, { access: "public" });

        return NextResponse.json({
          success: true,
          url: blob.url,
          downloadUrl: blob.downloadUrl,
          pathname: blob.pathname,
          name: file.name,
          folder: folder,
          category: category,
          type: isPdf ? "document" : "image",
          size: file.size,
          contentType: file.type,
          storageProvider: "vercel-blob",
        });
      } catch (blobErr) {
        console.warn("Vercel Blob failed, falling back to local filesystem storage:", blobErr);
      }
    }

    // 2. Local filesystem storage fallback (saves into public/images/uploads/)
    try {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadsDir = path.join(process.cwd(), "public", "images", "uploads");
      await fs.mkdir(uploadsDir, { recursive: true });

      const filePath = path.join(uploadsDir, uniqueFileName);
      await fs.writeFile(filePath, buffer);

      const publicUrl = `/images/uploads/${uniqueFileName}`;

      return NextResponse.json({
        success: true,
        url: publicUrl,
        downloadUrl: publicUrl,
        pathname: publicUrl,
        name: file.name,
        folder: folder,
        category: category,
        type: isPdf ? "document" : "image",
        size: file.size,
        contentType: file.type,
        storageProvider: "local-public",
      });
    } catch (fsErr) {
      console.error("Local storage write error:", fsErr);
      throw new Error("Unable to save file to local or cloud storage.");
    }
  } catch (error: unknown) {
    console.error("Upload handler error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to upload file.";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
