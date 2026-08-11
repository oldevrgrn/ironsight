import Link from "next/link";
import { CrosshairMark } from "@/components/icons/Crosshair";
import { Container } from "@/components/ui";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <CrosshairMark className="h-8 w-8 text-white" />
            <span className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tight text-white">
                IRONSIGHT
              </span>
              <span className="eyebrow text-[9px] text-steel-light">
                Exteriors
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm text-steel-light">
            High energy-efficient window &amp; door replacement, done with
            precision.
          </p>
        </div>

        <div>
          <p className="eyebrow text-[10px] text-steel-light">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[10px] text-steel-light">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              {site.address.city}, {site.address.state}
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[10px] text-steel-light">Now Serving</p>
          <p className="mt-4 text-sm text-white/80">{site.primaryState}</p>
          <p className="mt-1 text-xs text-steel-light">
            Expanding across {site.expansionStates.join(", ")}
          </p>
        </div>
      </Container>

      <div className="border-t border-line-dark py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-steel-light sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
