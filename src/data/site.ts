export type Stat = {
  value: string;
  label: string;
};

export type Card = {
  title: string;
  description: string;
};

export type Step = Card & {
  step: string;
};

export type AcronymBlock = Card & {
  letter: string;
};

export type NamePhilosophy = {
  label: string;
  heading: string;
  intro: string;
  support: string;
  closing: string;
  acronym: AcronymBlock[];
};

export type TeamRole = {
  role: string;
  initials: string;
};

export const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Research", href: "#research" },
  { label: "Approach", href: "#approach" },
  { label: "Independence", href: "#independence" },
  { label: "Contact", href: "#contact" }
];

export const heroStats: Stat[] = [
  {
    value: "25M+",
    label: "Somali-speaking people across the Horn of Africa and the diaspora"
  },
  {
    value: "10.7M",
    label: "Internet users in Somalia recorded in 2025"
  },
  {
    value: "0",
    label: "Dedicated Somali research institutions focused on digital harm"
  }
];

export const problemCards: Card[] = [
  {
    title: "Platform Blind Spots",
    description:
      "Global platforms often lack the language capacity, local context, and monitoring systems needed to understand Somali-language content and harm."
  },
  {
    title: "Monetized Harm",
    description:
      "Clan-based abuse, misinformation, harassment, and conflict-driven content can gain visibility and financial reward through platform engagement systems."
  },
  {
    title: "Gendered Digital Harm",
    description:
      "Image-based abuse, online intimidation, and technology-facilitated violence are serious harms in Somali communities, but they remain under-documented."
  },
  {
    title: "AI and Language Exclusion",
    description:
      "AI systems increasingly shape moderation, recommendation, and information access, yet Somali remains underrepresented in the datasets and systems that govern these decisions."
  }
];

export const adigaPhilosophy: NamePhilosophy = {
  label: "THE NAME",
  heading: "Why Afka carries the ADIGA philosophy",
  intro:
    'The public name is Afka Digital Institute. Afka means "the language" in Somali, Digital defines the institute\'s focus, and Institute signals the standard of research, evidence, and institutional memory the work requires.',
  support:
    'Behind the name sits a founding idea: ADIGA. In Somali, adiga means "you". For Afka, it is a reminder that digital policy and platform accountability must begin with the people affected by these systems.',
  closing:
    "Afka Digital Institute remains the public name. ADIGA is the philosophy behind the work: evidence built from the ground up, with the people it serves at the center.",
  acronym: [
    {
      letter: "A",
      title: "Afka",
      description:
        "The language, speech, and digital life through which the work begins."
    },
    {
      letter: "D",
      title: "Digital",
      description:
        "The platforms, AI systems, online harms, and technology policies shaping public life."
    },
    {
      letter: "I",
      title: "Institute",
      description:
        "The research standard: careful methods, public evidence, and work that can withstand scrutiny."
    },
    {
      letter: "G",
      title: "Grassroots",
      description:
        "The lived realities of Somali-speaking communities, creators, women, journalists, civil society, and young people online."
    },
    {
      letter: "A",
      title: "Analysis",
      description:
        "The process of turning scattered harms into patterns, findings, datasets, and policy insight."
    }
  ]
};

export const researchAreas: Card[] = [
  {
    title: "Platform Accountability",
    description:
      "Researching how major platforms moderate, monetize, recommend, and protect Somali-speaking users."
  },
  {
    title: "Somali-Language Content Moderation",
    description:
      "Testing whether harmful content in Somali is detected, reviewed, and acted on fairly and consistently."
  },
  {
    title: "Digital Harm and Safety",
    description:
      "Documenting online abuse, harassment, image-based abuse, disinformation, and coordinated manipulation."
  },
  {
    title: "AI Governance",
    description:
      "Studying how automated moderation, large language models, and AI-generated content affect Somali-language information spaces."
  },
  {
    title: "Creator Monetization and Platform Access",
    description:
      "Examining how unequal access to platform monetization shapes creator incentives and online public culture."
  },
  {
    title: "Language Justice",
    description:
      "Advocating for better treatment of under-resourced languages in technology systems, content moderation, search, and digital policy."
  }
];

export const approachSteps: Step[] = [
  {
    step: "01",
    title: "Document",
    description:
      "Collect evidence through interviews, monitoring, case studies, platform tests, and open-source research."
  },
  {
    step: "02",
    title: "Analyze",
    description:
      "Turn scattered incidents into patterns, findings, datasets, and policy insight."
  },
  {
    step: "03",
    title: "Publish",
    description:
      "Produce research reports, policy briefs, explainers, platform accountability notes, and public-interest analysis."
  },
  {
    step: "04",
    title: "Engage",
    description:
      "Work with civil society, researchers, journalists, platform policy teams, donors, and policymakers."
  }
];

export const outputCategories: Card[] = [
  {
    title: "Research Reports",
    description:
      "Long-form evidence-based studies on Somali-language digital harm and platform accountability."
  },
  {
    title: "Policy Briefs",
    description:
      "Targeted analysis for policymakers, platforms, donors, researchers, and civil society."
  },
  {
    title: "Digital Harm Monitor",
    description:
      "Ongoing documentation of harmful trends, platform failures, and emerging risks."
  },
  {
    title: "Platform Accountability Notes",
    description:
      "Focused findings on moderation, monetization, recommendation, and language access."
  },
  {
    title: "AI and Somali Language Briefings",
    description:
      "Analysis of how AI systems affect Somali-language users and information ecosystems."
  },
  {
    title: "Commentary",
    description:
      "Editorial analysis and public-interest writing from Afka researchers and contributors."
  }
];

export const independencePrinciples: Card[] = [
  {
    title: "Research Integrity",
    description: "Evidence-based methods, careful documentation, and clear sourcing."
  },
  {
    title: "Institutional Independence",
    description:
      "Nonpartisan structure and protection from political or commercial interference."
  },
  {
    title: "Public Interest",
    description:
      "Focused on the rights, safety, and dignity of Somali-speaking communities online."
  }
];

export const teamRoles: TeamRole[] = [
  { role: "Founder / Managing Director", initials: "FM" },
  { role: "Research Director", initials: "RD" },
  { role: "Advisory Board", initials: "AB" },
  { role: "Research Fellows", initials: "RF" }
];

export const footerLinks = [
  ...navLinks,
  { label: "Privacy Policy", href: "#" },
  { label: "Research Ethics", href: "#" }
];

export const inquiryReasons = [
  "Research partnerships",
  "Media requests",
  "Platform engagement",
  "Donor conversations",
  "Civil society collaboration"
];
