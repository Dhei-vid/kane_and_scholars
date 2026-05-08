export const site = {
  name: "Kane & Scholars",
  shortName: "K&S",
  tagline: "People, Delivery & Change Advisory",
  email: "advisory@kaneandscholars.com",
  phone: "+44 (0) 20 4538 2110",
  address: "12 Holborn Circus, London EC1N 2HJ",
  responseTime: "Within one working day",
} as const;

export type NavItem = { label: string; href: string };

export const nav: readonly NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export type Service = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  capabilities: readonly string[];
};

export const services: Service[] = [
  {
    id: "talent",
    title: "Talent & HR",
    summary: "Full lifecycle support, from hiring to performance.",
    detail:
      "Operating models, hiring frameworks, and performance systems built for organisations growing through complexity.",
    capabilities: [
      "People operating-model design",
      "Hiring strategy and executive search partnership",
      "Performance and reward frameworks",
      "Employee relations and policy",
    ],
  },
  {
    id: "learning",
    title: "Learning & Development",
    summary: "Targeted programmes aligned to strategic outcomes.",
    detail:
      "Capability mapping, leadership development, and onboarding designed against measurable business goals.",
    capabilities: [
      "Capability and skills mapping",
      "Leadership and manager development",
      "Onboarding and role-readiness programmes",
      "Learning measurement and ROI",
    ],
  },
  {
    id: "delivery",
    title: "Project Delivery",
    summary: "Structured programme and project execution.",
    detail:
      "Discovery, mobilisation and delivery of cross-functional initiatives — accountable, resourced, and on cadence.",
    capabilities: [
      "Programme structure and governance",
      "Cross-functional mobilisation",
      "Delivery assurance and recovery",
      "Vendor and partner management",
    ],
  },
  {
    id: "change",
    title: "Change & TUPE",
    summary: "Restructuring and workforce transitions.",
    detail:
      "Stakeholder strategy, consultation, and transfer execution that hold up to legal, operational and human scrutiny.",
    capabilities: [
      "Restructure planning and consultation",
      "TUPE in / TUPE out execution",
      "Stakeholder communications strategy",
      "Manager enablement during change",
    ],
  },
  {
    id: "payroll",
    title: "Global Payroll",
    summary: "Compliant payroll across jurisdictions.",
    detail:
      "Vendor selection, governance, and run-state assurance for distributed workforces across the UK, EMEA and Africa.",
    capabilities: [
      "Payroll vendor selection and transition",
      "Multi-jurisdictional governance",
      "Controls, reconciliation and audit readiness",
      "Run-state assurance and remediation",
    ],
  },
  {
    id: "consulting",
    title: "Consulting",
    summary: "Strategy paired with hands-on execution.",
    detail:
      "Discrete advisory, fractional leadership and decision-grade diagnostics for boards and executive teams.",
    capabilities: [
      "People function diagnostics",
      "Fractional people leadership",
      "Board and executive advisory",
      "Operating-model reviews",
    ],
  },
];

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
    description: "Transparency, trust, and ethical delivery at every step.",
  },
  {
    title: "Professionalism",
    description: "Rigour, reliability, and consistently high standards.",
  },
  {
    title: "Commitment",
    description: "Ownership of outcomes, not just activity.",
  },
  {
    title: "Accountability",
    description: "Responsibility for results — visible and measurable.",
  },
  {
    title: "Client Focus",
    description: "Service, partnership, and meaningful value creation.",
  },
  {
    title: "Solution-led",
    description: "From advice to execution, never one without the other.",
  },
] as const;

export const mission = {
  mission:
    "To deploy compliant, effective people, payroll, and project solutions that address complex organisational challenges while enhancing performance, resilience, and long-term value.",
  vision:
    "To be a trusted advisory partner enabling organisations to operate efficiently, manage change effectively, and scale responsibly — regardless of geography.",
} as const;

export type Insight = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
};

export const insights: Insight[] = [
  {
    id: "multi-jurisdictional-growth",
    category: "People Strategy",
    title: "Navigating workforce complexity in multi-jurisdictional growth",
    excerpt:
      "What it actually takes to operate a coherent people function across three or more legal entities.",
    readTime: "6 min read",
    date: "April 2026",
  },
  {
    id: "hidden-costs-change",
    category: "Organisational Change",
    title: "The hidden costs of poor change management",
    excerpt:
      "Why most transformations underperform — and the four levers leadership teams routinely ignore.",
    readTime: "8 min read",
    date: "March 2026",
  },
  {
    id: "resilient-hr-models",
    category: "HR Transformation",
    title: "Building resilient HR operating models for scale",
    excerpt:
      "An operating-model lens for People functions moving from start-up scrappy to scale-up rigour.",
    readTime: "7 min read",
    date: "February 2026",
  },
  {
    id: "payroll-as-advantage",
    category: "Payroll & Compliance",
    title: "Global payroll: compliance as competitive advantage",
    excerpt:
      "Why payroll governance belongs on the board agenda, not in a spreadsheet at the bottom of finance.",
    readTime: "5 min read",
    date: "January 2026",
  },
  {
    id: "responsibility-and-change",
    category: "Organisational Change",
    title: "Change fails when responsibility is abstract",
    excerpt:
      "Most failed change isn't about resistance — it's about responsibility that nobody actually holds.",
    readTime: "7 min read",
    date: "December 2025",
  },
  {
    id: "stability-over-strategy",
    category: "People Strategy",
    title: "Why people and payroll stability matter more than strategy during change",
    excerpt:
      "Stability in core people operations is the foundation that lets strategic change actually land.",
    readTime: "8 min read",
    date: "November 2025",
  },
];

export const founder = {
  name: "Adaeze Kane",
  role: "Founder & Principal Consultant",
  bio: [
    "Kane & Scholars is led by Adaeze Kane, a London-based people and operations practitioner with a track record across global payroll governance, regulated transformation, and execution-led HR within fintech and professional services.",
    "Her work spans engagements across the United Kingdom, EMEA and Africa — partnering with leadership teams navigating growth, regulatory complexity, and operational change. She combines strategic insight with disciplined delivery so that people, payroll and change initiatives are implemented with rigour and long-term value in mind.",
    "Her role is not simply to advise, but to partner with leaders so that delivery holds — through clear structure, shared accountability, and informed decision-making.",
  ],
  credentials: [
    { label: "Years in practice", value: "14+" },
    { label: "Jurisdictions delivered", value: "11" },
    { label: "Clients served", value: "60+" },
  ],
} as const;
