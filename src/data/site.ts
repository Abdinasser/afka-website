import type { Metadata } from "next";

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

export const siteUrl = "https://afkadigital.org";
export const siteName = "Afka Digital Institute";
export const siteDescription =
  "Independent research on platform accountability, Somali-language moderation, information integrity, AI governance, digital exclusion, and digital rights.";
export const siteLogo = `${siteUrl}/images/afka-wordmark-black.png`;
export const siteOgImage = `${siteUrl}/images/afka-hero-code-field.jpg`;

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
  { label: "Research", href: "/research" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" }
];

export const footerLinks = navLinks;

export const publicRoutes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/research", priority: 0.9 },
  { path: "/insights", priority: 0.7 },
  { path: "/contact", priority: 0.7 }
];

export const pageSeo = {
  home: {
    path: "/",
    title: "Afka Digital Institute - Research on Digital Harm in Somali-Speaking Spaces",
    description:
      "Independent research on platform accountability, Somali-language moderation, information integrity, AI governance, digital exclusion, and digital rights."
  },
  about: {
    path: "/about",
    title: "About Afka Digital Institute",
    description:
      "Why Afka exists and how it pursues independent, evidence-led, public-interest research on digital harm."
  },
  research: {
    path: "/research",
    title: "Afka Research - Platform Power, Language, and Public Harm",
    description:
      "Afka's research agenda covers platform accountability, Somali-language moderation, information integrity, AI governance, digital exclusion, and digital rights."
  },
  insights: {
    path: "/insights",
    title: "Afka Insights - Research Outputs and Resources",
    description:
      "Forthcoming Afka research reports, policy briefs, working notes, and public resources on Somali digital rights and platform accountability."
  },
  contact: {
    path: "/contact",
    title: "Contact Afka Digital Institute",
    description:
      "Contact Afka Digital Institute for research inquiries, media requests, case referrals, and policy conversations."
  }
} as const;

export type PageSeoKey = keyof typeof pageSeo;

export function getPageMetadata(page: PageSeoKey): Metadata {
  const seo = pageSeo[page];
  const canonicalUrl = new URL(seo.path, siteUrl).toString();

  return {
    metadataBase: new URL(siteUrl),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.path
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      siteName,
      type: "website",
      images: [
        {
          url: siteOgImage,
          width: 1200,
          height: 630,
          alt: "Afka Digital Institute digital research field"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [siteOgImage]
    }
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@id": `${siteUrl}/#organization`,
  "@type": "Organization",
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  logo: siteLogo,
  email: `mailto:${contactEmail}`,
  sameAs: socialLinks.map((link) => link.href)
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@id": `${siteUrl}/#website`,
  "@type": "WebSite",
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  publisher: {
    "@id": `${siteUrl}/#organization`
  }
};

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
    title: "Platform Accountability",
    description:
      "Examines how major platforms respond to Somali-language harms, enforcement gaps, visibility decisions, takedowns, monetization rules, and appeals."
  },
  {
    title: "Somali-Language Moderation",
    description:
      "Tracks how Somali language, dialect, slang, political speech, and coded abuse are handled by automated and human moderation systems."
  },
  {
    title: "Information Integrity",
    description:
      "Studies how false claims, influence networks, political narratives, monetized attention, and crisis information move across Somali digital spaces."
  },
  {
    title: "Online Gendered Harm",
    description:
      "Documents abuse, harassment, intimidation, image-based threats, and silencing patterns affecting Somali women, journalists, activists, and public figures online."
  },
  {
    title: "AI Governance and Language Justice",
    description:
      "Looks at how Somali language is represented, excluded, distorted, or under-supported in AI systems, automated tools, and platform safety infrastructure."
  },
  {
    title: "Digital Exclusion and Platform Access",
    description:
      "Studies who is left out of digital opportunity, including creators, small media actors, civil society groups, and Somali-language users facing payment, verification, reach, or access barriers."
  }
];

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
    description: "Release concise briefs and notes that institutions can scrutinise and cite."
  }
];

export const researchOutputs: ResearchOutput[] = [
  {
    label: "Forthcoming",
    title: "Research Reports",
    description:
      "Long-form analysis on platform power, digital harm, Somali-language moderation, AI governance, and the online economy."
  },
  {
    label: "Briefs",
    title: "Policy Briefs",
    description:
      "Concise recommendations for policymakers, regulators, platforms, journalists, and civil society."
  },
  {
    label: "Notes",
    title: "Working Notes",
    description:
      "Short research notes, early observations, and explainers from Afka's developing evidence base."
  },
  {
    label: "Resources",
    title: "Public Resources",
    description:
      "Future glossaries, explainers, and practical resources on Somali digital rights, safety, and platform accountability."
  }
];

export const outputCategories: Card[] = researchOutputs;

export const independencePrinciples: Card[] = [
  {
    title: "Independent",
    description:
      "Afka is non-partisan and not directed by platforms, state actors, political groups, or commercial interests."
  },
  {
    title: "Evidence-led",
    description:
      "Research is built from documented cases, community context, platform behaviour, and publicly reasoned analysis."
  },
  {
    title: "Public-interest",
    description:
      "The work is designed for researchers, journalists, civil society, policymakers, and Somali-speaking communities affected by digital systems."
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
