"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  AlertCircle,
  KeyRound,
  HelpCircle,
  LogOut,
  ExternalLink,
  Users,
  HeartHandshake,
  FileText,
  ImageIcon,
  LayoutDashboard,
  Search,
  Menu,
  X,
  ChevronRight,
  Save,
  ArrowLeft,
  Check,
  CheckCircle2,
  FolderOpen,
  Copy,
  UploadCloud,
  Sparkles,
  Plus,
  Trash2,
  Info,
  Shield,
  Layers,
  Settings,
  RefreshCw,
  Globe,
  Camera,
  Folder,
  LayoutGrid,
  List,
} from "lucide-react";
import {
  EditablePage,
  getEditablePage,
  ContentField,
} from "@/lib/pageContent";
import {
  allMediaAssets,
  mediaFolders,
  MediaItem,
  getCustomMediaAssets,
  saveCustomMediaAsset,
  deleteCustomMediaAsset,
} from "@/lib/mediaAssets";

// Comprehensive catalog of all One Way Ministries pages
const websitePages = [
  { title: "Home", path: "/", section: "Main", status: "Published" },
  { title: "About Us", path: "/about", section: "About", status: "Published" },
  { title: "Our Story", path: "/about/our-story", section: "About", status: "Published" },
  { title: "Vision & Mission", path: "/about/vision-mission", section: "About", status: "Published" },
  { title: "Ministries Overview", path: "/ministries", section: "Ministries", status: "Published" },
  { title: "Nuevo Comienzo", path: "/ministries/nuevo-comienzo", section: "Ministries", status: "Published" },
  { title: "Shalom Mision Xtrema", path: "/ministries/shalom-mision-xtrema", section: "Ministries", status: "Published" },
  { title: "Alfa y Omega", path: "/ministries/iglesia-alfa-y-omega", section: "Ministries", status: "Published" },
  { title: "Morada de Gracia", path: "/ministries/morada-de-gracia", section: "Ministries", status: "Published" },
  { title: "Nuevo Amanecer", path: "/ministries/nuevo-amanecer", section: "Ministries", status: "Published" },
  { title: "Amor Inagotable", path: "/ministries/amor-inagotable", section: "Ministries", status: "Published" },
  { title: "Impacto Biblico", path: "/ministries/impacto-biblico", section: "Ministries", status: "Published" },
  { title: "Funcifunac", path: "/ministries/funcifunac", section: "Ministries", status: "Published" },
  { title: "Iglesia Reformada Calvary", path: "/ministries/iglesia-reformada-calvary", section: "Ministries", status: "Published" },
  { title: "Unidos por la Vida", path: "/ministries/unidos-por-la-vida", section: "Ministries", status: "Published" },
  { title: "Luminar Missionary", path: "/ministries/luminar-missionary-foundation", section: "Ministries", status: "Published" },
  { title: "News & Field Reports", path: "/news", section: "News", status: "Published" },
  { title: "Medellín Outreach Project", path: "/news/medellin-la-mesa-del-rey-project", section: "News", status: "Published" },
  { title: "Free Dental Clinic", path: "/news/free-dental-clinic", section: "News", status: "Published" },
  { title: "Contact Us", path: "/contact", section: "Contact", status: "Published" },
];

