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
  placeholders: {
    pageComing: string;
  };
};
