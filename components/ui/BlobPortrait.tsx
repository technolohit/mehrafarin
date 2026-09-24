import Image from "next/image";

type BlobPortraitProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  /** Organic blob (hero) or soft rectangle (about). */
  variant?: "blob" | "rect";
  /** CSS object-position, e.g. "center 18%" */
  objectPosition?: string;
  aspectClassName?: string;
};

export function BlobPortrait({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 1024px) 85vw, 42vw",
  variant = "blob",
  objectPosition = "center 18%",
  aspectClassName,
}: BlobPortraitProps) {
  const frameClass =
    variant === "rect" ? "portrait-frame-rect" : "blob-frame";
  const aspect =
    aspectClassName ?? (variant === "rect" ? "aspect-[3/4]" : "aspect-[4/5]");
  const maxWidth =
    variant === "rect" ? "max-w-[26rem]" : "max-w-[36rem]";

  return (
    <div
      className={`${frameClass} ${aspect} w-full ${maxWidth} ${className}`.trim()}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}
