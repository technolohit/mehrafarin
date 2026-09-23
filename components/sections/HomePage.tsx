import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/content/types";
import { Reveal } from "@/components/motion/Reveal";
import { Hero } from "./Hero";
import { IntroBlock } from "./IntroBlock";
import { ServicesPreview } from "./ServicesPreview";
import { ApproachSection } from "./ApproachSection";
import { AboutPreview } from "./AboutPreview";
import { ProcessPreview } from "./ProcessPreview";
import { ContactCta } from "./ContactCta";

type HomePageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function HomePage({ locale, dictionary }: HomePageProps) {
  const { home } = dictionary;

  return (
    <>
      <Hero locale={locale} content={home.hero} />
      <Reveal>
        <IntroBlock content={home.intro} />
      </Reveal>
      <ServicesPreview locale={locale} content={home.services} />
      <Reveal>
        <ApproachSection content={home.approach} />
      </Reveal>
      <AboutPreview locale={locale} content={home.about} />
      <ProcessPreview locale={locale} content={home.process} />
      <Reveal>
        <ContactCta locale={locale} content={home.contactCta} />
      </Reveal>
    </>
  );
}
