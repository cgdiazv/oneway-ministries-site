// --- INTERFACES ---
export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  link: string;
  gallery?: string[];
}

export interface MinistryItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  fullDescription: string;
  image: string;
  link: string;
  gallery?: string[];
}

// --- DATOS DE NOTICIAS ---
export const newsData: NewsItem[] = [
  {
    id: "medellin-la-mesa-del-rey-project",
    title: "Medellín La Mesa del Rey Project",
    date: "JUNE 06, 2026",
    category: "UPDATE",
    excerpt: "Feed, clothes, and evangelize around 500 homeless people. This event allows One Way to work with five different foundations who are involved in ministry work in Medellin, Colombia.",
    image: "/images/news/medellin-la-mesa-del-rey-project.webp",
    link: "/news/medellin-la-mesa-del-rey-project",
    gallery: [
      "/images/news/medellin-la-mesa-del-rey-project.webp",
      // Add more image paths here!
    ]
  },
  {
    id: "free-dental-clinic",
    title: "Free Dental Clinic",
    date: "JUNE 09-10, 2026",
    category: "EVENT",
    excerpt: "A free dental clinic was held in partnership with local healthcare providers, offering essential dental care to underserved communities in Coco Community, Inirida, Colombia. Over 200 individuals will receive free treatment and oral health education during this impactful event.",
    image: "/images/news/free-dental-clinic.webp",
    link: "/news/free-dental-clinic",
  },
];

