export const site = {
  name: "Kane & Scholars",
  shortName: "K&S",
  tagline: "People, Delivery & Change Advisory",
  emails: [
    "office@ksrlimited.com.ng",
    "f.olokpo@ksrlimited.com.ng",
  ] as const,
  phones: ["+234 803-390-5565", "+234 903-165-5934"] as const,
  address: "Plot 548, 1(R) Crescent, FHA Lugbe, Abuja",
  responseTime: "Within one working day",
} as const;

/** Primary contact email (form submissions, default mailto). */
export const siteEmail = site.emails[0];

export function telHref(phone: string) {
  return `tel:${phone.replace(/[\s()-]/g, "")}`;
}

export type NavItem = { label: string; href: string };

export const nav: readonly NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalLinks: readonly NavItem[] = [
  { label: "FAQs", href: "/faq" },
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms & conditions", href: "/terms" },
] as const;

export type SocialLink = {
  label: string;
  href: string;
  network: "instagram" | "facebook";
};

export const socialLinks: readonly SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ksr_1968",
    network: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Kane-Scholars-Resources/61584348282489/",
    network: "facebook",
  },
] as const;

export type ServiceCapability = {
  title: string;
  description: string;
};

export type Service = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  capabilities: readonly ServiceCapability[];
};

export const servicesIntro =
  "At Kane & Scholars, we offer a broad range of services designed to cater to the unique needs of businesses and leaders across industries. From strategy consulting to leadership development, our services are tailored to help you achieve your goals and elevate your business to new heights." as const;

export const servicesHero = {
  eyebrow: "Services",
  titleLead: "A broad range of services for businesses",
  titleEmphasis: "and leaders.",
  intro:
    "From management consultancy and leadership development to entrepreneurship support, digital solutions, training, strategic partnerships, and CSR — we help organisations and individuals build capacity, improve performance, and achieve sustainable growth.",
} as const;

