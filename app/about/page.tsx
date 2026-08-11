import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading, CallButton } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${site.name} — high energy-efficient window and door replacement.`,
};

const values = [
  {
    title: "High-End Only",
    desc: "We don't carry a budget product line to hit a lower price point. Every system we quote is a premium, energy-rated product.",
  },
  {
    title: "Documented, Not Promised",
    desc: "NFRC ratings, written warranties, and a real proposal in writing — not verbal promises made to close a sale.",
  },
  {
    title: "Built to Scale Right",
    desc: `Launching in ${site.primaryState} first, on purpose — we'd rather do one market well than five markets thin.`,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-charcoal py-20 text-white">
        <Container>
          <Eyebrow><span className="text-steel-light">About</span></Eyebrow>
          <h1 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
            A new company, built around one idea: precision.
          </h1>
          <p className="mt-5 max-w-xl text-white/70">
            Founded {site.founded} in {site.primaryState}. Not the biggest
            name yet — the one that shows up, measures twice, and installs
            it right the first time.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="What We Stand For" title="How we operate" />
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="border border-line p-6">
                <h3 className="font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm text-steel">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20">
        <Container>
          <SectionHeading eyebrow="Our Team" title="Meet the team" />
          <p className="mt-6 max-w-2xl border border-line bg-white p-6 text-sm text-steel">
            📋 Team bios, headshots, and founder story pending — send over
            Jake&apos;s bio and real team photos when ready (no stock
            headshots).
          </p>
        </Container>
      </section>

      <section className="bg-charcoal py-16 text-white">
        <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <h2 className="text-2xl font-black tracking-tight">
            Want to talk to us directly?
          </h2>
          <CallButton variant="inverted" />
        </Container>
      </section>
    </>
  );
}
