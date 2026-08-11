import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading, CallButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Window & Door Replacement Services",
  description:
    "High energy-efficient replacement windows and doors — Low-E glass, argon/krypton gas fills, and NFRC-rated performance.",
};

const windowTypes = [
  { name: "Double-Hung Windows", desc: "Two operable sashes for easy cleaning and balanced ventilation — the most common residential replacement." },
  { name: "Casement Windows", desc: "Crank-operated, sealing tight against the frame for some of the best air-infiltration performance available." },
  { name: "Sliding Windows", desc: "Horizontal glide operation, ideal for wide openings where a swinging sash isn't practical." },
  { name: "Bay & Bow Windows", desc: "Multi-panel projecting windows that add interior floor space and panoramic sightlines." },
  { name: "Picture Windows", desc: "Fixed, non-operable glass for maximum light and the highest efficiency rating in the lineup — no seams to leak." },
];

const doorTypes = [
  { name: "Insulated Entry Doors", desc: "Steel or fiberglass doors with a foam core, engineered for security and thermal performance in one unit." },
  { name: "Patio & Slider Doors", desc: "Wide-span glass doors built to hold their seal through repeated daily use and seasonal swings." },
  { name: "French Doors", desc: "Dual swinging-panel doors for a wide, symmetrical opening with a traditional look." },
];

const glassOptions = [
  { name: "Low-E Glass Coatings", desc: "A microscopically thin metallic layer that reflects infrared heat while letting visible light through." },
  { name: "Argon / Krypton Gas Fills", desc: "Inert gas sealed between panes, slowing heat transfer far more than plain air." },
  { name: "NFRC Performance Labels", desc: "Every quoted system comes with a National Fenestration Rating Council label showing U-factor, SHGC, and air leakage — real, independently verified numbers." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-charcoal py-20 text-white">
        <Container>
          <Eyebrow><span className="text-steel-light">Services</span></Eyebrow>
          <h1 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
            Windows and doors, chosen for performance — not just a price point.
          </h1>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Windows" title="Replacement window styles" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {windowTypes.map((w) => (
              <div key={w.name} className="border border-line p-6">
                <h3 className="font-bold text-ink">{w.name}</h3>
                <p className="mt-2 text-sm text-steel">{w.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20">
        <Container>
          <SectionHeading eyebrow="Doors" title="Entry & patio door systems" />
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {doorTypes.map((d) => (
              <div key={d.name} className="border border-line bg-white p-6">
                <h3 className="font-bold text-ink">{d.name}</h3>
                <p className="mt-2 text-sm text-steel">{d.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Glass Packages"
            title="What actually makes a window energy-efficient"
          />
          <div className="mt-10 space-y-6">
            {glassOptions.map((g) => (
              <div key={g.name} className="border-l-2 border-ink pl-6">
                <h3 className="font-bold text-ink">{g.name}</h3>
                <p className="mt-1 text-sm text-steel">{g.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl border border-line bg-mist p-6 text-sm text-steel">
            📋 <strong>Product lines:</strong> high-end vinyl and fiberglass
            systems. Manufacturer partnerships are being finalized — exact
            product lines land here once dealer accounts are confirmed.
          </p>
        </Container>
      </section>

      <section className="bg-charcoal py-16 text-white">
        <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <h2 className="text-2xl font-black tracking-tight">
            Not sure which system fits your home?
          </h2>
          <CallButton variant="inverted" label="Talk To Us" />
        </Container>
      </section>
    </>
  );
}
