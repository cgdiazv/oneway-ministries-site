export interface MediaItem {
  name: string;
  path: string;
  folder: "banners" | "ministries" | "board-members" | "news" | "logos" | "uploads";
  category: string;
  type: "image" | "svg" | "document";
  size?: number;
}

export const allMediaAssets: MediaItem[] = [
  // --- ROOT BANNERS & MAIN GRAPHICS ---
  { name: "logo.webp", path: "/logo.webp", folder: "banners", category: "Brand Logo", type: "image" },
  { name: "header.webp", path: "/header.webp", folder: "banners", category: "Hero Header", type: "image" },
  { name: "missionaries.webp", path: "/missionaries.webp", folder: "banners", category: "Who We Are", type: "image" },
  { name: "banner-worship.webp", path: "/banner-worship.webp", folder: "banners", category: "Banners", type: "image" },
  { name: "overlap-1.webp", path: "/overlap-1.webp", folder: "banners", category: "Story Callouts", type: "image" },
  { name: "overlap-2.webp", path: "/overlap-2.webp", folder: "banners", category: "Story Callouts", type: "image" },

  // --- BOARD MEMBERS ---
  { name: "bridman-alarca.webp", path: "/images/board-members/bridman-alarca.webp", folder: "board-members", category: "President", type: "image" },
  { name: "yulih-alarca.webp", path: "/images/board-members/yulih-alarca.webp", folder: "board-members", category: "Secretary", type: "image" },
  { name: "ada-orozco.webp", path: "/images/board-members/ada-orozco.webp", folder: "board-members", category: "Board Member", type: "image" },
  { name: "robert-taylor.webp", path: "/images/board-members/robert-taylor.webp", folder: "board-members", category: "Board Member", type: "image" },
  { name: "johnnie-mclin.webp", path: "/images/board-members/johnnie-mclin.webp", folder: "board-members", category: "Treasurer", type: "image" },
  { name: "dawn-franke.webp", path: "/images/board-members/dawn-franke.webp", folder: "board-members", category: "Advisory Board", type: "image" },
  { name: "sebastian-rodriguez.webp", path: "/images/board-members/sebastian-rodriguez.webp", folder: "board-members", category: "In-Country Coordinator", type: "image" },
  { name: "paula-alvarez.webp", path: "/images/board-members/paula-alvarez.webp", folder: "board-members", category: "In-Country Coordinator", type: "image" },

  // --- MINISTRIES MAIN COVERS ---
  { name: "nuevo-comienzo.webp", path: "/images/ministries/nuevo-comienzo.webp", folder: "ministries", category: "Nuevo Comienzo", type: "image" },
  { name: "shalom-mision-xtrema.webp", path: "/images/ministries/shalom-mision-xtrema.webp", folder: "ministries", category: "Shalom Mision Xtrema", type: "image" },
  { name: "iglesia-alfa-y-omega.webp", path: "/images/ministries/iglesia-alfa-y-omega.webp", folder: "ministries", category: "Alfa y Omega", type: "image" },
  { name: "morada-de-gracia.webp", path: "/images/ministries/morada-de-gracia.webp", folder: "ministries", category: "Morada de Gracia", type: "image" },
  { name: "nuevo-amanecer.webp", path: "/images/ministries/nuevo-amanecer.webp", folder: "ministries", category: "Nuevo Amanecer", type: "image" },
  { name: "amor-inagotable.webp", path: "/images/ministries/amor-inagotable.webp", folder: "ministries", category: "Amor Inagotable", type: "image" },
  { name: "impacto-biblico.webp", path: "/images/ministries/impacto-biblico.webp", folder: "ministries", category: "Impacto Biblico", type: "image" },
  { name: "funcifunac.webp", path: "/images/ministries/funcifunac.webp", folder: "ministries", category: "Funcifunac", type: "image" },
  { name: "iglesia-reformada-calvary.webp", path: "/images/ministries/iglesia-reformada-calvary.webp", folder: "ministries", category: "Iglesia Calvary", type: "image" },
  { name: "unidos-por-la-vida.webp", path: "/images/ministries/unidos-por-la-vida.webp", folder: "ministries", category: "Unidos por la Vida", type: "image" },
  { name: "luminar-missionary-foundation.webp", path: "/images/ministries/luminar-missionary-foundation.webp", folder: "ministries", category: "Luminar Missionary", type: "image" },

  // --- MINISTRIES GALLERY PHOTOS ---
  { name: "nuevo-comienzo-01.webp", path: "/images/ministries/nuevo-comienzo/img01.webp", folder: "ministries", category: "Nuevo Comienzo Gallery", type: "image" },
  { name: "nuevo-comienzo-02.webp", path: "/images/ministries/nuevo-comienzo/img02.webp", folder: "ministries", category: "Nuevo Comienzo Gallery", type: "image" },
  { name: "nuevo-comienzo-03.webp", path: "/images/ministries/nuevo-comienzo/img03.webp", folder: "ministries", category: "Nuevo Comienzo Gallery", type: "image" },
  { name: "shalom-01.webp", path: "/images/ministries/shalom-mision-xtrema/img01.webp", folder: "ministries", category: "Shalom Gallery", type: "image" },
  { name: "shalom-02.webp", path: "/images/ministries/shalom-mision-xtrema/img02.webp", folder: "ministries", category: "Shalom Gallery", type: "image" },
  { name: "shalom-03.webp", path: "/images/ministries/shalom-mision-xtrema/img03.webp", folder: "ministries", category: "Shalom Gallery", type: "image" },
  { name: "nuevo-amanecer-01.webp", path: "/images/ministries/nuevo-amanecer/img01.webp", folder: "ministries", category: "Nuevo Amanecer Gallery", type: "image" },
  { name: "nuevo-amanecer-02.webp", path: "/images/ministries/nuevo-amanecer/img02.webp", folder: "ministries", category: "Nuevo Amanecer Gallery", type: "image" },
  { name: "unidos-01.webp", path: "/images/ministries/unidos-por-la-vida/img01.webp", folder: "ministries", category: "Unidos Gallery", type: "image" },
  { name: "unidos-02.webp", path: "/images/ministries/unidos-por-la-vida/img02.webp", folder: "ministries", category: "Unidos Gallery", type: "image" },

  // --- NEWS ASSETS & GALLERIES ---
  { name: "medellin-la-mesa-del-rey-project.webp", path: "/images/news/medellin-la-mesa-del-rey-project.webp", folder: "news", category: "Medellín Outreach", type: "image" },
  { name: "free-dental-clinic.webp", path: "/images/news/free-dental-clinic.webp", folder: "news", category: "Dental Clinic", type: "image" },
  { name: "dental-01.webp", path: "/images/news/free-dental-clinic/img01.webp", folder: "news", category: "Dental Clinic Gallery", type: "image" },
  { name: "dental-02.webp", path: "/images/news/free-dental-clinic/img02.webp", folder: "news", category: "Dental Clinic Gallery", type: "image" },
  { name: "dental-03.webp", path: "/images/news/free-dental-clinic/img03.webp", folder: "news", category: "Dental Clinic Gallery", type: "image" },
  { name: "medellin-01.webp", path: "/images/news/medellin-la-mesa-del-rey-project/img01.webp", folder: "news", category: "Medellín Outreach Gallery", type: "image" },
  { name: "medellin-02.webp", path: "/images/news/medellin-la-mesa-del-rey-project/img02.webp", folder: "news", category: "Medellín Outreach Gallery", type: "image" },

  // --- PARTNER LOGOS ---
  { name: "temple_of_god.svg", path: "/logos/temple_of_god.svg", folder: "logos", category: "Partner Logos", type: "svg" },
  { name: "christian_mission.svg", path: "/logos/christian_mission.svg", folder: "logos", category: "Partner Logos", type: "svg" },
  { name: "find_faith.svg", path: "/logos/find_faith.svg", folder: "logos", category: "Partner Logos", type: "svg" },
  { name: "faith_connect.svg", path: "/logos/faith_connect.svg", folder: "logos", category: "Partner Logos", type: "svg" },
  { name: "christian.svg", path: "/logos/christian.svg", folder: "logos", category: "Partner Logos", type: "svg" },
];

