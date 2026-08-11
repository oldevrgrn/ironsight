import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow text-xs">{children}</p>;
}

/**
 * Variant is the ONLY thing that sets color. Never pass color utilities
 * (bg-*, text-*) through `className` to override a variant — Tailwind
 * resolves same-property conflicts by stylesheet order, not JSX order,
 * so "later in the string" does not reliably win and text silently
 * disappears (this broke every dark-section CTA site-wide before the fix).
 * `className` is for layout only (width, margin, justify-self, etc).
 * Use "inverted" / "invertedOutline" on dark (charcoal/ink) backgrounds.
 */
const buttonVariants = {
  primary: "bg-ink text-white hover:bg-charcoal-2",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-white",
  ghost: "text-ink hover:text-steel",
  inverted: "bg-white text-ink hover:bg-mist",
  invertedOutline: "border border-white text-white hover:bg-white hover:text-ink",
} as const;

type ButtonVariant = keyof typeof buttonVariants;

const buttonBase =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-colors";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${buttonBase} ${buttonVariants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function CallButton({
  variant = "primary",
  className = "",
  label = "Call Now",
}: {
  variant?: ButtonVariant;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={site.phoneHref}
      className={`${buttonBase} ${buttonVariants[variant]} whitespace-nowrap text-[11px] sm:text-sm px-4 sm:px-6 ${className}`}
    >
      <PhoneIcon className="h-4 w-4 shrink-0" />
      {label}: {site.phoneDisplay}
    </a>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1C10.9 21.1 2.9 13.1 2.9 3c0-.6.4-1 1-1H7.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {lede ? (
        <p
          className={`mt-4 max-w-2xl text-base text-steel ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}

/** Clearly-labeled placeholder tile — never a stock photo passed off as a
 * real project. Swap for real photography via the `src` prop when available. */
export function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 border border-line bg-mist text-center ${className}`}
    >
      <svg viewBox="0 0 48 48" className="h-8 w-8 text-steel-light" fill="none" aria-hidden="true">
        <rect x="6" y="10" width="36" height="28" rx="1.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="20" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M6 32l10-9 8 7 6-5 12 9" stroke="currentColor" strokeWidth="2" />
      </svg>
      <p className="eyebrow px-4 text-[10px] text-steel-light">{label}</p>
    </div>
  );
}
