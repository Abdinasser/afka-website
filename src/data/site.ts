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

export type Insight = Card & {
  label: string;
  href: string;
  status?: string;
};

export type ResearchOutput = Card & {
  label: string;
};

export type AcronymBlock = Card & {
  letter: string;
};

export type NameIcon =
  | "language"
  | "digital"
  | "institute"
  | "communities"
  | "creator"
  | "shield"
  | "journal"
  | "research"
  | "civil"
  | "policy";

export type NameMeaning = Card & {
  icon: NameIcon;
};

export type PeopleGroup = {
  label: string;
  icon: NameIcon;
};

export type NamePhilosophy = {
  label: string;
  heading: string;
  publicStatement: string;
  philosophyStatement: string;
  meanings: NameMeaning[];
  centralIntro: string;
  centralWord: string;
  centralMeaning: string;
  centralSuffix: string;
  peopleIntro: string;
  people: PeopleGroup[];
  footerPublicName: string;
  footerStatement: string;
  acronym: AcronymBlock[];
};

export const contactEmail = "hello@afkadigital.org";

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/afka.digital?igsh=MWNmMzlkazZsd2xheg=="
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/afka-digital-institute/"
  },
  {
    label: "X",
    href: "https://x.com/afkadigital?s=21"
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18QzKjhvu1/?mibextid=wwXIfr"
  }
];

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Founding Brief", href: "/founding-brief" },
  { label: "Research", href: "/research" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" }
];

export const footerLinks = navLinks;

export const heroStats: Stat[] = [
  {
    value: "Platform",
    label: "Accountability in Somali online spaces"
  },
  {
    value: "Information",
    label: "How influence and harm move across networks"
  },
  {
    value: "Rights",
    label: "Digital safety, access, and civic expression"
  }
];

export const researchAreas: Card[] = [
  {
    title: "Information Ecosystems",
    description:
      "Tracks how claims, influence, and monetized attention move through Somali-language media and platform spaces."
  },
  {
    title: "Digital Rights",
    description:
      "Documents moderation gaps, online abuse, access, and platform accountability affecting Somali-speaking communities."
  },
  {
    title: "Digital Economy",
    description:
      "Studies how creator monetization, platform incentives, and language access shape visibility and harm."
  }
];

export const featuredInsight: Insight = {
  label: "Founding Brief",
  title: "The case for an independent Somali digital research institute.",
  description:
    "An institutional brief setting out why Somali digital life needs sustained research infrastructure, public evidence, and institutional memory.",
  href: "/founding-brief",
  status: "Founding Brief · 2026"
};

export const insightItems: Insight[] = [];

export const approachSteps: Step[] = [
  {
    step: "01",
    title: "Document",
    description: "Collect public cases, platform signals, and language context with clear limits."
  },
  {
    step: "02",
    title: "Test",
    description: "Read patterns across platform design, language, incentives, and rights."
  },
  {
    step: "03",
    title: "Publish",
    description: "Release concise briefs and notes that institutions can scrutinize and cite."
  }
];

export const researchOutputs: ResearchOutput[] = [
  {
    label: "Report",
    title: "Research Reports",
    description:
      "Long-form analysis on digital harm, platform power, information ecosystems, AI, and the online economy across Somali-speaking communities."
  },
  {
    label: "Brief",
    title: "Policy Briefs",
    description:
      "Focused recommendations for policymakers, regulators, civil society, journalists, and institutions working on digital governance and rights."
  },
  {
    label: "Analysis",
    title: "Platform Accountability Analysis",
    description:
      "Evidence-led analysis of visibility, moderation, monetization, platform access, and digital inequity affecting Somali users."
  },
  {
    label: "Explainer",
    title: "Digital Rights Explainers",
    description:
      "Clear public-facing explainers on safety, surveillance, online harassment, platform rules, speech, and user rights."
  },
  {
    label: "Field Note",
    title: "Field Notes",
    description:
      "Ground-level observations from Somali-speaking digital life, shaped by lived experience, reporting, interviews, and community knowledge."
  },
  {
    label: "Data Insight",
    title: "Data-Led Insights",
    description:
      "Short analytical pieces using public data, platform signals, media monitoring, and community evidence to track emerging risks and shifts."
  },
  {
    label: "Case Study",
    title: "Case Studies",
    description:
      "Focused studies of specific incidents, platform decisions, online harms, creator barriers, or policy debates."
  },
  {
    label: "Library",
    title: "Resource Libraries",
    description:
      "Curated reading lists, glossaries, datasets, and public knowledge resources for people studying Somali digital spaces."
  },
  {
    label: "Future Tools",
    title: "Future Tools & Knowledge Products",
    description:
      "Over time, Afka may develop public-interest tools such as research databases, platform issue trackers, Somali digital glossaries, media monitoring tools, digital harm reporting resources, and lightweight interactive explainers."
  }
];

