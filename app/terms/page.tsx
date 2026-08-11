import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-black tracking-tight text-ink">Terms of Service</h1>
        <p className="mt-6 text-sm text-steel">
          📋 Placeholder — {site.name} needs real terms of service drafted
          before launch. If sales include in-home presentations, this is
          also where the FTC 3-day right-of-rescission disclosure needs to
          live (legal review recommended).
        </p>
      </Container>
    </section>
  );
}
