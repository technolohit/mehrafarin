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

export function IconEmail({ className }: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <rect x="8" y="13" width="32" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 16.5 24 26.5 38 16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconTelegram({ className }: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <path
        d="M12 23.5 35.5 13.2c1.1-.5 2.2.5 1.8 1.7L31 36.2c-.3 1.1-1.7 1.4-2.5.5l-6.2-6.6-5.1 3.4c-.8.5-1.9 0-2-1l-.7-8.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 29.5 31 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <rect x="11" y="11" width="26" height="26" rx="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="32.5" cy="15.5" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function IconMessageNote({ className }: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <path
        d="M12 14h18a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H22l-6 5v-5h-4a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M18 22h12M18 27h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconOnlineSession({ className }: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <rect x="9" y="12" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M33 20l7-3v14l-7-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M15 36h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconLanguage({ className }: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 24h28M24 10c3.8 4.2 5.8 8.8 5.8 14S27.8 33.8 24 38c-3.8-4.2-5.8-8.8-5.8-14S20.2 14.2 24 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconPerson({ className }: IconProps) {
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

export function IconProcess({ className }: IconProps) {
  return (
    <svg {...baseProps(className)}>
      <circle cx="14" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="32" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="34" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M17.5 17.5 20.5 29M27.5 29 30.5 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
