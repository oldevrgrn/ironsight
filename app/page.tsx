import { CrosshairMark } from "@/components/icons/Crosshair";
import {
  Container,
  Eyebrow,
  Button,
  CallButton,
  SectionHeading,
  PhotoPlaceholder,
} from "@/components/ui";
import { site } from "@/lib/site";

const services = [
  {
    title: "Replacement Windows",
    desc: "Double-hung, casement, sliding, bay & bow, and picture windows built around high-performance glass packages.",
  },
  {
    title: "Entry Doors",
    desc: "Insulated, security-rated entry systems that seal as tight as the windows around them.",
  },
  {
    title: "Patio & Slider Doors",
    desc: "Wide-span glass doors engineered to hold their seal under real seasonal temperature swings.",
  },
];

const process = [
  {
    step: "01",
    title: "Free In-Home Consultation",
    desc: "We measure, assess your current windows, and talk through what's actually worth upgrading.",
  },
  {
    step: "02",
    title: "Custom Quote",
    desc: "A written proposal specific to your home — no generic per-window pricing guesses.",
  },
  {
    step: "03",
    title: "Precision Installation",
    desc: "Installed by a crew that treats your home like the job site it is — protected, clean, on schedule.",
  },
  {
    step: "04",
    title: "Documented Warranty",
    desc: "Manufacturer and labor warranty paperwork handed to you, not buried in an email thread.",
  },
];

const efficiencyPoints = [
  {
    title: "Low-E Glass Coatings",
    desc: "Microscopically thin coatings that reflect heat while letting light through — less HVAC strain, year-round.",
  },
  {
    title: "Argon / Krypton Gas Fills",
    desc: "Inert gas between panes slows heat transfer far more effectively than air alone.",
  },
  {
    title: "NFRC-Rated Performance",
    desc: "Every window we quote comes with a National Fenestration Rating Council label — real numbers, not marketing claims.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal text-white">
        <CrosshairMark className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] text-white/[0.04]" />
        <Container className="relative py-24 sm:py-32">
          <Eyebrow>
            <span className="text-steel-light">{site.primaryState} · Est. {site.founded}</span>
          </Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            High-Efficiency Window Replacement, Installed With Precision.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Iron Sight Exteriors replaces underperforming windows and doors
            with high-end, energy-efficient systems — measured, quoted, and
            installed by people who treat every home like it&apos;s their own.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CallButton variant="primary" className="bg-white text-ink hover:bg-white/90" />
            <Button href="/contact" variant="secondary" className="border-white text-white hover:bg-white hover:text-ink">
              Request a Free Quote
            </Button>
          </div>
        </Container>
      </section>

      {/* Trust strip — honest signals only, no fabricated tenure claims */}
      <section className="border-b border-line bg-mist py-8">
        <Container className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center">
          {[
            "High-End Product Lines Only",
            "NFRC-Rated Energy Performance",
            "Written, Documented Warranty",
            "Locally Owned & Operated",
          ].map((item) => (
            <p key={item} className="eyebrow text-xs text-steel">
              {item}
            </p>
          ))}
        </Container>
      </section>

      {/* Services */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="What We Install"
            title="Windows and doors, engineered for real efficiency."
            lede="We don't carry a budget line — every product we install is a high-end, energy-rated system chosen for performance in real Mountain West climates."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="bracket-hover border border-line p-8">
                <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm text-steel">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Energy efficiency education */}
      <section className="bg-ink py-24 text-white">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>
              <span className="text-steel-light">Why It Matters</span>
            </Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Energy efficiency isn&apos;t a sticker. It&apos;s engineering.
            </h2>
            <p className="mt-5 text-white/70">
              In a climate with real seasonal swings, an underperforming
              window is a year-round utility bill problem. Every system we
              install is chosen and documented against these three
              performance factors.
            </p>
          </div>
          <div className="space-y-6">
            {efficiencyPoints.map((p) => (
              <div key={p.title} className="border-l-2 border-steel pl-6">
                <h3 className="font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-white/60">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="A straightforward process, start to finish."
            align="center"
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step}>
                <span className="text-4xl font-black text-line">{p.step}</span>
                <h3 className="mt-3 font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-steel">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery teaser */}
      <section className="bg-mist py-24">
        <Container>
          <SectionHeading
            eyebrow="Recent Work"
            title="Project photos are on the way."
            lede="We're a brand-new build, and we're not going to pass off stock photography as our installs. Real project photography goes here as jobs are completed."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <PhotoPlaceholder label="Project photo coming soon" />
            <PhotoPlaceholder label="Project photo coming soon" />
            <PhotoPlaceholder label="Project photo coming soon" />
          </div>
        </Container>
      </section>

      {/* Financing teaser */}
      <section className="py-24">
        <Container className="border border-line p-12 text-center sm:p-20">
          <Eyebrow>Financing</Eyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
            Flexible financing, fast approvals.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-steel">
            We work with financing partners built for home-improvement
            projects, including options designed to fund quickly once a
            project is approved.
          </p>
          <Button href="/financing" variant="primary" className="mt-8">
            Explore Financing
          </Button>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-charcoal py-20 text-white">
        <Container className="flex flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              Ready for windows that actually perform?
            </h2>
            <p className="mt-2 text-white/60">
              Free in-home consultation. No pressure, no filler pricing.
            </p>
          </div>
          <CallButton className="bg-white text-ink hover:bg-white/90" />
        </Container>
      </section>
    </>
  );
}
