import Image from "next/image";

type BlogCoverProps = {
  src: string;
  alt: string;
  priority?: boolean;
  /** index = listing tile, hero = article cover (portrait art) */
  variant?: "index" | "hero";
  className?: string;
  sizes?: string;
};

/**
 * Editorial media for blog illustrations.
 * Source art is portrait (~4:5); hero preserves that frame instead of forcing a wide crop.
 */
export function BlogCover({
  src,
  alt,
  priority = false,
  variant = "index",
  className = "",
  sizes,
}: BlogCoverProps) {
  const aspect = variant === "hero" ? "aspect-[4/5]" : "aspect-[4/5]";
  const radius =
    variant === "hero"
      ? "rounded-[clamp(1.1rem,2.4vw,1.75rem)]"
      : "rounded-[clamp(0.95rem,2vw,1.5rem)]";
  const resolvedSizes =
    sizes ??
    (variant === "hero"
      ? "(max-width: 1024px) 92vw, 28rem"
      : "(max-width: 768px) 100vw, 40vw");

  return (
    <div
      className={`blog-media group relative isolate overflow-hidden ${aspect} w-full ${radius} ${className}`.trim()}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={resolvedSizes}
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[color-mix(in_srgb,var(--color-gold)_30%,transparent)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[14%] bottom-0 h-px bg-[linear-gradient(to_inline_end,transparent,color-mix(in_srgb,var(--color-gold)_80%,white),color-mix(in_srgb,var(--color-accent)_45%,transparent),transparent)] shadow-[0_0_12px_color-mix(in_srgb,var(--color-gold)_40%,transparent)]"
      />
    </div>
  );
}