export const services: Service[] = [
  {
    id: "management_consultancy",
    title: "Management Consultancy Services",
    summary:
      "Strategy, market expansion, financial planning, and organisational development.",
    detail:
      "Customized strategies and operational improvements that drive growth, efficiency, and competitive advantage.",
    capabilities: [
      {
        title: "Business Strategy Development",
        description:
          "Create customized strategies that drive growth, improve operational efficiency, and increase competitive advantage.",
      },
      {
        title: "Market Expansion Consulting",
        description:
          "Enter new markets with confidence, backed by in-depth research and strategic planning.",
      },
      {
        title: "Financial Planning & Risk Management",
        description:
          "Optimize financial health and minimize risks through comprehensive planning and risk mitigation strategies.",
      },
      {
        title: "Organizational Development",
        description:
          "Improve team performance, leadership structures, and business culture to create an environment conducive to growth.",
      },
    ],
  },
  {
    id: "leadership_capacity",
    title: "Leadership & Capacity Building",
    summary:
      "Executive coaching, leadership programmes, and capacity-building workshops.",
    detail:
      "Equip leaders at every level with the skills, confidence, and vision to drive teams and organisations forward.",
    capabilities: [
      {
        title: "Executive Leadership Coaching",
        description:
          "Personalized coaching for senior executives to strengthen decision-making and leadership capabilities.",
      },
      {
        title: "Leadership Development Programs",
        description:
          "Equip rising leaders with the skills they need to lead with confidence and vision.",
      },
      {
        title: "Women & Youth Leadership Programs",
        description:
          "Empowering the next generation of leaders with specialized programs designed for women and youth entrepreneurs.",
      },
      {
        title: "Capacity Building Workshops",
        description:
          "Interactive workshops aimed at building leadership, teamwork, and problem-solving skills.",
      },
    ],
  },
  {
    id: "entrepreneurship_innovation",
    title: "Entrepreneurship & Innovation Support",
    summary:
      "Incubation, innovation workshops, funding access, and digital transformation for startups.",
    detail:
      "Practical support for early-stage ventures — from mentorship and funding to digital tools that enable scale.",
    capabilities: [
      {
        title: "Business Incubation & Acceleration",
        description:
          "Helping early-stage startups grow with mentorship, funding advice, and practical business guidance.",
      },
      {
        title: "Innovation Workshops & Hackathons",
        description:
          "Fostering creativity and collaborative problem-solving through interactive innovation workshops.",
      },
      {
        title: "Access to Funding & Investment Networks",
        description:
          "Connecting entrepreneurs to key investors, funding opportunities, and resources to help them scale.",
      },
      {
        title: "Digital Transformation for Startups",
        description:
          "Integrating digital tools to streamline operations, improve customer experience, and enhance business scalability.",
      },
    ],
  },
  {
    id: "digital_technology",
    title: "Digital & Technological Solutions",
    summary:
      "Automation, web and app development, analytics, and cybersecurity.",
    detail:
      "Technology solutions that improve efficiency, unlock insight, and protect your digital assets.",
    capabilities: [
      {
        title: "Business Automation & CRM Solutions",
        description:
          "Implement customer relationship management systems and automation tools that improve efficiency and productivity.",
      },
      {
        title: "Website & App Development",
        description:
          "Design and develop responsive websites and mobile apps that align with your business goals.",
      },
      {
        title: "Data Analytics & Business Intelligence",
        description:
          "Harness the power of data to make informed business decisions and uncover new opportunities.",
      },
      {
        title: "Cybersecurity Solutions",
        description:
          "Secure your digital assets and ensure business continuity with robust cybersecurity measures.",
      },
    ],
  },
  {
    id: "training_development",
    title: "Training & Professional Development",
    summary:
      "Corporate training, soft skills, digital skills, and industry-specific workshops.",
    detail:
      "Customized programmes that build capability across leadership, communication, and essential workplace skills.",
    capabilities: [
      {
        title: "Corporate Training Programs",
        description:
          "Customized training programs to enhance skills in leadership, communication, customer service, and more.",
      },
      {
        title: "Soft Skills & Personal Development",
        description:
          "Focus on personal growth with training on time management, emotional intelligence, and conflict resolution.",
      },
      {
        title: "Digital Skills Training",
        description:
          "Equip individuals and businesses with essential digital tools and platforms for growth.",
      },
      {
        title: "Industry-Specific Workshops",
        description:
          "Specialized workshops tailored to the needs of specific industries such as agriculture, healthcare, and education.",
      },
    ],
  },
  {
    id: "strategic_partnerships",
    title: "Strategic Partnerships & Networking",
    summary:
      "Partnership development, events, and mentorship networks.",
    detail:
      "Connections and collaborations that extend your reach and accelerate business growth.",
    capabilities: [
      {
        title: "Partnership Development",
        description:
          "Form strategic partnerships that extend your reach and increase your business capabilities.",
      },
      {
        title: "Networking Events & Conferences",
        description:
          "Organize events to bring together industry experts, entrepreneurs, and innovators for collaboration.",
      },
      {
        title: "Mentorship & Advisory Networks",
        description:
          "Facilitate valuable mentor-mentee relationships for business growth and personal development.",
      },
    ],
  },
  {
    id: "csr_initiatives",
    title: "Corporate Social Responsibility (CSR) Initiatives",
    summary:
      "Sustainability consulting, empowerment programmes, and community development.",
    detail:
      "Initiatives that create positive social impact while supporting long-term, responsible business growth.",
    capabilities: [
      {
        title: "Sustainability Consulting",
        description:
          "Help businesses adopt eco-friendly practices and policies for long-term success.",
      },
      {
        title: "Youth & Women Empowerment Programs",
        description:
          "Launch programs to support youth and women entrepreneurs with resources and guidance.",
      },
      {
        title: "Community Development Projects",
        description:
          "Support initiatives that create positive social change and promote inclusive economic growth.",
      },
    ],
  },
];

export type Product = {
  id: string;
  title: string;
  description: string;
};

export const productsIntro =
  "We also offer a range of digital products designed to support the growth of businesses and individuals:" as const;

export const products: readonly Product[] = [
  {
    id: "leadership_courses",
    title: "Online Leadership Training Courses",
    description:
      "Interactive, self-paced courses designed to build leadership capabilities.",
  },
  {
    id: "business_templates",
    title: "Business Templates & Guides",
    description:
      "Practical tools like business planning templates, marketing strategy guides, and financial models to streamline business operations.",
  },
  {
    id: "books_ebooks",
    title: "Books & E-Books",
    description:
      "Expert resources on leadership, entrepreneurship, and business management.",
  },
] as const;

export const sectors = [
  "Fintech",
  "Professional Services",
  "Public Sector",
  "Private Sector",
  "Growth-Stage Enterprises",
  "Regulated Industries",
] as const;

export type ApproachStep = {
  number: string;
  title: string;
  description: string;
};

export const approach: readonly ApproachStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start with your operating model, jurisdictions, and risk environment — not a templated playbook.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We design solutions aligned to strategy, budget, and compliance obligations, with clear ownership.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "We provide hands-on delivery with accountability for outcomes, not just activity.",
  },
] as const;

export type Value = { title: string; description: string };

