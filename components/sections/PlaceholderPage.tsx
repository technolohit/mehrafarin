import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type PlaceholderPageProps = {
  locale: Locale;
  title: string;
  message: string;
  homeLabel: string;
};

export function PlaceholderPage({
  locale,
  title,
  message,
  homeLabel,
}: PlaceholderPageProps) {
  return (
    <section className="section-space">
      <Container className="max-w-2xl space-y-6">
        <h1 className="display-title text-[clamp(2rem,4vw,3.25rem)]">{title}</h1>
        <p className="lead-text">{message}</p>
        <Button href={localePath(locale)} variant="secondary">
          {homeLabel}
        </Button>
      </Container>
    </section>
  );
}
