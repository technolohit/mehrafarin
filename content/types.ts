export type NavKey = "home" | "about" | "services" | "process" | "blog" | "contact";

export type ServiceIconId = "individual" | "analytical" | "consultation" | "online";

export type HomeContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    body: string;
    points: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    items: {
      icon: ServiceIconId;
      title: string;
      description: string;
    }[];
    cta: string;
  };
  approach: {
    eyebrow: string;
    title: string;
    body: string;
    note: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    credentials: string[];
    cta: string;
    imageAlt: string;
  };
  process: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: { title: string; description: string }[];
    cta: string;
  };
  contactCta: {
    title: string;
    body: string;
    cta: string;
  };
};

/** Template may include {{services}}, {{process}}, {{contact}}, {{about}} */
export type LinkedCta = {
  template: string;
  labels: Partial<Record<"services" | "process" | "contact" | "about", string>>;
};

export type AboutPageContent = {
  meta: { title: string; description: string };
  title: string;
  intro: string;
  orientation: { title: string; paragraphs: string[] };
  clients: { title: string; body: string };
  format: { title: string; body: string };
  cta: LinkedCta;
  imageAlt: string;
};

export type ServicesPageContent = {
  meta: { title: string; description: string };
  title: string;
  intro: string;
  listTitle: string;
  items: { icon: ServiceIconId; title: string; description: string }[];
  audience: { title: string; body: string };
  language: { title: string; body: string };
  cta: LinkedCta;
};

export type ProcessPageContent = {
  meta: { title: string; description: string };
  title: string;
  intro: string;
  steps: { title: string; paragraphs: string[] }[];
  fees: { title: string; body: string };
  cta: LinkedCta;
};

export type ContactPageContent = {
  meta: { title: string; description: string };
  title: string;
  intro: string;
  channelsTitle: string;
  /** Shown while exact email/Telegram remain unpublished */
  channelsPending: string;
  channelLabels: { email: string; telegram: string };
  beforeTitle: string;
  beforeBody: string;
  instagramTitle: string;
  instagramHandle: string;
  linksTitle: string;
  linkAbout: string;
  linkProcess: string;
};

export type Dictionary = {
  brand: string;
  brandSubtitle: string;
  nav: Record<NavKey, string>;
  language: {
    fa: string;
    en: string;
    switchLabel: string;
  };
  footer: {
    descriptor: string;
    navigation: string;
    rights: string;
    legalSoon: string;
    contactPending: string;
  };
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    mainNavigation: string;
  };
  home: HomeContent;
  pages: {
    about: AboutPageContent;
    services: ServicesPageContent;
    process: ProcessPageContent;
    contact: ContactPageContent;
  };
  placeholders: {
    pageComing: string;
  };
};