export const values: readonly Value[] = [
  {
    title: "Integrity",
    description:
      "We build trust by being reliable, dependable, and consistent in our words and actions.",
  },
  {
    title: "Leadership",
    description:
      "We empower individuals to take ownership and make decisions, fostering a culture of accountability and responsibility.",
  },
  {
    title: "Professionality",
    description:
      "We demonstrate expertise and proficiency in our field, staying up to date with the latest trends, research, and best practices.",
  },
  {
    title: "Collaboration",
    description:
      "We treat others with respect and dignity, valuing diverse perspectives and opinions.",
  },
  {
    title: "Agility",
    description:
      "We are resilient and able to navigate ambiguity, uncertainty, and change, maintaining our focus and commitment to delivering exceptional results.",
  },
  {
    title: "Learning",
    description:
      "We are committed to continuous learning and improvement, seeking opportunities to develop new skills, knowledge, and expertise.",
  },
] as const;

export const mission = {
  mission:
    "To deliver high-quality, practical, and result-driven consulting services that enable our clients to achieve operational excellence, business growth, and long-term sustainability.",
  vision:
    "To be a trusted partner in transforming organizations and empowering people through cutting-edge training, advisory, and consulting solutions.",
} as const;

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const faqHero = {
  eyebrow: "FAQs",
  titleLead: "Questions we hear",
  titleEmphasis: "often.",
  intro:
    "Quick answers about our services, digital products, who we work with, and how to get started.",
} as const;

export const faqs: readonly Faq[] = [
  {
    id: "what-we-do",
    question: "What does Kane & Scholars do?",
    answer:
      "We are an education-led advisory practice helping businesses and leaders grow through management consulting, leadership and capacity building, entrepreneurship support, digital solutions, training, strategic partnerships, and CSR initiatives — with a strong focus on MSMEs, women, and youth-led enterprises across Africa.",
  },
  {
    id: "services-offered",
    question: "What services do you offer?",
    answer:
      "Our services span seven areas: management consultancy, leadership and capacity building, entrepreneurship and innovation support, digital and technological solutions, training and professional development, strategic partnerships and networking, and corporate social responsibility. Visit our Services page for full detail on each offering.",
  },
  {
    id: "digital-products",
    question: "Do you offer digital products?",
    answer:
      "Yes. We provide online leadership training courses, business templates and guides, and books and e-books on leadership, entrepreneurship, and business management. See our Products page to learn more.",
  },
  {
    id: "who-we-work-with",
    question: "Who do you work with?",
    answer:
      "We partner with organisations and individuals at different stages of growth — from early-stage startups and MSMEs to established businesses. We have particular experience supporting women and youth-led enterprises.",
  },
  {
    id: "location",
    question: "Where are you based?",
    answer: `Our office is at ${site.address}. We work with clients locally and internationally, combining in-person and remote delivery where appropriate.`,
  },
  {
    id: "getting-started",
    question: "How do I get started?",
    answer:
      "Most engagements begin with a short, confidential conversation. Contact us by email or phone, or send a message through our contact form. We will respond within one working day to understand your needs and outline next steps.",
  },
  {
    id: "engagement-model",
    question: "How do you typically work with clients?",
    answer:
      "We follow a three-step model: Understand your context and goals, Design solutions aligned to your strategy and resources, then Deliver with clear accountability for outcomes. Scope, fees, and timelines are agreed before work begins.",
  },
  {
    id: "response-time",
    question: "How quickly will you respond to an enquiry?",
    answer: `We aim to respond within ${site.responseTime.toLowerCase()} of receiving your message.`,
  },
] as const;

export type TeamMember = {
  id: string;
  role: string;
  expertise?: string;
};

export const teamIntro = {
  eyebrow: "Our team",
  title: "Meet our team of experts.",
  intro:
    "Experienced consultants and advisors bringing depth across training, business advisory, and management consulting.",
} as const;

export const team: readonly TeamMember[] = [
  {
    id: "managing_director",
    role: "Managing Director",
    expertise: "Training Management",
  },
  {
    id: "senior_consultant",
    role: "Senior Consultant",
    expertise: "Business Advisory",
  },
  {
    id: "consultant",
    role: "Consultant",
    expertise: "Management Consulting",
  },
  {
    id: "principal_consultant",
    role: "Principal Consultant",
  },
] as const;

export const founder = {
  name: "Fejiro Olokpo",
  role: "Founder & Principal Consultant",
  bio: [
    "Kane & Scholars is led by Fejiro Olokpo, an education-led and innovation-focused organization dedicated to developing entrepreneurs and strengthening MSMEs across Africa",
    "We provide tailored training manage, business advisory and management consulting services that help individuals and organizations build capacity, improve performance and achieve sustainable growth.",
    "At KSR, we are committed to shaping future-ready businesses that can innovate, scale and thrive",
    "Our services focus on leadership development, entrepreneurship, and technological integration, ensuring that your business stays competitive in a fast-paced world. We specialize in working with women and youth-led enterprises, providing them with the resources and support needed to succeed"
  ],
  credentials: [
    { label: "Years in practice", value: "14+" },
    { label: "Jurisdictions delivered", value: "11" },
    { label: "Clients served", value: "60+" },
  ],
} as const;
