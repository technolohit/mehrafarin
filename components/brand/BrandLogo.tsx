import Image from "next/image";

export const BRAND_LOGO_SRC = "/images/Logo/logo.png";

type BrandLogoProps = {
  /** Accessible name when the mark stands alone. Leave empty when text sits beside it. */
  alt?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
};

const sizeMap = {
  sm: { px: 36, className: "h-9 w-9" },
  md: { px: 44, className: "h-11 w-11" },
  lg: { px: 56, className: "h-14 w-14" },
} as const;

export function BrandLogo({
  alt = "",
  size = "md",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const { px, className: sizeClass } = sizeMap[size];

  return (
    <Image
      src={BRAND_LOGO_SRC}
      alt={alt}
      width={px}
      height={px}
      priority={priority}
      className={`shrink-0 object-contain ${sizeClass} ${className}`.trim()}
    />
  );
}
