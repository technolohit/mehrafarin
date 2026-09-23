import type { ServiceIconId } from "@/content/types";

type IconProps = {
  className?: string;
};

function baseProps(className?: string) {
  return {
    className,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true as const,
  };
}

export function IconIndividual({ className }: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <circle cx="24" cy="16" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 36.5c2.8-6.2 8-9.5 12-9.5s9.2 3.3 12 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconAnalytical({ className }: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <path
        d="M10 30c4-10 8-14 14-14s10 4 14 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 21v11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconConsultation({ className }: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <path
        d="M12 14h18a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H22l-6 5v-5h-4a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconOnline({ className }: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <rect x="9" y="12" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M33 20l7-3v14l-7-3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M15 36h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const iconMap = {
  individual: IconIndividual,
  analytical: IconAnalytical,
  consultation: IconConsultation,
  online: IconOnline,
} as const;

export function ServiceIcon({
  id,
  className = "h-10 w-10 text-[var(--color-text)]",
}: {
  id: ServiceIconId;
  className?: string;
}) {
  const Icon = iconMap[id];
  return <Icon className={className} />;
}
