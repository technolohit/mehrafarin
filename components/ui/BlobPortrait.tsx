import Image from "next/image";

type BlobPortraitProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function BlobPortrait({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 1024px) 85vw, 42vw",
}: BlobPortraitProps) {
  return (
    <div className={`blob-frame aspect-[4/5] w-full max-w-[28rem] ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-[center_18%]"
      />
    </div>
  );
}
