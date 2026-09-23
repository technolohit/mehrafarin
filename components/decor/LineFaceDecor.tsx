/** Minimal line-face decoration as SVG — fully transparent, no raster plate. */
export function LineFaceDecor({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M118 36c18 8 34 28 38 54 4 28-4 54-22 74-12 14-28 26-36 46-4 10-6 22-4 34"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M96 54c-10 18-8 40 2 56 8 12 14 18 14 32"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M108 78c6 2 10 8 9 14"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M112 108c8 4 12 10 10 16"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M78 48c-20 22-30 52-18 78 8 18 24 30 28 48"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M92 210c8 16 6 28-2 40"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