export const outputCategories: Card[] = researchOutputs;

export const independencePrinciples: Card[] = [
  {
    title: "Independent",
    description: "Research is kept separate from political and commercial direction."
  },
  {
    title: "Evidence-led",
    description: "Findings are grounded in documented cases, methods, and public reasoning."
  },
  {
    title: "Public-interest",
    description: "Focused on rights, safety, and accountability across Somali online spaces."
  }
];

export const inquiryReasons = [
  "Research inquiry",
  "Media request",
  "Institutional partnership",
  "Platform engagement",
  "General contact"
];

export const problemCards: Card[] = [
  {
    title: "Language context",
    description: "Somali-language moderation and discovery systems often miss local meaning and public context."
  },
  {
    title: "Rights and safety",
    description: "Harassment, image-based abuse, access, and takedown decisions need clearer evidence."
  },
  {
    title: "Platform incentives",
    description: "Monetization and recommendation systems shape what becomes visible and what is rewarded."
  }
];

export const aboutProblemCards = problemCards;

export const adigaPhilosophy: NamePhilosophy = {
  label: "The Name",
  heading: "Why Afka carries the ADIGA philosophy",
  publicStatement: "Our public name is Afka Digital Institute.",
  philosophyStatement: "Behind it sits a people-centered philosophy: ADIGA.",
  meanings: [
    {
      icon: "language",
      title: "Afka",
      description:
        'Means "the language" in Somali, grounding the work in language, speech, and lived digital experience.'
    },
    {
      icon: "digital",
      title: "Digital",
      description:
        "Defines the institute's field of concern: platforms, online harm, and technology policy."
    },
    {
      icon: "institute",
      title: "Institute",
      description:
        "Signals rigor, evidence, and institutional memory."
    }
  ],
  centralIntro: "The philosophy starts with",
  centralWord: "ADIGA",
  centralMeaning: "you",
  centralSuffix: "in Somali.",
  peopleIntro: "It is a reminder that this work must begin with people.",
  people: [
    {
      icon: "communities",
      label: "Somali-speaking communities affected by digital harm"
    },
    { icon: "shield", label: "Women facing online abuse" },
    { icon: "journal", label: "Journalists tracking public life" },
    { icon: "research", label: "Researchers producing evidence" },
    { icon: "policy", label: "Policy staff needing a stronger evidence base" }
  ],
  footerPublicName: "The public name is Afka Digital Institute.",
  footerStatement:
    "ADIGA is our internal philosophical layer, centering you in every layer of our research and evidence.",
  acronym: [
    {
      letter: "A",
      title: "Afka",
      description: "The language, speech, and digital life where the work begins."
    },
    {
      letter: "D",
      title: "Digital",
      description: "The platforms, AI systems, and online harms shaping public life."
    },
    {
      letter: "I",
      title: "Institute",
      description: "The research standard: careful methods and public evidence."
    },
    {
      letter: "G",
      title: "Grassroots",
      description: "The lived realities of Somali-speaking communities."
    },
    {
      letter: "A",
      title: "Analysis",
      description: "The process of turning harms into patterns and insight."
    }
  ]
};