// --- DATOS DE MINISTERIOS ---
export const ministriesData: MinistryItem[] = [
  {
    id: "nuevo-comienzo",
    title: "Iglesia Cristiana Nuevo Comienzo",
    date: "2024",
    category: "MINISTRY",
    excerpt: "Discipleship, pastoral formation, and strengthening local leaders in Ambalema and El Chorrillo.",
    fullDescription: "<p>This ministry was started by Iglesia Bautista Renacer in Bogota, Colombia and has been operating for decades. One Way agreed to take over this ministry in 2024.</p><p>The ministry in <strong>Ambalema</strong> and <strong>El Chorrillo</strong> focuses on discipleship, pastoral formation, and strengthening local ministry leaders in vulnerable communities. Through Bible studies, hermeneutics training, mentoring, and practical support, leaders are equipped to interpret Scripture faithfully and minister effectively within their communities.</p><p>The ministry also invests in families and youth through music classes, evangelistic activities, and intentional relationships. In places where pastoral support is limited, this work seeks to provide encouragement, accountability, and long-term spiritual development so that local churches can become healthier and more sustainable.</p>",
    image: "/images/ministries/nuevo-comienzo.webp",
    link: "/ministries/nuevo-comienzo",
  },
  {
    id: "shalom-mision-xtrema",
    title: "Shalom Mision Xtrema Foundation",
    date: "2024",
    category: "MINISTRY",
    excerpt: "Restoration from drug addiction, discipleship, and spiritual renewal at Casa del Rey.",
    fullDescription: "<p>Ada Orozco, Bridman and Yulih Alarca, joined this ministry in 2022 and One Way took over in 2024.</p><p><strong>Casa del Rey</strong> ministers primarily to individuals seeking restoration from drug addiction, discipleship, and spiritual renewal. Through regular visits, Bible teaching, worship, fellowship, and practical encouragement, the ministry creates spaces where participants can ask difficult questions, grow in biblical understanding, and experience authentic Christian community.<p><p>Together with <strong>Shalom Church</strong>, this ministry emphasizes ongoing discipleship and holistic support—not only ministering to participants but also encouraging ministry leaders and families carrying heavy pastoral responsibilities. The goal is to cultivate lasting transformation through Gospel-centered relationships, biblical truth, and consistent spiritual care.</p>",
    image: "/images/ministries/shalom-mision-xtrema.webp",
    link: "/ministries/shalom-mision-xtrema",
  },
  {
    id: "iglesia-alfa-y-omega",
    title: "Iglesia Alfa y Omega (Inirida)",
    date: "2024",
    category: "MINISTRY",
    excerpt: "Serving indigenous communities in the Colombian Amazon through biblical teaching and leadership training.",
    fullDescription: "<p>Jhony Ramirez and Zoraya Lopez joined this ministry in 2023 and One Way agreed to unite with them in 2024.</p><p>Located in the Colombian Amazon, the <strong>Guainía</strong> ministry serves indigenous communities through biblical teaching, leadership training, discipleship, and pastoral care. Working alongside local pastors, this ministry seeks to strengthen churches in remote regions while equipping believers with sound biblical foundations. Workshops on hermeneutics, worship, and leadership development help local congregations grow in maturity and establish healthier ministry practices rooted in Scripture.</p><p>Beyond church strengthening, the vision of <strong>Guainía</strong> extends toward reaching isolated indigenous communities and raising future leaders for Gospel ministry. The work involves cross-cultural missions, long journeys through river and jungle regions, and ongoing efforts to establish sustainable places of worship and discipleship. This ministry represents a long-term commitment to seeing indigenous churches flourish and communities transformed by Christ.</p>",
    image: "/images/ministries/iglesia-alfa-y-omega.webp",
    link: "/ministries/iglesia-alfa-y-omega",
  },
  {
    id: "morada-de-gracia",
    title: "Morada De Gracia Foundation",
    date: "2024",
    category: "MINISTRY",
    excerpt: "Support for children and families facing educational, emotional, and social challenges.",
    fullDescription: "<p>One Way joined with them in 2024</p><p>Morada de Gracia ministers to children and families facing educational, emotional, and social challenges. Through a combination of schooling support, family discipleship, and spiritual care, the ministry works to create safe environments where children can grow academically and spiritually.</p><p>The ministry extends beyond the classroom into homes, walking alongside families experiencing addiction, broken relationships, and hardship. By building trust and offering consistent support, Morada de Gracia seeks to bring transformation through the Gospel to both children and entire households.</p>",
    image: "/images/ministries/morada-de-gracia.webp",
    link: "/ministries/morada-de-gracia",
  },
  {
    id: "nuevo-amanecer",
    title: "Nuevo Amanecer",
    date: "2024",
    category: "MINISTRY",
    excerpt: "Mentorship and spiritual support for girls from difficult family backgrounds.",
    fullDescription: "<p>One Way agreed to join with them in 2024.</p><p>Nuevo Amanecer serves girls from difficult family backgrounds by offering encouragement, mentorship, biblical teaching, and meaningful activities designed to communicate hope and value. Through visits involving crafts, music, sports, gifts, and Bible lessons, relationships are formed that provide emotional and spiritual support.</p><p>The ministry seeks to create moments of joy, trust, and discipleship for young women who often carry deep personal challenges. By investing in consistent presence and care, Nuevo Amanecer aims to point these girls toward healing, identity, and hope in Christ.</p>",
    image: "/images/ministries/nuevo-amanecer.webp",
    link: "/ministries/nuevo-amanecer",
  },
  /*
  {
    id: "pan-de-vida",
    title: "Pan De Vida Ministry",
    date: "2026",
    category: "MINISTRY",
    excerpt: "Serving people experiencing homelessness in Medellín with meals and Gospel-centered care.",
    fullDescription: "<p>One Way joined this ministry in 2026</p><p>Pan de Vida is a ministry of Iglesia Cristiana Emanuel Trinidad in Medellín that was born out of a biblical conviction rooted in Matthew 25: “I was hungry and you gave me something to eat.” With a mission centered on serving people experiencing homelessness, the ministry provides much more than weekly meals—it seeks to restore dignity, hope, and identity through the Gospel of Jesus Christ. Every week, approximately 250 individuals living on the streets receive nutritious meals, pastoral care, prayer, biblical teaching, and emotional support. The ministry understands true transformation as holistic, addressing not only physical needs but also the spiritual and social brokenness that often accompanies life on the streets.</p><p>Operating primarily in vulnerable areas of Medellín, including Barrio Antioquia and Barrio Trinidad, Pan de Vida works toward long-term restoration through social reintegration, discipleship, and community support. Led by a team with extensive pastoral and ministry experience and sustained by volunteers and local church members, the ministry seeks to help individuals rebuild their lives while introducing them to the hope found in Christ. Its vision extends beyond temporary relief, aiming instead to become a lasting instrument of transformation for communities deeply affected by addiction, poverty, and social exclusion.</p>",
    image: "/images/ministries/pan-de-vida.webp",
    link: "/ministries/pan-de-vida",
  },
  */
  {
    id: "amor-inagotable",
    title: "Amor Inagotable Foundation",
    date: "2026",
    category: "MINISTRY",
    excerpt: "Faith-driven holistic care for vulnerable populations in Medellín.",
    fullDescription: "<p>One Way joined with this ministry in 2026.</p><p>Corporación Amor Inagotable, Amor por Mi Prójimo is a faith-driven organization in Medellín dedicated to serving vulnerable populations through holistic care that integrates social support, emotional restoration, spiritual guidance, and human development. Established to improve quality of life among individuals facing hardship, the ministry works with children, youth, families, people experiencing addiction, survivors of violence, individuals living on the streets, and others whose fundamental rights have been compromised. Through compassionate relationships and Christ-centered values, the organization seeks to foster healing, inclusion, and sustainable personal growth.</p><p>Amor Inagotable develops programs focused on psychosocial and spiritual intervention, education, leadership formation, community partnerships, and the promotion of human dignity. The ministry works to create opportunities for vulnerable individuals to build meaningful life projects, access healthier environments, and experience restoration in multiple areas of life. With a vision that combines practical assistance with long-term transformation, the organization seeks to strengthen communities by promoting peace, reconciliation, human development, and hope through service motivated by love for God and neighbor.</p>",
    image: "/images/ministries/amor-inagotable.webp",
    link: "/ministries/amor-inagotable",
  },
  {
    id: "impacto-biblico",
    title: "Iglesia Impacto Biblico",
    date: "2024",
    category: "MINISTRY",
    excerpt: "Evangelistic outreach and church planting in Santa Marta.",
    fullDescription: "<p>Sebastian Rodriguez began working with Impacto in 2020 and One Way agree join them in 2024.</p><p><strong>Impacto Bíblico</strong> uses evangelistic outreach—including large-scale film presentations—to bring the Gospel into communities throughout Santa Marta. These events often attract hundreds of people and create opportunities for follow-up discipleship and integration into local churches.</p><p>At the same time, the <strong>Cristo Rey</strong> church planting initiative is building relationships in a vulnerable neighborhood where leaders, youth teams, and volunteers are investing in children, families, and emerging believers. The long-term vision is to establish a healthy local church rooted in discipleship and sustained by trained leaders living among the community.</p>",
    image: "/images/ministries/impacto-biblico.webp",
    link: "/ministries/impacto-biblico",
  },
  {
    id: "funcifunac",
    title: "Funcifunac Foundation Ministry",
    date: "2024",
    category: "MINISTRY",
    excerpt: "Medical outreach, humanitarian aid, and evangelism in Northern Colombia.",
    fullDescription: "<p>Yulih Alarca began working with Flor in 2023 and One Way agreed to join them in 2024.</p><p>Funcifunac serves communities across Barranquilla, Santa Marta, and La Guajira through medical outreach events, humanitarian aid, evangelism, and support for vulnerable families. During these initiatives, practical needs are addressed while sharing the hope of the Gospel with children, youth, and adults.</p><p>The ministry depends heavily on volunteers and logistical support to carry out medical campaigns and seasonal outreach events. As it continues developing younger leaders and expanding operations, <strong>Flor Ministry</strong> remains committed to compassionate service that reflects Christ’s love in underserved regions.</p>",
    image: "/images/ministries/funcifunac.webp",
    link: "/ministries/funcifunac",
  },
  {
    id: "iglesia-reformada-calvary",
    title: "Iglesia Reformada Calvary",
    date: "2026",
    category: "MINISTRY",
    excerpt: "Using soccer as a bridge to reach children and families in Santa Marta.",
    fullDescription: "<p>Sebastian Rodriguez began working with Edison in 2021.  One Way agreed to join this ministry in 2026</p><p>Calvary Church in Santa Marta uses soccer as a bridge to reach children and families with the Gospel. Through sports programs, food assistance, and home visits, relationships are developed that open doors for discipleship and spiritual conversations.</p><p>The ministry recognizes that meaningful transformation often begins with consistent presence and practical support. By serving both children and their families, Calvary Church seeks to build community, strengthen faith, and demonstrate Christ’s love in tangible ways.</p>",
    image: "/images/ministries/iglesia-reformada-calvary.webp",
    link: "/ministries/iglesia-reformada-calvary",
  },
  {
    id: "unidos-por-la-vida",
    title: "Unidos por la Vida",
    date: "2024",
    category: "MINISTRY",
    excerpt: "Sports, music, and crafts for children and youth in Santa Marta.",
    fullDescription: "<p>Sebastian Rodriguez began working with Unidos in 2020 and One Way agree to join them in 2024.</p><p>Misión Unidos uses sports, music, recreation, crafts, and Bible teaching as tools to reach children and youth in Santa Marta. Every week, dozens of children participate in activities designed to provide a safe environment, encouragement, and exposure to the Gospel.</p><p>The ministry also seeks to impact families by connecting them to the local church and creating opportunities for long-term discipleship. In communities where instability and harmful influences are common, Misión Unidos offers consistency, mentorship, and hope through Christ-centered relationships.</p>",
    image: "/images/ministries/unidos-por-la-vida.webp",
    link: "/ministries/unidos-por-la-vida",
  },
  {
    id: "luminar-missionary-foundation",
    title: "Luminar Missionary Foundation",
    date: "2026",
    category: "MINISTRY",
    excerpt: "Equipping indigenous leaders and supporting missionary preparation in La Guajira.",
    fullDescription: "<p>One Way joined with Alvaro in 2026.</p><p>Misión Wayuu serves indigenous communities in the desert regions of La Guajira through biblical training, leadership development, pastoral support, and missionary preparation. The ministry operates in isolated areas where access to resources is limited, yet opportunities for Gospel impact are significant.</p><p>A central vision of the ministry is to equip indigenous believers and establish missionary training centers that will prepare future leaders to serve among the Wayuu people. Through long-term discipleship and cross-cultural ministry, Misión Wayuu seeks to see entire communities transformed and indigenous churches strengthened for generations to come.</p>",
    image: "/images/ministries/luminar-missionary-foundation.webp",
    link: "/ministries/luminar-missionary-foundation",
  },
];

// --- FUNCIONES DE BÚSQUEDA ---
export const getNewsItemBySlug = (slug: string): NewsItem | undefined => {
  return newsData.find(item => item.id === slug);
};

export const getMinistryItemBySlug = (slug: string): MinistryItem | undefined => {
  return ministriesData.find(item => item.id === slug);
};