export default function AdminAccessPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"dashboard" | "pages" | "media">("media");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<string>("all");
  const [copiedPath, setCopiedPath] = useState<string | null>(null);
  const [pageViewMode, setPageViewMode] = useState<"grid" | "table">("table");

  // Custom Uploaded Media & Cloud State
  const [customMedia, setCustomMedia] = useState<MediaItem[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [selectedUploadFolder, setSelectedUploadFolder] = useState<
    "banners" | "ministries" | "board-members" | "news" | "logos" | "uploads"
  >("uploads");
  const [selectedUploadCategory, setSelectedUploadCategory] = useState("Uploaded Asset");
  const [fieldUploadingId, setFieldUploadingId] = useState<string | null>(null);

  // Selected Page for Content Editing
  const [editingPage, setEditingPage] = useState<EditablePage | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [mediaPickerTargetField, setMediaPickerTargetField] = useState<{
    sectionIndex: number;
    fieldIndex: number;
  } | null>(null);
  const [mediaPickerFolder, setMediaPickerFolder] = useState<string>("all");

  // Login form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Password Change Modal state
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [currentPasswordInput, setCurrentPasswordInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordChangeError, setPasswordChangeError] = useState<string | null>(null);
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState<string | null>(null);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  // Check existing session & load custom media
  useEffect(() => {
    const session = sessionStorage.getItem("oneway_admin_authenticated");
    const localSession = localStorage.getItem("oneway_admin_authenticated");
    if (session === "true" || localSession === "true") {
      setIsAuthenticated(true);
    }
    setCustomMedia(getCustomMediaAssets());
  }, []);

  // Upload handler for files
  const handleUploadFile = async (
    file: File,
    folder: "banners" | "ministries" | "board-members" | "news" | "logos" | "uploads" = "uploads",
    category = "Uploaded Asset"
  ): Promise<string | null> => {
    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(null);
    setUploadProgress(`Uploading ${file.name}...`);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", folder);
      formData.append("category", category);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to upload file to storage.");
      }

      const newItem: MediaItem = {
        name: data.name,
        path: data.url,
        folder: data.folder,
        category: data.category,
        type: data.type,
      };

      const updated = saveCustomMediaAsset(newItem);
      setCustomMedia(updated);
      setUploadSuccess(`Successfully uploaded ${data.name}!`);
      setTimeout(() => setUploadSuccess(null), 4000);
      return data.url;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to upload file.";
      setUploadError(msg);
      return null;
    } finally {
      setIsUploading(false);
      setUploadProgress(null);
    }
  };

  // Open Page Content Editor for a given page
  const handleOpenPageEditor = (pageInfo: { path: string; title: string; section: string }) => {
    const defaultPage = getEditablePage(pageInfo.path, pageInfo.title, pageInfo.section);
    const saved = localStorage.getItem(`oneway_page_content_${pageInfo.path}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Merge sections and fields
        const mergedSections = defaultPage.sections.map((defSec) => {
          const savedSec = parsed.sections?.find((s: { id: string }) => s.id === defSec.id);
          if (!savedSec) return defSec;

          // If gallery section, if saved has fields use savedSec.fields (which includes any additions/deletions)
          if (defSec.id === "gallery" && Array.isArray(savedSec.fields) && savedSec.fields.length > 0) {
            return { ...defSec, ...savedSec, fields: savedSec.fields };
          }

          const mergedFields = defSec.fields.map((defField) => {
            const savedField = savedSec.fields?.find((f: { id: string }) => f.id === defField.id);
            return savedField || defField;
          });

          // Also keep any extra fields added dynamically
          const extraFields = (savedSec.fields || []).filter(
            (sf: { id: string }) => !defSec.fields.some((df) => df.id === sf.id)
          );

          return { ...defSec, ...savedSec, fields: [...mergedFields, ...extraFields] };
        });
        setEditingPage({ ...defaultPage, ...parsed, sections: mergedSections });
      } catch {
        setEditingPage(defaultPage);
      }
    } else {
      setEditingPage(defaultPage);
    }
    setSaveSuccess(false);
  };

  // Add a new photo slot to a gallery section
  const handleAddGalleryPhoto = (sectionIndex: number) => {
    if (!editingPage) return;
    const updated = { ...editingPage };
    const targetSection = { ...updated.sections[sectionIndex] };
    const newIdx = targetSection.fields.length + 1;
    const newField: ContentField = {
      id: `gallery_${Date.now()}`,
      label: `Gallery Photo ${newIdx}`,
      type: "image",
      value: targetSection.fields[0]?.value || "/images/ministries/nuevo-comienzo/img01.webp",
    };
    targetSection.fields = [...targetSection.fields, newField];
    updated.sections[sectionIndex] = targetSection;
    setEditingPage(updated);
    setSaveSuccess(false);
  };

  // Remove a photo from a gallery section
  const handleRemoveGalleryPhoto = (sectionIndex: number, fieldIndex: number) => {
    if (!editingPage) return;
    const updated = { ...editingPage };
    const targetSection = { ...updated.sections[sectionIndex] };
    targetSection.fields = targetSection.fields.filter((_, idx) => idx !== fieldIndex);
    // Renumber gallery photo labels cleanly
    targetSection.fields = targetSection.fields.map((f, i) => ({
      ...f,
      label: f.id.startsWith("gallery_") ? `Gallery Photo ${i + 1}` : f.label,
    }));
    updated.sections[sectionIndex] = targetSection;
    setEditingPage(updated);
    setSaveSuccess(false);
  };

  // Update field in editor
  const handleFieldChange = (sectionIndex: number, fieldIndex: number, newValue: string) => {
    if (!editingPage) return;

    const updated = { ...editingPage };
    updated.sections = [...updated.sections];
    updated.sections[sectionIndex] = { ...updated.sections[sectionIndex] };
    updated.sections[sectionIndex].fields = [...updated.sections[sectionIndex].fields];
    updated.sections[sectionIndex].fields[fieldIndex] = {
      ...updated.sections[sectionIndex].fields[fieldIndex],
      value: newValue,
    };

    setEditingPage(updated);
    setSaveSuccess(false);
  };

  // Save changes to localStorage
  const handleSavePageContent = () => {
    if (!editingPage) return;

    localStorage.setItem(`oneway_page_content_${editingPage.path}`, JSON.stringify(editingPage));
    setSaveSuccess(true);

    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };

  // Reset to default content
  const handleResetToDefault = () => {
    if (!editingPage) return;
    if (confirm("Reset all fields for this page back to original defaults?")) {
      localStorage.removeItem(`oneway_page_content_${editingPage.path}`);
      setEditingPage(getEditablePage(editingPage.path, editingPage.title, editingPage.section));
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    }
  };

  // Copy path helper
  const handleCopyPath = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  // Login handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password;

    if (!cleanEmail || !cleanPassword) {
      setErrorMessage("Please enter both your email address and password.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      const activePassword = localStorage.getItem("oneway_admin_password") || "oneway2026!";

      if (
        (cleanEmail === "admin@onewayministries.co" || cleanEmail === "onewayministriescol@gmail.com") &&
        cleanPassword === activePassword
      ) {
        setIsAuthenticated(true);
        if (rememberMe) {
          localStorage.setItem("oneway_admin_authenticated", "true");
        }
        sessionStorage.setItem("oneway_admin_authenticated", "true");
      } else {
        setErrorMessage(
          "Access denied: Invalid credentials. Only authorized One Way Ministries administrators may access this portal."
        );
      }
    }, 600);
  };

  // Handle Changing Password
  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordChangeError(null);
    setPasswordChangeSuccess(null);

    const activePassword = localStorage.getItem("oneway_admin_password") || "oneway2026!";

    if (!currentPasswordInput) {
      setPasswordChangeError("Please enter your current administrator password.");
      return;
    }

    if (currentPasswordInput !== activePassword) {
      setPasswordChangeError("The current password you entered is incorrect.");
      return;
    }

    if (!newPasswordInput || newPasswordInput.length < 6) {
      setPasswordChangeError("New password must be at least 6 characters long.");
      return;
    }

    if (newPasswordInput !== confirmPasswordInput) {
      setPasswordChangeError("New password and confirmation do not match.");
      return;
    }

    setIsChangingPassword(true);
    setTimeout(() => {
      localStorage.setItem("oneway_admin_password", newPasswordInput);
      setIsChangingPassword(false);
      setPasswordChangeSuccess("Password updated successfully! Please use this new password for future logins.");
      setCurrentPasswordInput("");
      setNewPasswordInput("");
      setConfirmPasswordInput("");
      setTimeout(() => {
        setPasswordChangeSuccess(null);
        setIsPasswordModalOpen(false);
      }, 2000);
    }, 400);
  };

  const handleSignOut = () => {
    sessionStorage.removeItem("oneway_admin_authenticated");
    localStorage.removeItem("oneway_admin_authenticated");
    setIsAuthenticated(false);
    setEditingPage(null);
    setEmail("");
    setPassword("");
    setErrorMessage(null);
  };

  // Filtered pages for the Pages tab
  const filteredPages = websitePages.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.section.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Combined media assets (static + custom uploaded)
  const allCombinedMedia = [...customMedia, ...allMediaAssets];

  // Dynamic media folder counts including uploaded files
  const dynamicMediaFolders = [
    { id: "all", label: "All Folders", icon: "Folder", count: allCombinedMedia.length },
    { id: "banners", label: "/banners & Hero", icon: "Layout", count: allCombinedMedia.filter((m) => m.folder === "banners").length },
    { id: "ministries", label: "/images/ministries", icon: "HeartHandshake", count: allCombinedMedia.filter((m) => m.folder === "ministries").length },
    { id: "board-members", label: "/images/board-members", icon: "Users", count: allCombinedMedia.filter((m) => m.folder === "board-members").length },
    { id: "news", label: "/images/news", icon: "FileText", count: allCombinedMedia.filter((m) => m.folder === "news").length },
    { id: "logos", label: "/logos", icon: "Shield", count: allCombinedMedia.filter((m) => m.folder === "logos").length },
    { id: "uploads", label: "Uploaded Assets", icon: "UploadCloud", count: allCombinedMedia.filter((m) => m.folder === "uploads").length },
  ];

  // Filtered media by selected folder and search query
  const filteredMedia = allCombinedMedia.filter((m) => {
    const matchesFolder = selectedFolder === "all" || m.folder === selectedFolder;
    const matchesQuery =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.path.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFolder && matchesQuery;
  });

  // Filtered media for the inline picker
  const pickerMedia = allCombinedMedia.filter((m) => {
    const matchesFolder = mediaPickerFolder === "all" || m.folder === mediaPickerFolder;
    return matchesFolder;
  });

  // --- AUTHENTICATED ADMINISTRATION DASHBOARD ---
  if (isAuthenticated) {
    return (
      <div className="w-full min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
        {/* Mobile Header */}
        <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white text-sm">One Way Admin</span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Sidebar */}
        <aside
          className={`fixed md:sticky top-0 left-0 z-40 h-screen w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between transition-transform duration-200 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="p-5 space-y-6">
            {/* Branding */}
            <div className="pb-4 border-b border-slate-800">
              <h1 className="font-extrabold text-white text-base tracking-tight">
                One Way Ministries
              </h1>
              <span className="text-xs text-red-400 font-medium block mt-0.5">
                Admin Portal Hub
              </span>
            </div>

            {/* Sidebar Navigation */}
            <nav className="space-y-1.5">
              <button
                onClick={() => {
                  setActiveTab("dashboard");
                  setEditingPage(null);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeTab === "dashboard" && !editingPage
                    ? "bg-[#1F2A44] text-white border border-red-500/40 shadow-md"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/80"
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("pages");
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeTab === "pages"
                    ? "bg-[#1F2A44] text-white border border-red-500/40 shadow-md"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/80"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Pages & Text</span>
                <span className="ml-auto bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                  {websitePages.length}
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("media");
                  setEditingPage(null);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeTab === "media"
                    ? "bg-[#1F2A44] text-white border border-red-500/40 shadow-md"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/80"
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Media Library</span>
                <span className="ml-auto bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                  {allCombinedMedia.length}
                </span>
              </button>

              <div className="pt-3 pb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-3.5">
                  Public Website
                </span>
              </div>

              <Link
                href="/"
                target="_blank"
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/80 transition"
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>View Live Site</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </Link>
            </nav>
          </div>

          {/* User info & Logout */}
          <div className="p-4 border-t border-slate-800 space-y-2">
            <div className="flex items-center justify-between px-2 py-1.5">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="w-8 h-8 rounded-full bg-red-600/30 text-red-400 font-bold flex items-center justify-center text-xs flex-shrink-0">
                  OW
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-slate-200 truncate">Administrator</div>
                  <div className="text-[10px] text-slate-500 truncate">admin@onewayministries.co</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  setPasswordChangeError(null);
                  setPasswordChangeSuccess(null);
                  setCurrentPasswordInput("");
                  setNewPasswordInput("");
                  setConfirmPasswordInput("");
                  setIsPasswordModalOpen(true);
                }}
                className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition cursor-pointer"
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>Password</span>
              </button>

              <button
                type="button"
                onClick={handleSignOut}
                className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-red-950/40 hover:bg-red-900/50 text-red-400 border border-red-900/40 text-xs font-medium transition cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 bg-slate-950 overflow-y-auto">
          {/* Top Bar */}
          <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live CMS Active
              </span>
            </div>

            <div className="flex items-center gap-3">
              {uploadSuccess && (
                <div className="hidden sm:flex items-center gap-1.5 text-xs bg-emerald-950/80 border border-emerald-800 text-emerald-300 px-3 py-1.5 rounded-lg animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{uploadSuccess}</span>
                </div>
              )}
              {uploadError && (
                <div className="hidden sm:flex items-center gap-1.5 text-xs bg-red-950/80 border border-red-800 text-red-300 px-3 py-1.5 rounded-lg animate-in fade-in">
                  <AlertCircle className="w-3.5 h-3.5 text-red-400" />
                  <span>{uploadError}</span>
                </div>
              )}
              <button
                onClick={() => setUploadModalOpen(true)}
                className="flex items-center gap-2 py-2 px-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md transition cursor-pointer"
              >
                <UploadCloud className="w-4 h-4" />
                <span>Upload Media</span>
              </button>
            </div>
          </header>

          <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* VIEW 1: PAGE CONTENT EDITOR */}
            {editingPage && (
              <div className="space-y-6">
                {/* Editor Header Navigation */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setEditingPage(null)}
                      className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold text-white tracking-tight">
                          {editingPage.title}
                        </h2>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                          {editingPage.path}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">
                        Section: {editingPage.section} • Customize text, images, and headlines across this page.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleResetToDefault}
                      className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 text-xs font-semibold transition cursor-pointer flex items-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Reset Defaults</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleSavePageContent}
                      className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-lg transition flex items-center gap-2 cursor-pointer"
                    >
                      {saveSuccess ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-300" />
                          <span>Saved Successfully!</span>
                        </>
                      ) : (
                        <>
                          <Save className="w-4 h-4" />
                          <span>Save Changes</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* SEO Metadata Card */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
                    <Globe className="w-4 h-4 text-red-400" />
                    <span>Page SEO & Browser Metadata</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">
                        Meta Title (Shown in browser tab and search results)
                      </label>
                      <input
                        type="text"
                        value={editingPage.meta.title}
                        onChange={(e) => {
                          const updated = { ...editingPage, meta: { ...editingPage.meta, title: e.target.value } };
                          setEditingPage(updated);
                          setSaveSuccess(false);
                        }}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1">
                        Meta Description
                      </label>
                      <input
                        type="text"
                        value={editingPage.meta.description}
                        onChange={(e) => {
                          const updated = { ...editingPage, meta: { ...editingPage.meta, description: e.target.value } };
                          setEditingPage(updated);
                          setSaveSuccess(false);
                        }}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-200 focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Dynamic Sections and Fields */}
                <div className="space-y-6">
                  {editingPage.sections.map((section, sIdx) => (
                    <div
                      key={section.id}
                      className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6 shadow-md"
                    >
                      <div className="border-b border-slate-800/80 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <h3 className="text-base font-bold text-white flex items-center gap-2">
                            {section.id.includes("gallery") ? (
                              <Camera className="w-4 h-4 text-red-400" />
                            ) : (
                              <Layers className="w-4 h-4 text-red-400" />
                            )}
                            {section.title}
                          </h3>
                          {section.description && (
                            <p className="text-xs text-slate-400 mt-1">{section.description}</p>
                          )}
                        </div>

                        {section.id.includes("gallery") && (
                          <button
                            type="button"
                            onClick={() => handleAddGalleryPhoto(sIdx)}
                            className="flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow transition cursor-pointer self-start sm:self-auto"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add Photo to Gallery</span>
                          </button>
                        )}
                      </div>

                      <div className={`grid gap-6 ${section.id.includes("gallery") ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2"}`}>
                        {section.fields.map((field, fIdx) => (
                          <div
                            key={field.id}
                            className={`space-y-2 ${
                              field.type === "textarea" ? "md:col-span-2" : ""
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                                {field.label}
                              </label>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] uppercase font-mono text-slate-500">
                                  {field.type}
                                </span>
                                {section.id.includes("gallery") && (
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveGalleryPhoto(sIdx, fIdx)}
                                    title="Delete photo from gallery"
                                    className="p-1 rounded text-slate-500 hover:text-red-400 hover:bg-red-950/40 transition cursor-pointer"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* FIELD TYPE: TEXTAREA */}
                            {field.type === "textarea" && (
                              <textarea
                                rows={4}
                                value={field.value}
                                onChange={(e) => handleFieldChange(sIdx, fIdx, e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-200 focus:outline-none focus:border-red-500 leading-relaxed font-sans"
                              />
                            )}

                            {/* FIELD TYPE: TEXT OR URL */}
                            {(field.type === "text" || field.type === "url") && (
                              <input
                                type="text"
                                value={field.value}
                                onChange={(e) => handleFieldChange(sIdx, fIdx, e.target.value)}
                                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-red-500"
                              />
                            )}

                            {/* FIELD TYPE: IMAGE PICKER & PREVIEW */}
                            {field.type === "image" && (
                              <div className="space-y-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                  {/* Live Thumbnail Preview */}
                                  <div className="relative w-28 h-20 rounded-lg bg-slate-900 border border-slate-700 overflow-hidden flex-shrink-0 flex items-center justify-center">
                                    {field.value ? (
                                      <Image
                                        src={field.value}
                                        alt={field.label}
                                        fill
                                        className="object-cover"
                                        onError={(e) => {
                                          (e.target as HTMLElement).style.display = "none";
                                        }}
                                      />
                                    ) : (
                                      <ImageIcon className="w-6 h-6 text-slate-600" />
                                    )}
                                  </div>

                                  {/* Input and Buttons */}
                                  <div className="flex-1 space-y-2 w-full">
                                    <input
                                      type="text"
                                      value={field.value}
                                      onChange={(e) => handleFieldChange(sIdx, fIdx, e.target.value)}
                                      placeholder="/images/... or https://..."
                                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 font-mono focus:outline-none focus:border-red-500"
                                    />
                                    <div className="flex flex-wrap items-center gap-2">
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setMediaPickerTargetField({ sectionIndex: sIdx, fieldIndex: fIdx });
                                          setMediaPickerFolder("all");
                                        }}
                                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                                      >
                                        <FolderOpen className="w-3.5 h-3.5 text-red-400" />
                                        <span>Select from Library</span>
                                      </button>

                                      <label className="px-3 py-1.5 rounded-lg bg-red-600/30 hover:bg-red-600/40 text-red-300 border border-red-500/40 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer">
                                        <UploadCloud className="w-3.5 h-3.5" />
                                        <span>Upload New</span>
                                        <input
                                          type="file"
                                          accept="image/*"
                                          className="hidden"
                                          onChange={async (e) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                              setFieldUploadingId(field.id);
                                              const uploadedUrl = await handleUploadFile(
                                                file,
                                                "uploads",
                                                editingPage?.title || "Page Image"
                                              );
                                              setFieldUploadingId(null);
                                              if (uploadedUrl) {
                                                handleFieldChange(sIdx, fIdx, uploadedUrl);
                                              }
                                            }
                                          }}
                                        />
                                      </label>

                                      {fieldUploadingId === field.id && (
                                        <span className="text-xs text-red-400 flex items-center gap-1">
                                          <div className="w-3 h-3 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
                                          Uploading...
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {field.helpText && (
                              <p className="text-[11px] text-slate-500">{field.helpText}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sticky Bottom Bar */}
                <div className="p-4 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 flex items-center justify-between sticky bottom-4 z-20 shadow-xl">
                  <div className="text-xs text-slate-400">
                    Currently editing <strong>{editingPage.title}</strong>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setEditingPage(null)}
                      type="button"
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSavePageContent}
                      type="button"
                      className="px-6 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-lg transition flex items-center gap-2 cursor-pointer"
                    >
                      {saveSuccess ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-300" />
                          <span>Saved!</span>
                        </>
                      ) : (
                        <>
                          <Save className="w-4 h-4" />
                          <span>Save Changes</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: PAGES LIST */}
            {activeTab === "pages" && !editingPage && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Website Content
                    </span>
                    <h2 className="text-2xl font-black text-white tracking-tight">
                      Pages & Sections
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Select any page below to visually edit headlines, body paragraphs, and images.
                    </p>
                  </div>

                  {/* View Switcher and Search */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                    {/* Table / Grid Toggle */}
                    <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 gap-1 self-start sm:self-auto">
                      <button
                        type="button"
                        onClick={() => setPageViewMode("table")}
                        title="Table / List View"
                        className={`py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                          pageViewMode === "table"
                            ? "bg-red-600 text-white shadow-sm"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <List className="w-3.5 h-3.5" />
                        <span>Table</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPageViewMode("grid")}
                        title="Grid View"
                        className={`py-1.5 px-3 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                          pageViewMode === "grid"
                            ? "bg-red-600 text-white shadow-sm"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <LayoutGrid className="w-3.5 h-3.5" />
                        <span>Grid</span>
                      </button>
                    </div>

                    {/* Search Pages */}
                    <div className="relative w-full sm:w-64">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Search pages by name or URL..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Pages Content - Grid or Table View */}
                {pageViewMode === "grid" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredPages.map((page) => (
                      <div
                        key={page.path}
                        className="bg-slate-900 rounded-2xl border border-slate-800 p-5 space-y-4 hover:border-slate-700 transition shadow-sm flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                              {page.section}
                            </span>
                            <span className="text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              {page.status}
                            </span>
                          </div>
                          <h3 className="text-base font-bold text-white tracking-tight">
                            {page.title}
                          </h3>
                          <p className="text-xs font-mono text-slate-500 truncate">
                            {page.path}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                          <Link
                            href={page.path}
                            target="_blank"
                            className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 transition"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>View Page</span>
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleOpenPageEditor(page)}
                            className="py-1.5 px-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md transition flex items-center gap-1.5 cursor-pointer"
                          >
                            <span>Edit Content</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-400 uppercase font-bold tracking-wider text-[11px]">
                            <th className="py-3.5 px-5">Page Name</th>
                            <th className="py-3.5 px-5">Path / URL</th>
                            <th className="py-3.5 px-5">Section</th>
                            <th className="py-3.5 px-5">Status</th>
                            <th className="py-3.5 px-5 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/80">
                          {filteredPages.map((page) => (
                            <tr
                              key={page.path}
                              className="hover:bg-slate-800/40 transition group"
                            >
                              <td className="py-3.5 px-5 font-bold text-white whitespace-nowrap">
                                <div className="flex items-center gap-2.5">
                                  <FileText className="w-4 h-4 text-red-400 flex-shrink-0" />
                                  <span>{page.title}</span>
                                </div>
                              </td>
                              <td className="py-3.5 px-5 font-mono text-slate-400 whitespace-nowrap">
                                {page.path}
                              </td>
                              <td className="py-3.5 px-5 whitespace-nowrap">
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                                  {page.section}
                                </span>
                              </td>
                              <td className="py-3.5 px-5 whitespace-nowrap">
                                <span className="text-[11px] font-semibold text-emerald-400 inline-flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                  {page.status}
                                </span>
                              </td>
                              <td className="py-3.5 px-5 text-right whitespace-nowrap">
                                <div className="inline-flex items-center gap-3">
                                  <Link
                                    href={page.path}
                                    target="_blank"
                                    className="text-slate-400 hover:text-white transition flex items-center gap-1"
                                    title="Open page in new tab"
                                  >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    <span className="hidden sm:inline">View</span>
                                  </Link>
                                  <button
                                    type="button"
                                    onClick={() => handleOpenPageEditor(page)}
                                    className="py-1.5 px-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold transition flex items-center gap-1 cursor-pointer"
                                  >
                                    <span>Edit</span>
                                    <ChevronRight className="w-3 h-3" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* VIEW 3: DASHBOARD OVERVIEW */}
            {activeTab === "dashboard" && (
              <div className="space-y-8">
                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div
                    onClick={() => setActiveTab("pages")}
                    className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-md flex items-center gap-4 hover:border-red-500/50 cursor-pointer transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-950/50 text-red-400 border border-red-900/40 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">{websitePages.length}</div>
                      <div className="text-xs text-slate-400 font-medium">Website Pages</div>
                    </div>
                  </div>

                  <div
                    onClick={() => setActiveTab("media")}
                    className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-md flex items-center gap-4 hover:border-blue-500/50 cursor-pointer transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-950/50 text-blue-400 border border-blue-900/40 flex items-center justify-center flex-shrink-0">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">{allCombinedMedia.length}</div>
                      <div className="text-xs text-slate-400 font-medium">Media Assets</div>
                    </div>
                  </div>

                  <div
                    onClick={() => setActiveTab("pages")}
                    className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-md flex items-center gap-4 hover:border-amber-500/50 cursor-pointer transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-950/50 text-amber-400 border border-amber-900/40 flex items-center justify-center flex-shrink-0">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">11</div>
                      <div className="text-xs text-slate-400 font-medium">Active Ministries</div>
                    </div>
                  </div>

                  <div
                    onClick={() => setActiveTab("pages")}
                    className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-md flex items-center gap-4 hover:border-purple-500/50 cursor-pointer transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-950/50 text-purple-400 border border-purple-900/40 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">8</div>
                      <div className="text-xs text-slate-400 font-medium">Board Members</div>
                    </div>
                  </div>
                </div>

                {/* Quick Action Hub */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                    onClick={() => setActiveTab("pages")}
                    className="bg-slate-900/80 hover:bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-red-500/40 shadow-md space-y-4 cursor-pointer transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-red-950/40 text-red-400 border border-red-900/40 flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Edit Pages & Text</h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Update headlines, story paragraphs, core mission statements, and quotes across all pages.
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() => setActiveTab("media")}
                    className="bg-slate-900/80 hover:bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-red-500/40 shadow-md space-y-4 cursor-pointer transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-blue-950/40 text-blue-400 border border-blue-900/40 flex items-center justify-center">
                        <ImageIcon className="w-5 h-5" />
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Manage Media Library</h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Upload high-resolution photography, logos, board photos, and ministry gallery images.
                      </p>
                    </div>
                  </div>
                </div>

                {/* System Architecture Status */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-bold text-white">Portal & Infrastructure Status</span>
                    </div>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Operational
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                      <div className="font-bold text-slate-200">Content Engine</div>
                      <div className="text-slate-400">Next.js App Router with persistent content overrides</div>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                      <div className="font-bold text-slate-200">Media Storage</div>
                      <div className="text-slate-400">Direct CDN / Local Public File storage enabled</div>
                    </div>
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                      <div className="font-bold text-slate-200">Admin Authentication</div>
                      <div className="text-slate-400">Institutional session with configurable password store</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 4: MEDIA LIBRARY */}
            {activeTab === "media" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Asset Manager
                    </span>
                    <h2 className="text-2xl font-black text-white tracking-tight">
                      Media Library
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Browse all banners, ministry photos, board member portraits, and upload new media.
                    </p>
                  </div>

                  {/* Search and Upload */}
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative w-full sm:w-64">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Search media files..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <button
                      onClick={() => setUploadModalOpen(true)}
                      className="flex items-center gap-2 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md transition cursor-pointer flex-shrink-0"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Upload Asset</span>
                    </button>
                  </div>
                </div>

                {/* Folder Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {dynamicMediaFolders.map((folder) => (
                    <button
                      key={folder.id}
                      onClick={() => setSelectedFolder(folder.id)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                        selectedFolder === folder.id
                          ? "bg-red-600 text-white shadow-md"
                          : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                      }`}
                    >
                      <span>{folder.label}</span>
                      <span
                        className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                          selectedFolder === folder.id
                            ? "bg-white/20 text-white"
                            : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        {folder.count}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Media Assets Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {filteredMedia.map((media) => (
                    <div
                      key={media.path}
                      className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden group hover:border-slate-700 transition flex flex-col justify-between"
                    >
                      {/* Image Thumbnail Container */}
                      <div className="relative aspect-video bg-slate-950 overflow-hidden flex items-center justify-center">
                        <Image
                          src={media.path}
                          alt={media.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[9px] font-bold bg-slate-900/90 text-slate-300 border border-slate-700/60 uppercase">
                          {media.folder}
                        </span>
                      </div>

                      {/* Info & Copy */}
                      <div className="p-3 space-y-2">
                        <div>
                          <div className="text-xs font-bold text-white truncate" title={media.name}>
                            {media.name}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate">{media.category}</div>
                        </div>

                        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => handleCopyPath(media.path)}
                            className="text-[11px] font-semibold text-slate-400 hover:text-white flex items-center gap-1 transition cursor-pointer"
                          >
                            {copiedPath === media.path ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Path</span>
                              </>
                            )}
                          </button>

                          {media.folder === "uploads" && (
                            <button
                              type="button"
                              onClick={() => {
                                if (confirm(`Delete uploaded asset "${media.name}"?`)) {
                                  const updated = deleteCustomMediaAsset(media.path);
                                  setCustomMedia(updated);
                                }
                              }}
                              className="text-slate-500 hover:text-red-400 transition cursor-pointer p-1"
                              title="Delete asset"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>

        {/* --- INLINE MEDIA PICKER MODAL --- */}
        {mediaPickerTargetField && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 max-h-[85vh] flex flex-col">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-white font-bold text-base">
                  <FolderOpen className="w-5 h-5 text-red-500" />
                  Select Image from Media Library
                </div>
                <button
                  type="button"
                  onClick={() => setMediaPickerTargetField(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Folder Selector */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {dynamicMediaFolders.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setMediaPickerFolder(f.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                      mediaPickerFolder === f.id
                        ? "bg-red-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {f.label} ({f.count})
                  </button>
                ))}
              </div>

              {/* Grid of Selectable Assets */}
              <div className="flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pr-1">
                {pickerMedia.map((m) => (
                  <div
                    key={m.path}
                    onClick={() => {
                      if (mediaPickerTargetField) {
                        handleFieldChange(
                          mediaPickerTargetField.sectionIndex,
                          mediaPickerTargetField.fieldIndex,
                          m.path
                        );
                        setMediaPickerTargetField(null);
                      }
                    }}
                    className="bg-slate-950 border border-slate-800 hover:border-red-500 rounded-xl overflow-hidden cursor-pointer group transition p-2 space-y-1.5"
                  >
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center">
                      <Image src={m.path} alt={m.name} fill className="object-cover" />
                    </div>
                    <div className="text-[11px] font-bold text-white truncate">{m.name}</div>
                    <div className="text-[10px] text-slate-500 truncate">{m.category}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-800 pt-3 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setMediaPickerTargetField(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- UPLOAD MEDIA MODAL --- */}
        {uploadModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-white font-bold text-base">
                  <UploadCloud className="w-5 h-5 text-red-500" />
                  Upload New Website Asset
                </div>
                <button
                  type="button"
                  onClick={() => setUploadModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Target Folder
                  </label>
                  <select
                    value={selectedUploadFolder}
                    onChange={(e) => setSelectedUploadFolder(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-red-500"
                  >
                    <option value="uploads">Uploaded Assets (/images/uploads)</option>
                    <option value="banners">Banners & Headers (/banners)</option>
                    <option value="ministries">Ministries (/images/ministries)</option>
                    <option value="board-members">Board Members (/images/board-members)</option>
                    <option value="news">News & Events (/images/news)</option>
                    <option value="logos">Logos & Graphics (/logos)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Asset Category or Label
                  </label>
                  <input
                    type="text"
                    value={selectedUploadCategory}
                    onChange={(e) => setSelectedUploadCategory(e.target.value)}
                    placeholder="e.g. Outreach, Hero, Event Photo"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Select File (JPG, PNG, WEBP, GIF, SVG, PDF up to 15MB)
                  </label>
                  <label className="border-2 border-dashed border-slate-700 hover:border-red-500 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer bg-slate-950/60 hover:bg-slate-950 transition">
                    <UploadCloud className="w-8 h-8 text-red-400" />
                    <span className="text-xs font-semibold text-slate-300">
                      Click to choose a file or drag & drop here
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Images will be optimized for website display
                    </span>
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      className="hidden"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const uploadedUrl = await handleUploadFile(
                            file,
                            selectedUploadFolder,
                            selectedUploadCategory
                          );
                          if (uploadedUrl) {
                            setUploadModalOpen(false);
                          }
                        }
                      }}
                    />
                  </label>
                </div>

                {isUploading && (
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center gap-3">
                    <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs text-slate-300">{uploadProgress}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* --- CHANGE PASSWORD MODAL --- */}
        {isPasswordModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-white font-bold text-base">
                  <KeyRound className="w-5 h-5 text-red-500" />
                  Change Administrator Password
                </div>
                <button
                  type="button"
                  onClick={() => setIsPasswordModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {passwordChangeError && (
                <div className="bg-red-950/80 border border-red-800 p-3 rounded-xl text-red-300 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>{passwordChangeError}</span>
                </div>
              )}

              {passwordChangeSuccess && (
                <div className="bg-emerald-950/80 border border-emerald-800 p-3 rounded-xl text-emerald-300 text-xs flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{passwordChangeSuccess}</span>
                </div>
              )}

              <form onSubmit={handleChangePassword} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      value={currentPasswordInput}
                      onChange={(e) => setCurrentPasswordInput(e.target.value)}
                      required
                      placeholder="Enter current password"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-red-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                    >
                      {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      value={newPasswordInput}
                      onChange={(e) => setNewPasswordInput(e.target.value)}
                      required
                      placeholder="Minimum 6 characters"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-red-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                    >
                      {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={confirmPasswordInput}
                    onChange={(e) => setConfirmPasswordInput(e.target.value)}
                    required
                    placeholder="Repeat new password"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm("Reset password back to institutional default ('oneway2026!')?")) {
                        localStorage.removeItem("oneway_admin_password");
                        setPasswordChangeSuccess("Reset back to default password ('oneway2026!').");
                        setTimeout(() => {
                          setPasswordChangeSuccess(null);
                          setIsPasswordModalOpen(false);
                        }, 1800);
                      }
                    }}
                    className="text-[11px] text-slate-500 hover:text-slate-300 underline cursor-pointer"
                  >
                    Reset to Default
                  </button>

                  <button
                    type="submit"
                    disabled={isChangingPassword}
                    className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md transition cursor-pointer"
                  >
                    {isChangingPassword ? "Updating..." : "Update Password"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- UNAUTHENTICATED LOGIN PORTAL ---
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center space-y-4">
        {/* Institutional Branding */}
        <div className="inline-flex items-center justify-center mb-3">
          <div className="relative w-48 h-14">
            <Image
              src="/logo.webp"
              alt="One Way Ministries"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        <div>
          <p className="text-xs text-slate-400 max-w-xs mx-auto">
            Authorized portal for website administrators to edit content, texts, and media.
          </p>
        </div>
      </div>

      {/* Login Card */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl py-8 px-6 sm:px-10 shadow-2xl space-y-6">
          {errorMessage && (
            <div className="p-3.5 bg-red-950/80 border border-red-800 text-red-300 text-xs rounded-xl flex items-start gap-2.5 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <div className="leading-snug">{errorMessage}</div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5"
              >
                Email Address
              </label>
              <div className="relative rounded-xl">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@onewayministries.co"
                  className="block w-full pl-10 pr-3.5 py-3 text-slate-200 placeholder:text-slate-500 border border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all bg-slate-950"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-300"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowHelpModal(true)}
                  className="text-xs text-red-400 hover:text-red-300 font-semibold hover:underline cursor-pointer"
                >
                  Need help?
                </button>
              </div>
              <div className="relative rounded-xl">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <KeyRound className="h-4 w-4" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="block w-full pl-10 pr-10 py-3 text-slate-200 placeholder:text-slate-500 border border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all bg-slate-950"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200 focus:outline-none cursor-pointer"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-700 bg-slate-950 text-red-600 focus:ring-red-500 cursor-pointer"
                />
                <span className="ml-2 text-xs text-slate-400 select-none">
                  Remember this workstation
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-white font-bold text-sm bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-lg shadow-red-900/30 transition-all duration-150 disabled:opacity-70 cursor-pointer"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Verifying Institutional Credentials...</span>
                  </div>
                ) : (
                  <>
                    <span>Sign In to Admin Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Security Assurance */}
          <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-center gap-2 text-slate-500 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>256-Bit Encrypted Institutional Access</span>
          </div>
        </div>

        {/* Back to Public Site Link */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            &larr; Return to One Way Ministries Homepage
          </Link>
        </div>
      </div>

      {/* Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <HelpCircle className="w-5 h-5 text-red-500" />
                Administrative Access Assistance
              </div>
              <button
                type="button"
                onClick={() => setShowHelpModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-slate-400 text-xs space-y-3 leading-relaxed">
              <p>
                Access to this administration portal is strictly restricted to authorized One Way Ministries leadership and staff.
              </p>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs space-y-2">
                <p className="font-bold text-white">Authorized Administrator Account:</p>
                <p>
                  Username: <strong className="text-red-400 font-mono">admin@onewayministries.co</strong>
                </p>
                <p>
                  Default Password: <strong className="text-slate-200 font-mono">oneway2026!</strong>
                </p>
                <p className="pt-1 text-[11px] text-slate-500">
                  Headquarters: 2311 Oxford brook court, Katy Texas, 77493
                  <br />Direct Phone: +1 832-908-7487
                </p>
              </div>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowHelpModal(false)}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold tracking-wide uppercase transition cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
