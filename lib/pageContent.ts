export interface ContentField {
  id: string;
  label: string;
  type: "text" | "textarea" | "image" | "url";
  value: string;
  helpText?: string;
}

export interface ContentSection {
  id: string;
  title: string;
  description?: string;
  fields: ContentField[];
}

export interface EditablePage {
  id: string;
  title: string;
  path: string;
  section: string;
  status: string;
  lastModified: string;
  meta: {
    title: string;
    description: string;
  };
  sections: ContentSection[];
}

export function createGalleryFields(folder: string, subfolder: string, filenames: string[]): ContentField[] {
  return filenames.map((file, idx) => ({
    id: `gallery_${idx + 1}`,
    label: `Gallery Photo ${idx + 1}`,
    type: "image" as const,
    value: `/images/${folder}/${subfolder}/${file}`,
  }));
}

export const defaultPageContents: Record<string, EditablePage> = {
  "/": {
    id: "/",
    title: "Home",
    path: "/",
    section: "Main",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "One Way Ministries | Colombia",
      description: "Restoring hope in Colombia through faith and action.",
    },
    sections: [
      {
        id: "hero_section",
        title: "Hero Header & Call to Action",
        description: "The primary header at the top of the homepage.",
        fields: [
          { id: "hero_headline", label: "Hero Headline", type: "textarea", value: "Sharing Hope in Colombia:\nOne Life at a Time" },
          { id: "hero_subtext", label: "Hero Subtext", type: "textarea", value: "Partner with One Way Ministries to empower communities, support our local hubs like Casa del Rey and Morada de Gracia, and make a lasting impact." },
          { id: "hero_bg_image", label: "Hero Background Image", type: "image", value: "/header.webp" },
          { id: "hero_cta_primary_text", label: "Primary Button Text", type: "text", value: "Learn More" },
          { id: "hero_cta_primary_link", label: "Primary Button Link", type: "url", value: "/about" },
          { id: "hero_cta_secondary_text", label: "Secondary Button Text", type: "text", value: "Partner With Us" },
        ],
      },
      {
        id: "who_we_are",
        title: "Who We Are Section",
        description: "Mission description and four primary pillars.",
        fields: [
          { id: "about_label", label: "Small Top Label", type: "text", value: "WHO WE ARE" },
          { id: "about_heading", label: "Section Heading", type: "text", value: "Serving in Colombia - South America Christ Way" },
          { id: "about_description", label: "Section Description", type: "textarea", value: "We are dedicated to sharing Christ’s love throughout Colombia through strategic service and collaborative partnerships, working tirelessly to restore hope and dignity to every family via unwavering, Gospel-centered compassion." },
          { id: "about_image", label: "Featured Image", type: "image", value: "/missionaries.webp" },
          { id: "floating_box_quote", label: "Floating Quote Box", type: "textarea", value: "We believe that faith is not only something to be practiced, but something to be lived daily, through acts of kindness, generosity, and understanding." },
          { id: "pillar_1_title", label: "Pillar 1 Title", type: "text", value: "ORPHANHOOD" },
          { id: "pillar_1_text", label: "Pillar 1 Description", type: "textarea", value: "Providing a nurturing family environment and spiritual guidance for children in Colombia who have lost their parents, ensuring they are raised with hope." },
          { id: "pillar_2_title", label: "Pillar 2 Title", type: "text", value: "HOMELESS" },
          { id: "pillar_2_text", label: "Pillar 2 Description", type: "textarea", value: "Through our local hubs like Casa del Rey and Amor Inagotable, we offer shelter and basic necessities to those in need." },
          { id: "pillar_3_title", label: "Pillar 3 Title", type: "text", value: "EDUCATION" },
          { id: "pillar_3_text", label: "Pillar 3 Description", type: "textarea", value: "Empowering the next generation through academic support and spiritual formation to help break the cycle of poverty and hunger in their communities." },
          { id: "pillar_4_title", label: "Pillar 4 Title", type: "text", value: "GOSPEL OUTREACH" },
          { id: "pillar_4_text", label: "Pillar 4 Description", type: "textarea", value: "All initiatives guided by our in-country partners are designed to reach the Colombian people with the Gospel." },
        ],
      },
      {
        id: "guainia_mission",
        title: "Guainía Outreach Video & Newsletter Callout",
        description: "The featured ministry highlight and newsletter signup box.",
        fields: [
          { id: "guainia_tag", label: "Highlight Tag", type: "text", value: "One of our ministries" },
          { id: "guainia_title", label: "Mission Title", type: "text", value: "The Guainia Trans-cultural Mission" },
          { id: "guainia_desc", label: "Mission Description", type: "textarea", value: "Supports Alfa & Omega church planting among indigenous communities in Colombia’s Amazon region, providing Gospel outreach, leadership training, Bible translation support, and practical resources to strengthen local churches and pastors serving diverse ethnic groups." },
          { id: "guainia_bg_image", label: "Background Banner Image", type: "image", value: "/banner-worship.webp" },
          { id: "newsletter_callout_title", label: "Newsletter Headline", type: "textarea", value: "Stay connected, pray with us, and discover how God may be calling you to be part of this mission." },
        ],
      },
    ],
  },
  "/about": {
    id: "/about",
    title: "About Us",
    path: "/about",
    section: "About",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "About Us | One Way Ministries",
      description: "Restoring hope in Colombia through faith and action.",
    },
    sections: [
      {
        id: "banner",
        title: "Header Banner",
        description: "Hero header for the About Us page.",
        fields: [
          { id: "banner_title", label: "Banner Title", type: "text", value: "About Us" },
          { id: "banner_subtitle", label: "Banner Subtitle", type: "text", value: "Restoring hope in Colombia through faith and action." },
        ],
      },
      {
        id: "statement",
        title: "Mission Statement & Scripture Quote",
        description: "Core ministry statement and Mathew 25:40 quote.",
        fields: [
          { id: "statement_intro", label: "Statement Intro", type: "textarea", value: "We are a non-profit Ministry that seeks to help those most in need by giving them Love and quality of life as JESUS would do. With your donations we support Foundations that work hand in hand with us to fulfill our Vision." },
          { id: "statement_quote", label: "Scripture Quote", type: "textarea", value: "“And the King will answer and say to them: Truly I say to you, in as much as you did it to one of the least of these my brothers, you did it to me”. (Mt 25;40)" },
          { id: "faith_purpose_title", label: "Faith & Purpose Title", type: "text", value: "One Way Ministries International Statement of Faith and Purpose" },
          { id: "faith_purpose_p1", label: "Faith & Purpose Intro", type: "textarea", value: "The members of One Way Ministries International strive to follow Jesus and do what He did in these areas: sharing the Gospel and assisting our partner organizations as they do the same, aligning our lives with those outside of the Church, and providing assistance to orphans and the destitute." },
        ],
      },
      {
        id: "board_members",
        title: "Board of Directors & Coordinators",
        description: "Leadership team images and roles.",
        fields: [
          { id: "board_title", label: "Section Title", type: "text", value: "Board of Directors" },
          { id: "board_1_name", label: "Member 1: Name", type: "text", value: "Bridman Alarca" },
          { id: "board_1_role", label: "Member 1: Role", type: "text", value: "President" },
          { id: "board_1_img", label: "Member 1: Photo", type: "image", value: "/images/board-members/bridman-alarca.webp" },
          { id: "board_2_name", label: "Member 2: Name", type: "text", value: "Yulih Alarca" },
          { id: "board_2_role", label: "Member 2: Role", type: "text", value: "Secretary" },
          { id: "board_2_img", label: "Member 2: Photo", type: "image", value: "/images/board-members/yulih-alarca.webp" },
          { id: "board_3_name", label: "Member 3: Name", type: "text", value: "Ada Orozco" },
          { id: "board_3_role", label: "Member 3: Role", type: "text", value: "Board Member" },
          { id: "board_3_img", label: "Member 3: Photo", type: "image", value: "/images/board-members/ada-orozco.webp" },
          { id: "board_4_name", label: "Member 4: Name", type: "text", value: "Robert Taylor" },
          { id: "board_4_role", label: "Member 4: Role", type: "text", value: "Board Member" },
          { id: "board_4_img", label: "Member 4: Photo", type: "image", value: "/images/board-members/robert-taylor.webp" },
          { id: "board_5_name", label: "Member 5: Name", type: "text", value: "Johnnie Mclin" },
          { id: "board_5_role", label: "Member 5: Role", type: "text", value: "Treasurer" },
          { id: "board_5_img", label: "Member 5: Photo", type: "image", value: "/images/board-members/johnnie-mclin.webp" },
          { id: "board_6_name", label: "Member 6: Name", type: "text", value: "Dawn Franke" },
          { id: "board_6_role", label: "Member 6: Role", type: "text", value: "Advisory Board Member" },
          { id: "board_6_img", label: "Member 6: Photo", type: "image", value: "/images/board-members/dawn-franke.webp" },
          { id: "board_7_name", label: "Member 7: Name", type: "text", value: "Sebastian Rodriguez" },
          { id: "board_7_role", label: "Member 7: Role", type: "text", value: "In-Country Coordinator" },
          { id: "board_7_img", label: "Member 7: Photo", type: "image", value: "/images/board-members/sebastian-rodriguez.webp" },
          { id: "board_8_name", label: "Member 8: Name", type: "text", value: "Paula Alvarez" },
          { id: "board_8_role", label: "Member 8: Role", type: "text", value: "In-Country Coordinator" },
          { id: "board_8_img", label: "Member 8: Photo", type: "image", value: "/images/board-members/paula-alvarez.webp" },
        ],
      },
    ],
  },
  "/about/our-story": {
    id: "/about/our-story",
    title: "Our Story",
    path: "/about/our-story",
    section: "About",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Our Story | One Way Ministries",
      description: "Discover how One Way Ministries began its mission across Colombia.",
    },
    sections: [
      {
        id: "banner",
        title: "Header Banner",
        fields: [
          { id: "title", label: "Banner Title", type: "text", value: "Our Story" },
          { id: "subtitle", label: "Banner Subtitle", type: "text", value: "The journey of faith, obedience, and service across Colombia." },
          { id: "image", label: "Banner Image", type: "image", value: "/header.webp" },
        ],
      },
      {
        id: "story_content",
        title: "Story Body Text",
        fields: [
          { id: "headline", label: "Main Headline", type: "text", value: "A Calling to Serve the Broken and Marginalized" },
          { id: "story_p1", label: "Story Section 1", type: "textarea", value: "One Way Ministries was born out of a heartfelt calling to stand with the vulnerable in Colombia. Through decades of groundwork and relationships with local pastors, our team witnessed firsthand the immense physical and spiritual needs across urban centers and remote indigenous communities alike." },
          { id: "story_p2", label: "Story Section 2", type: "textarea", value: "Today, we support eleven active ministry hubs spanning church planting, addiction rehabilitation, medical clinics, children's schooling, and outreach along river routes in the Amazon and desert expanses in La Guajira." },
          { id: "feature_image", label: "Story Photo", type: "image", value: "/overlap-1.webp" },
        ],
      },
    ],
  },
  "/about/vision-mission": {
    id: "/about/vision-mission",
    title: "Vision & Mission",
    path: "/about/vision-mission",
    section: "About",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Vision & Mission | One Way Ministries",
      description: "Our core vision and mission to transform lives for Christ in Colombia.",
    },
    sections: [
      {
        id: "banner",
        title: "Header Banner",
        fields: [
          { id: "title", label: "Banner Title", type: "text", value: "Vision & Mission" },
          { id: "subtitle", label: "Banner Subtitle", type: "text", value: "Rooted in biblical truth, driven by Gospel love." },
          { id: "image", label: "Banner Image", type: "image", value: "/banner-worship.webp" },
        ],
      },
      {
        id: "vision_mission_content",
        title: "Vision and Mission Statements",
        fields: [
          { id: "mission_headline", label: "Mission Headline", type: "text", value: "Our Mission" },
          { id: "mission_text", label: "Mission Statement", type: "textarea", value: "To glorify God by reaching the lost in Colombia, ministering to orphans, the homeless, and underserved families with compassionate Christ-centered care, and equipping local pastors and leaders to multiply healthy churches." },
          { id: "vision_headline", label: "Vision Headline", type: "text", value: "Our Vision" },
          { id: "vision_text", label: "Vision Statement", type: "textarea", value: "A transformed Colombia where every community—from bustling cities to isolated river frontiers—experiences the saving grace of Jesus Christ and flourishing biblical fellowship." },
          { id: "vision_image", label: "Vision Graphic", type: "image", value: "/overlap-2.webp" },
        ],
      },
    ],
  },
  "/ministries": {
    id: "/ministries",
    title: "Ministries Overview",
    path: "/ministries",
    section: "Ministries",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Ministries | One Way Ministries",
      description: "Explore all our active ministry partnerships across Colombia.",
    },
    sections: [
      {
        id: "banner",
        title: "Header Banner",
        fields: [
          { id: "title", label: "Banner Title", type: "text", value: "Our Ministries" },
          { id: "subtitle", label: "Banner Subtitle", type: "text", value: "Serving communities across Colombia with compassion and truth." },
          { id: "image", label: "Banner Background Image", type: "image", value: "/header.webp" },
        ],
      },
      {
        id: "overview",
        title: "Ministries Overview Headline",
        fields: [
          { id: "headline", label: "Section Headline", type: "text", value: "Active Ministry Hubs in Colombia" },
          { id: "intro_text", label: "Introductory Description", type: "textarea", value: "Each of our ministries is led by dedicated local leaders who understand the unique cultural and spiritual landscape of their region. Together, we work hand-in-hand to bring Gospel renewal and tangible assistance to those who need it most." },
        ],
      },
    ],
  },
  "/ministries/nuevo-comienzo": {
    id: "/ministries/nuevo-comienzo",
    title: "Iglesia Cristiana Nuevo Comienzo",
    path: "/ministries/nuevo-comienzo",
    section: "Ministries",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Nuevo Comienzo | One Way Ministries",
      description: "Discipleship, pastoral formation, and strengthening local leaders in Ambalema and El Chorrillo.",
    },
    sections: [
      {
        id: "banner",
        title: "Header & Featured Image",
        fields: [
          { id: "title", label: "Ministry Title", type: "text", value: "Iglesia Cristiana Nuevo Comienzo" },
          { id: "tagline", label: "Tagline", type: "text", value: "Discipleship and Pastoral Formation in Ambalema and El Chorrillo" },
          { id: "image", label: "Featured Cover Photo", type: "image", value: "/images/ministries/nuevo-comienzo.webp" },
        ],
      },
      {
        id: "content",
        title: "Ministry Story & Overview",
        fields: [
          { id: "excerpt", label: "Short Excerpt", type: "textarea", value: "Discipleship, pastoral formation, and strengthening local leaders in Ambalema and El Chorrillo." },
          { id: "description", label: "Full Story / Overview", type: "textarea", value: "This ministry was started by Iglesia Bautista Renacer in Bogota, Colombia and has been operating for decades. One Way agreed to take over this ministry in 2024. The ministry in Ambalema and El Chorrillo focuses on discipleship, pastoral formation, and strengthening local ministry leaders in vulnerable communities." },
        ],
      },
      {
        id: "gallery",
        title: "Photo Gallery",
        description: "Interactive photo gallery images for this ministry.",
        fields: createGalleryFields("ministries", "nuevo-comienzo", Array.from({ length: 10 }, (_, i) => `img${String(i + 1).padStart(2, "0")}.webp`)),
      },
    ],
  },
  "/ministries/shalom-mision-xtrema": {
    id: "/ministries/shalom-mision-xtrema",
    title: "Shalom Mision Xtrema Foundation",
    path: "/ministries/shalom-mision-xtrema",
    section: "Ministries",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Shalom Mision Xtrema | One Way Ministries",
      description: "Restoration from drug addiction, discipleship, and spiritual renewal at Casa del Rey.",
    },
    sections: [
      {
        id: "banner",
        title: "Header & Featured Image",
        fields: [
          { id: "title", label: "Ministry Title", type: "text", value: "Shalom Mision Xtrema Foundation" },
          { id: "tagline", label: "Tagline", type: "text", value: "Restoration from Addiction and Renewal at Casa del Rey" },
          { id: "image", label: "Featured Cover Photo", type: "image", value: "/images/ministries/shalom-mision-xtrema.webp" },
        ],
      },
      {
        id: "content",
        title: "Ministry Story & Overview",
        fields: [
          { id: "excerpt", label: "Short Excerpt", type: "textarea", value: "Restoration from drug addiction, discipleship, and spiritual renewal at Casa del Rey." },
          { id: "description", label: "Full Story / Overview", type: "textarea", value: "Casa del Rey ministers primarily to individuals seeking restoration from drug addiction, discipleship, and spiritual renewal. Through regular visits, Bible teaching, worship, fellowship, and practical encouragement, the ministry creates spaces where participants can experience authentic Christian community." },
        ],
      },
      {
        id: "gallery",
        title: "Photo Gallery",
        description: "Interactive photo gallery images for this ministry.",
        fields: createGalleryFields("ministries", "shalom-mision-xtrema", Array.from({ length: 22 }, (_, i) => `img${String(i + 1).padStart(2, "0")}.webp`)),
      },
    ],
  },
  "/ministries/iglesia-alfa-y-omega": {
    id: "/ministries/iglesia-alfa-y-omega",
    title: "Iglesia Alfa y Omega (Inírida)",
    path: "/ministries/iglesia-alfa-y-omega",
    section: "Ministries",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Alfa y Omega | One Way Ministries",
      description: "Serving indigenous communities in the Colombian Amazon through biblical teaching.",
    },
    sections: [
      {
        id: "banner",
        title: "Header & Featured Image",
        fields: [
          { id: "title", label: "Ministry Title", type: "text", value: "Iglesia Alfa y Omega (Inírida)" },
          { id: "tagline", label: "Tagline", type: "text", value: "Reaching Indigenous Communities in the Colombian Amazon" },
          { id: "image", label: "Featured Cover Photo", type: "image", value: "/images/ministries/iglesia-alfa-y-omega.webp" },
        ],
      },
      {
        id: "content",
        title: "Ministry Story & Overview",
        fields: [
          { id: "excerpt", label: "Short Excerpt", type: "textarea", value: "Serving indigenous communities in the Colombian Amazon through biblical teaching and leadership training." },
          { id: "description", label: "Full Story / Overview", type: "textarea", value: "Located in the Colombian Amazon, the Guainía ministry serves indigenous communities through biblical teaching, leadership training, discipleship, and pastoral care. Working alongside local pastors, this ministry seeks to strengthen churches in remote regions." },
        ],
      },
      {
        id: "gallery",
        title: "Photo Gallery",
        description: "Interactive photo gallery images for this ministry.",
        fields: createGalleryFields("ministries", "iglesia-alfa-y-omega", Array.from({ length: 15 }, (_, i) => `img${String(i + 1).padStart(2, "0")}.webp`)),
      },
    ],
  },
  "/ministries/morada-de-gracia": {
    id: "/ministries/morada-de-gracia",
    title: "Morada De Gracia Foundation",
    path: "/ministries/morada-de-gracia",
    section: "Ministries",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Morada De Gracia | One Way Ministries",
      description: "Support for children and families facing educational, emotional, and social challenges.",
    },
    sections: [
      {
        id: "banner",
        title: "Header & Featured Image",
        fields: [
          { id: "title", label: "Ministry Title", type: "text", value: "Morada De Gracia Foundation" },
          { id: "tagline", label: "Tagline", type: "text", value: "Educational and Emotional Support for Children and Families" },
          { id: "image", label: "Featured Cover Photo", type: "image", value: "/images/ministries/morada-de-gracia.webp" },
        ],
      },
      {
        id: "content",
        title: "Ministry Story & Overview",
        fields: [
          { id: "excerpt", label: "Short Excerpt", type: "textarea", value: "Support for children and families facing educational, emotional, and social challenges." },
          { id: "description", label: "Full Story / Overview", type: "textarea", value: "Morada de Gracia ministers to children and families facing educational, emotional, and social challenges. Through schooling support, family discipleship, and spiritual care, the ministry works to create safe environments where children can flourish." },
        ],
      },
      {
        id: "gallery",
        title: "Photo Gallery",
        description: "Interactive photo gallery images for this ministry.",
        fields: createGalleryFields("ministries", "morada-de-gracia", Array.from({ length: 19 }, (_, i) => `img${String(i + 1).padStart(2, "0")}.webp`)),
      },
    ],
  },
  "/ministries/nuevo-amanecer": {
    id: "/ministries/nuevo-amanecer",
    title: "Nuevo Amanecer",
    path: "/ministries/nuevo-amanecer",
    section: "Ministries",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Nuevo Amanecer | One Way Ministries",
      description: "Mentorship and spiritual support for girls from difficult family backgrounds.",
    },
    sections: [
      {
        id: "banner",
        title: "Header & Featured Image",
        fields: [
          { id: "title", label: "Ministry Title", type: "text", value: "Nuevo Amanecer" },
          { id: "tagline", label: "Tagline", type: "text", value: "Mentorship and Healing for Young Women" },
          { id: "image", label: "Featured Cover Photo", type: "image", value: "/images/ministries/nuevo-amanecer.webp" },
        ],
      },
      {
        id: "content",
        title: "Ministry Story & Overview",
        fields: [
          { id: "excerpt", label: "Short Excerpt", type: "textarea", value: "Mentorship and spiritual support for girls from difficult family backgrounds." },
          { id: "description", label: "Full Story / Overview", type: "textarea", value: "Nuevo Amanecer serves girls from difficult family backgrounds by offering encouragement, mentorship, biblical teaching, and meaningful activities designed to communicate hope and value." },
        ],
      },
      {
        id: "gallery",
        title: "Photo Gallery",
        description: "Interactive photo gallery images for this ministry.",
        fields: createGalleryFields("ministries", "nuevo-amanecer", Array.from({ length: 27 }, (_, i) => `img${String(i + 1).padStart(2, "0")}.webp`)),
      },
    ],
  },
  "/ministries/amor-inagotable": {
    id: "/ministries/amor-inagotable",
    title: "Amor Inagotable Foundation",
    path: "/ministries/amor-inagotable",
    section: "Ministries",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Amor Inagotable | One Way Ministries",
      description: "Faith-driven holistic care for vulnerable populations in Medellín.",
    },
    sections: [
      {
        id: "banner",
        title: "Header & Featured Image",
        fields: [
          { id: "title", label: "Ministry Title", type: "text", value: "Amor Inagotable Foundation" },
          { id: "tagline", label: "Tagline", type: "text", value: "Holistic Care and Restoration in Medellín" },
          { id: "image", label: "Featured Cover Photo", type: "image", value: "/images/ministries/amor-inagotable.webp" },
        ],
      },
      {
        id: "content",
        title: "Ministry Story & Overview",
        fields: [
          { id: "excerpt", label: "Short Excerpt", type: "textarea", value: "Faith-driven holistic care for vulnerable populations in Medellín." },
          { id: "description", label: "Full Story / Overview", type: "textarea", value: "Corporación Amor Inagotable, Amor por Mi Prójimo is a faith-driven organization in Medellín dedicated to serving vulnerable populations through holistic care integrating social support, emotional restoration, and spiritual guidance." },
        ],
      },
      {
        id: "gallery",
        title: "Photo Gallery",
        description: "Interactive photo gallery images for this ministry.",
        fields: createGalleryFields("ministries", "amor-inagotable", ["img01.webp", "img02.webp", "img03.webp", "img04.webp", "img05.webp", "img06.webp", "img08.webp", "img09.webp"]),
      },
    ],
  },
  "/ministries/impacto-biblico": {
    id: "/ministries/impacto-biblico",
    title: "Iglesia Impacto Biblico",
    path: "/ministries/impacto-biblico",
    section: "Ministries",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Impacto Biblico | One Way Ministries",
      description: "Evangelistic outreach and church planting in Santa Marta.",
    },
    sections: [
      {
        id: "banner",
        title: "Header & Featured Image",
        fields: [
          { id: "title", label: "Ministry Title", type: "text", value: "Iglesia Impacto Biblico" },
          { id: "tagline", label: "Tagline", type: "text", value: "Outreach and Church Planting in Santa Marta" },
          { id: "image", label: "Featured Cover Photo", type: "image", value: "/images/ministries/impacto-biblico.webp" },
        ],
      },
      {
        id: "content",
        title: "Ministry Story & Overview",
        fields: [
          { id: "excerpt", label: "Short Excerpt", type: "textarea", value: "Evangelistic outreach and church planting in Santa Marta." },
          { id: "description", label: "Full Story / Overview", type: "textarea", value: "Impacto Bíblico uses evangelistic outreach—including large-scale film presentations—to bring the Gospel into communities throughout Santa Marta. The Cristo Rey church planting initiative builds relationships in vulnerable neighborhoods." },
        ],
      },
      {
        id: "gallery",
        title: "Photo Gallery",
        description: "Interactive photo gallery images for this ministry.",
        fields: createGalleryFields("ministries", "impacto-biblico", Array.from({ length: 12 }, (_, i) => `img${String(i + 1).padStart(2, "0")}.webp`)),
      },
    ],
  },
  "/ministries/funcifunac": {
    id: "/ministries/funcifunac",
    title: "Funcifunac Foundation Ministry",
    path: "/ministries/funcifunac",
    section: "Ministries",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Funcifunac | One Way Ministries",
      description: "Medical outreach, humanitarian aid, and evangelism in Northern Colombia.",
    },
    sections: [
      {
        id: "banner",
        title: "Header & Featured Image",
        fields: [
          { id: "title", label: "Ministry Title", type: "text", value: "Funcifunac Foundation Ministry" },
          { id: "tagline", label: "Tagline", type: "text", value: "Medical Outreach & Humanitarian Aid in Northern Colombia" },
          { id: "image", label: "Featured Cover Photo", type: "image", value: "/images/ministries/funcifunac.webp" },
        ],
      },
      {
        id: "content",
        title: "Ministry Story & Overview",
        fields: [
          { id: "excerpt", label: "Short Excerpt", type: "textarea", value: "Medical outreach, humanitarian aid, and evangelism in Northern Colombia." },
          { id: "description", label: "Full Story / Overview", type: "textarea", value: "Funcifunac serves communities across Barranquilla, Santa Marta, and La Guajira through medical outreach events, humanitarian aid, evangelism, and support for vulnerable families." },
        ],
      },
      {
        id: "gallery",
        title: "Photo Gallery",
        description: "Interactive photo gallery images for this ministry.",
        fields: createGalleryFields("ministries", "funcifunac", Array.from({ length: 23 }, (_, i) => `img${String(i + 1).padStart(2, "0")}.webp`)),
      },
    ],
  },
  "/ministries/iglesia-reformada-calvary": {
    id: "/ministries/iglesia-reformada-calvary",
    title: "Iglesia Reformada Calvary",
    path: "/ministries/iglesia-reformada-calvary",
    section: "Ministries",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Iglesia Calvary | One Way Ministries",
      description: "Using soccer as a bridge to reach children and families in Santa Marta.",
    },
    sections: [
      {
        id: "banner",
        title: "Header & Featured Image",
        fields: [
          { id: "title", label: "Ministry Title", type: "text", value: "Iglesia Reformada Calvary" },
          { id: "tagline", label: "Tagline", type: "text", value: "Reaching Youth Through Soccer and Scripture" },
          { id: "image", label: "Featured Cover Photo", type: "image", value: "/images/ministries/iglesia-reformada-calvary.webp" },
        ],
      },
      {
        id: "content",
        title: "Ministry Story & Overview",
        fields: [
          { id: "excerpt", label: "Short Excerpt", type: "textarea", value: "Using soccer as a bridge to reach children and families in Santa Marta." },
          { id: "description", label: "Full Story / Overview", type: "textarea", value: "Calvary Church in Santa Marta uses soccer as a bridge to reach children and families with the Gospel. Through sports programs, food assistance, and home visits, relationships are developed that open doors for discipleship." },
        ],
      },
      {
        id: "gallery",
        title: "Photo Gallery",
        description: "Interactive photo gallery images for this ministry.",
        fields: createGalleryFields("ministries", "iglesia-reformada-calvary", Array.from({ length: 8 }, (_, i) => `img${String(i + 1).padStart(2, "0")}.webp`)),
      },
    ],
  },
  "/ministries/unidos-por-la-vida": {
    id: "/ministries/unidos-por-la-vida",
    title: "Unidos por la Vida",
    path: "/ministries/unidos-por-la-vida",
    section: "Ministries",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Unidos por la Vida | One Way Ministries",
      description: "Sports, music, and crafts for children and youth in Santa Marta.",
    },
    sections: [
      {
        id: "banner",
        title: "Header & Featured Image",
        fields: [
          { id: "title", label: "Ministry Title", type: "text", value: "Unidos por la Vida" },
          { id: "tagline", label: "Tagline", type: "text", value: "Music, Recreation, and Hope for Santa Marta Youth" },
          { id: "image", label: "Featured Cover Photo", type: "image", value: "/images/ministries/unidos-por-la-vida.webp" },
        ],
      },
      {
        id: "content",
        title: "Ministry Story & Overview",
        fields: [
          { id: "excerpt", label: "Short Excerpt", type: "textarea", value: "Sports, music, and crafts for children and youth in Santa Marta." },
          { id: "description", label: "Full Story / Overview", type: "textarea", value: "Misión Unidos uses sports, music, recreation, crafts, and Bible teaching as tools to reach children and youth in Santa Marta. Every week, dozens of children participate in safe, uplifting activities." },
        ],
      },
      {
        id: "gallery",
        title: "Photo Gallery",
        description: "Interactive photo gallery images for this ministry.",
        fields: createGalleryFields("ministries", "unidos-por-la-vida", Array.from({ length: 9 }, (_, i) => `img${String(i + 1).padStart(2, "0")}.webp`)),
      },
    ],
  },
  "/ministries/luminar-missionary-foundation": {
    id: "/ministries/luminar-missionary-foundation",
    title: "Luminar Missionary Foundation",
    path: "/ministries/luminar-missionary-foundation",
    section: "Ministries",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Luminar Missionary | One Way Ministries",
      description: "Equipping indigenous leaders and supporting missionary preparation in La Guajira.",
    },
    sections: [
      {
        id: "banner",
        title: "Header & Featured Image",
        fields: [
          { id: "title", label: "Ministry Title", type: "text", value: "Luminar Missionary Foundation" },
          { id: "tagline", label: "Tagline", type: "text", value: "Missionary Preparation Among the Wayuu People" },
          { id: "image", label: "Featured Cover Photo", type: "image", value: "/images/ministries/luminar-missionary-foundation.webp" },
        ],
      },
      {
        id: "content",
        title: "Ministry Story & Overview",
        fields: [
          { id: "excerpt", label: "Short Excerpt", type: "textarea", value: "Equipping indigenous leaders and supporting missionary preparation in La Guajira." },
          { id: "description", label: "Full Story / Overview", type: "textarea", value: "Misión Wayuu serves indigenous communities in the desert regions of La Guajira through biblical training, leadership development, pastoral support, and missionary preparation." },
        ],
      },
      {
        id: "gallery",
        title: "Photo Gallery",
        description: "Interactive photo gallery images for this ministry.",
        fields: createGalleryFields("ministries", "luminar-missionary-foundation", Array.from({ length: 29 }, (_, i) => `img${String(i + 1).padStart(2, "0")}.webp`)),
      },
    ],
  },
  "/news": {
    id: "/news",
    title: "News & Updates",
    path: "/news",
    section: "News",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "News & Updates | One Way Ministries",
      description: "Stay informed about field reports, medical clinics, and outreach in Colombia.",
    },
    sections: [
      {
        id: "banner",
        title: "Header Banner",
        fields: [
          { id: "title", label: "Banner Title", type: "text", value: "Latest News & Updates" },
          { id: "subtitle", label: "Banner Subtitle", type: "text", value: "Field stories, outreach highlights, and ministry reports." },
          { id: "image", label: "Banner Background", type: "image", value: "/banner-worship.webp" },
        ],
      },
    ],
  },
  "/news/medellin-la-mesa-del-rey-project": {
    id: "/news/medellin-la-mesa-del-rey-project",
    title: "Medellín La Mesa del Rey Project",
    path: "/news/medellin-la-mesa-del-rey-project",
    section: "News",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Medellín La Mesa del Rey Project | One Way Ministries",
      description: "Feeding, clothing, and evangelizing over 500 homeless people in Medellín.",
    },
    sections: [
      {
        id: "article_header",
        title: "Article Details",
        fields: [
          { id: "title", label: "Article Title", type: "text", value: "Medellín La Mesa del Rey Project" },
          { id: "date", label: "Event Date", type: "text", value: "JUNE 06, 2026" },
          { id: "category", label: "Category", type: "text", value: "UPDATE" },
          { id: "image", label: "Featured Cover Photo", type: "image", value: "/images/news/medellin-la-mesa-del-rey-project.webp" },
          { id: "excerpt", label: "Article Summary", type: "textarea", value: "Feed, clothes, and evangelize around 500 homeless people. This event allows One Way to work with five different foundations who are involved in ministry work in Medellin, Colombia." },
        ],
      },
      {
        id: "gallery",
        title: "Photo Gallery",
        description: "Photo gallery images for this field report.",
        fields: createGalleryFields("news", "medellin-la-mesa-del-rey-project", ["img01.webp", "img02.webp", "img03.webp", "img04.webp", "img05.webp", "img06.webp", "img08.webp"]),
      },
    ],
  },
  "/news/free-dental-clinic": {
    id: "/news/free-dental-clinic",
    title: "Free Dental Clinic",
    path: "/news/free-dental-clinic",
    section: "News",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Free Dental Clinic | One Way Ministries",
      description: "Providing vital dental care to underserved communities in Inírida, Colombia.",
    },
    sections: [
      {
        id: "article_header",
        title: "Article Details",
        fields: [
          { id: "title", label: "Article Title", type: "text", value: "Free Dental Clinic" },
          { id: "date", label: "Event Date", type: "text", value: "JUNE 09-10, 2026" },
          { id: "category", label: "Category", type: "text", value: "EVENT" },
          { id: "image", label: "Featured Cover Photo", type: "image", value: "/images/news/free-dental-clinic.webp" },
          { id: "excerpt", label: "Article Summary", type: "textarea", value: "A free dental clinic was held in partnership with local healthcare providers, offering essential dental care to underserved communities in Coco Community, Inirida, Colombia. Over 200 individuals will receive free treatment and oral health education during this impactful event." },
        ],
      },
      {
        id: "gallery",
        title: "Photo Gallery",
        description: "Photo gallery images for this outreach event.",
        fields: createGalleryFields("news", "free-dental-clinic", Array.from({ length: 9 }, (_, i) => `img${String(i + 1).padStart(2, "0")}.webp`)),
      },
    ],
  },
  "/contact": {
    id: "/contact",
    title: "Contact Us",
    path: "/contact",
    section: "Contact",
    status: "Published",
    lastModified: "Today",
    meta: {
      title: "Contact Us | One Way Ministries",
      description: "Connect with One Way Ministries International headquarters and leadership.",
    },
    sections: [
      {
        id: "banner",
        title: "Header Banner",
        fields: [
          { id: "title", label: "Banner Title", type: "text", value: "Contact Us" },
          { id: "subtitle", label: "Banner Subtitle", type: "text", value: "We would love to hear from you. Get in touch with our team." },
          { id: "image", label: "Banner Image", type: "image", value: "/header.webp" },
        ],
      },
      {
        id: "contact_info",
        title: "Headquarters Information",
        fields: [
          { id: "hq_name", label: "Organization Name", type: "text", value: "One Way Ministries International" },
          { id: "address", label: "Address", type: "text", value: "2311 Oxford brook court, Katy Texas, 77493" },
          { id: "phone", label: "Phone Number", type: "text", value: "+1 832-908-7487" },
          { id: "email", label: "Email Address", type: "text", value: "onewayministriescol@gmail.com" },
        ],
      },
    ],
  },
};

export function getEditablePage(path: string, title: string, section: string): EditablePage {
  if (defaultPageContents[path]) {
    return defaultPageContents[path];
  }

  return {
    id: path,
    title,
    path,
    section,
    status: "Published",
    lastModified: "Today",
    meta: {
      title: `${title} | One Way Ministries`,
      description: `Official ${title} page for One Way Ministries in Colombia.`,
    },
    sections: [
      {
        id: "banner",
        title: "Page Header & Banner",
        fields: [
          { id: "title", label: "Page Title", type: "text", value: title },
          { id: "subtitle", label: "Subtitle", type: "text", value: "Restoring hope in Colombia through faith and action." },
          { id: "image", label: "Banner Background Image", type: "image", value: "/header.webp" },
        ],
      },
      {
        id: "content",
        title: "Main Content",
        fields: [
          { id: "headline", label: "Main Headline", type: "text", value: title },
          { id: "body", label: "Main Body Text", type: "textarea", value: `Welcome to the ${title} page at One Way Ministries. Explore our programs, partnerships, and ways to get involved.` },
          { id: "feature_image", label: "Feature Photo", type: "image", value: "/missionaries.webp" },
        ],
      },
    ],
  };
}
