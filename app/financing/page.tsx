import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading, CallButton } from "@/components/ui";
import { FinancingCalculator } from "@/components/FinancingCalculator";

export const metadata: Metadata = {
  title: "Financing",
  description: "Flexible financing options for window and door replacement projects.",
};

const options = [
  {
    title: "Fixed-Rate Home Improvement Loans",
    desc: "Predictable monthly payments over a term that fits your budget, with no lien on your home.",
  },
  {
    title: "Promotional / No-Interest Periods",
    desc: "Some plans offer a promotional window with no interest if paid in full — details depend on the specific plan you're approved for.",
  },
  {
    title: "Fast Approval, Fast Funding",
    desc: "We work with financing partners built for home-improvement contractors, so a job doesn't sit waiting on paperwork once it's approved.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <section className="bg-charcoal py-20 text-white">
        <Container>
          <Eyebrow><span className="text-steel-light">Financing</span></Eyebrow>
          <h1 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
            Don&apos;t let cash flow decide your windows.
          </h1>
          <p className="mt-5 max-w-xl text-white/70">
            We work with financing partners built specifically for
            home-improvement projects, so you can move forward with
            high-end windows without paying the full project cost upfront.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Options" title="Ways to finance your project" />
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {options.map((o) => (
              <div key={o.title} className="border border-line p-6">
                <h3 className="font-bold text-ink">{o.title}</h3>
                <p className="mt-2 text-sm text-steel">{o.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl border border-line bg-mist p-6 text-sm text-steel">
            📋 <strong>Financing partner:</strong> a specific lender
            (e.g. Regions | EnerBank, Acorn Finance, or Service Finance
            Company) will be named here once a dealer agreement is signed.
            Until then, no specific rates or partner names are published.
          </p>
        </Container>
      </section>

      <section className="bg-mist py-20">
        <Container>
          <SectionHeading
            eyebrow="Estimate"
            title="See a rough monthly payment"
            lede="Illustrative only — not a quote or an offer of credit."
          />
          <div className="mt-10">
            <FinancingCalculator />
          </div>
        </Container>
      </section>

      <section className="bg-charcoal py-16 text-white">
        <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <h2 className="text-2xl font-black tracking-tight">
            Ready to talk financing for your project?
          </h2>
          <CallButton className="bg-white text-ink hover:bg-white/90" />
        </Container>
      </section>
    </>
  );
}
