/** Pure SVG contour decoration — guaranteed transparent background. */
export function ContourDecor({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`.trim()}
    >
      <svg
        className="absolute -end-8 top-8 h-[70%] w-[70%] opacity-50 md:opacity-60"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M80 120c120 20 220-40 340-20s210 90 300 70"
          stroke="#D5BD89"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M60 160c130 24 230-30 350-8s220 95 310 78"
          stroke="#D5BD89"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M40 200c140 28 240-20 360 4s230 100 320 86"
          stroke="#D5BD89"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M520 40c30 90 10 180 40 270s90 160 70 250"
          stroke="#D5BD89"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
        <path
          d="M560 20c34 95 14 185 46 278s96 168 74 262"
          stroke="#D5BD89"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d="M600 10c36 100 18 190 50 285s100 170 78 270"
          stroke="#D5BD89"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}
