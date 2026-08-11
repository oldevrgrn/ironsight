import Link from "next/link";
import { CrosshairMark } from "@/components/icons/Crosshair";
import { Container, CallButton } from "@/components/ui";
import { nav } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <CrosshairMark className="h-9 w-9 text-ink transition-transform group-hover:rotate-90 duration-300" />
          <span className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight text-ink">
              IRONSIGHT
            </span>
            <span className="eyebrow text-[10px] text-steel">Exteriors</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <CallButton className="hidden sm:inline-flex" />

        {/* Mobile: compact call icon only */}
        <a
          href="tel:+15555550100"
          className="inline-flex h-11 w-11 items-center justify-center bg-ink text-white sm:hidden"
          aria-label="Call Iron Sight Exteriors"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
            <path
              d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1v3.5c0 .6-.4 1-1 1C10.9 21.1 2.9 13.1 2.9 3c0-.6.4-1 1-1H7.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
        </a>
      </Container>
    </header>
  );
}