export const mediaFolders = [
  { id: "all", label: "All Folders", icon: "Folder" },
  { id: "banners", label: "/banners & Hero", icon: "Layout" },
  { id: "ministries", label: "/images/ministries", icon: "HeartHandshake" },
  { id: "board-members", label: "/images/board-members", icon: "Users" },
  { id: "news", label: "/images/news", icon: "FileText" },
  { id: "logos", label: "/logos", icon: "Shield" },
  { id: "uploads", label: "Uploaded Assets", icon: "UploadCloud" },
];

export function getCustomMediaAssets(): MediaItem[] {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem("oneway_custom_media_assets");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function saveCustomMediaAsset(item: MediaItem): MediaItem[] {
  if (typeof window === "undefined") return [item];
  try {
    const current = getCustomMediaAssets();
    const filtered = current.filter((m) => m.path !== item.path);
    const updated = [item, ...filtered];
    localStorage.setItem("oneway_custom_media_assets", JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error("Failed to save custom media asset:", err);
    return [item];
  }
}

export function deleteCustomMediaAsset(path: string): MediaItem[] {
  if (typeof window === "undefined") return [];
  try {
    const current = getCustomMediaAssets();
    const updated = current.filter((m) => m.path !== path);
    localStorage.setItem("oneway_custom_media_assets", JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error("Failed to delete custom media asset:", err);
    return [];
  }
}
