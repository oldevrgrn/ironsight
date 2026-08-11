import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-black tracking-tight text-ink">Privacy Policy</h1>
        <p className="mt-6 text-sm text-steel">
          📋 Placeholder — {site.name} needs a real privacy policy drafted
          (covering the contact form, any tracking/analytics, and financing
          partner data-sharing) before this page goes live. Do not launch
          with placeholder legal text.
        </p>
      </Container>
    </section>
  );
}
