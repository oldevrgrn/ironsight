import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading, CallButton, Button } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description: `Iron Sight Exteriors currently serves ${site.primaryState}, with expansion planned across the Mountain West.`,
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-charcoal py-20 text-white">
        <Container>
          <Eyebrow><span className="text-steel-light">Service Areas</span></Eyebrow>
          <h1 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
            Now serving {site.primaryState}. Expanding across the Mountain West.
          </h1>
          <p className="mt-5 max-w-xl text-white/70">
            One market done right beats five promised too soon. Here&apos;s
            exactly where we operate today.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Live Now" title={`${site.primaryState} service area`} />
          <div className="mt-10 flex flex-wrap gap-3">
            {site.launchCities.map((city) => (
              <span
                key={city}
                className="border border-line px-5 py-2 text-sm font-medium text-ink"
              >
                {city}, {site.address.state}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-sm text-steel">
            📋 City list pending final confirmation with Jake before launch.
          </p>
        </Container>
      </section>

      <section className="bg-mist py-20">
        <Container>
          <SectionHeading
            eyebrow="Coming Soon"
            title="Expanding across the Mountain West"
            lede="Licensing, insurance, and local presence, built state-by-state. Join the list and we'll reach out when we open your area."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.expansionStates.map((state) => (
              <div key={state} className="border border-line bg-white p-6 text-center">
                <h3 className="font-bold text-ink">{state}</h3>
                <p className="mt-2 eyebrow text-[10px] text-steel">Coming Soon</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="primary">
              Notify Me When You Launch Near Me
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-charcoal py-16 text-white">
        <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <h2 className="text-2xl font-black tracking-tight">
            In our {site.primaryState} service area? Let&apos;s talk.
          </h2>
          <CallButton variant="inverted" />
        </Container>
      </section>
    </>
  );
}
