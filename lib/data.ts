// --- INTERFACES ---
export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  link: string;
}

export interface MinistryItem {
  id: string; // Este será el slug de la URL
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  link: string;
}

// --- DATOS DE NOTICIAS ---
export const newsData: NewsItem[] = [
  {
    id: "new-community-center-opening",
    title: "New Community Center Opening",
    date: "OCTOBER 12, 2026",
    category: "UPDATE",
    excerpt: "We are thrilled to announce the opening of our new community center in Bogota, providing more space for education and shelter.",
    image: "/project-2.webp",
    link: "/news/new-community-center-opening",
  },
  {
    id: "annual-fundraising-gala-results",
    title: "Annual Fundraising Gala Results",
    date: "SEPTEMBER 28, 2026",
    category: "EVENT",
    excerpt: "Thanks to your generous support, our annual gala exceeded our fundraising goals, allowing us to expand our reach.",
    image: "/project-4.webp",
    link: "/news/annual-fundraising-gala-results",
  },
  {
    id: "mission-trip-to-amazon-region",
    title: "Mission Trip to Amazon Region",
    date: "SEPTEMBER 05, 2026",
    category: "MISSION",
    excerpt: "A team of volunteers recently returned from a successful mission trip, bringing medical supplies and spiritual support.",
    image: "/missionaries.webp",
    link: "/news/mission-trip-to-amazon-region",
  },
  {
    id: "back-to-school-drive-success",
    title: "Back to School Drive Success",
    date: "AUGUST 15, 2026",
    category: "UPDATE",
    excerpt: "Over 500 children received backpacks filled with essential school supplies thanks to our incredible volunteers and donors.",
    image: "/project-1.webp",
    link: "/news/back-to-school-drive-success",
  },
  {
    id: "partnering-with-local-healthcare-providers",
    title: "Partnering with Local Healthcare Providers",
    date: "JULY 22, 2026",
    category: "PARTNERSHIP",
    excerpt: "We have officially partnered with local clinics to provide free health screenings at Casa del Rey twice a month.",
    image: "/project-3.webp",
    link: "/news/partnering-with-local-healthcare-providers",
  },
  {
    id: "youth-soccer-tournament-brings-community-together",
    title: "Youth Soccer Tournament Brings Community Together",
    date: "JUNE 10, 2026",
    category: "EVENT",
    excerpt: "The United For Life Foundation hosted an incredible youth soccer tournament, promoting teamwork and community bonding.",
    image: "/project-2.webp",
    link: "/news/youth-soccer-tournament-brings-community-together",
  },
];

// --- DATOS DE MINISTERIOS ---
export const ministriesData: MinistryItem[] = [
  {
    id: "united-for-life",
    title: "United For Life Foundation",
    date: "MAY 15, 2026",
    category: "FOUNDATION",
    excerpt: "Holistic development through evangelism, music, sports, and education to empower local leaders and youth, fostering spiritual growth and community development.",
    image: "/project-1.webp",
    link: "/ministries/united-for-life",
  },
  {
    id: "funcifunac",
    title: "Funcifunac Foundation Ministry",
    date: "JUNE 02, 2026",
    category: "FOUNDATION",
    excerpt: "Partnering with local contractors to install modern water filtration systems in underserved local neighborhoods.",
    image: "/project-2.webp",
    link: "/ministries/funcifunac",
  },
  {
    id: "impacto-biblico",
    title: "Impacto Biblico Church Planting",
    date: "JULY 10, 2026",
    category: "MINISTRY",
    excerpt: "Christ-centered ministry in Santa Marta, Colombia, commited to faithfuly preaching the Gospel.",
    image: "/project-3.webp",
    link: "/ministries/impacto-biblico",
  },
  {
    id: "casa-del-rey",
    title: "Casa del Rey",
    date: "AUGUST 05, 2026",
    category: "MINISTRY",
    excerpt: "Casa del Rey, together with Shalom Mision Xtrema Church, is a Christ-centered ministry in Bogota, Colombia.",
    image: "/project-4.webp",
    link: "/ministries/casa-del-rey",
  },
];

// --- FUNCIONES DE BÚSQUEDA ---
export const getNewsItemBySlug = (slug: string): NewsItem | undefined => {
  return newsData.find(item => item.id === slug);
};

export const getMinistryItemBySlug = (slug: string): MinistryItem | undefined => {
  return ministriesData.find(item => item.id === slug);
};