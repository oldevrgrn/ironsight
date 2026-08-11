import { site } from "@/lib/site";
import { PhoneIcon } from "@/components/ui";

/** Mobile-only sticky click-to-call bar, always above the fold reach. */
export function StickyCallBar() {
  return (
    <a
      href={site.phoneHref}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-ink py-4 text-sm font-bold uppercase tracking-wide text-white sm:hidden"
    >
      <PhoneIcon className="h-4 w-4" />
      Call Now: {site.phoneDisplay}
    </a>
  );
}
