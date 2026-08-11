import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog",
  description: "Window and door replacement guides for Mountain West homeowners.",
};

const draftTopics = [
  "How to Tell If Your Windows Are Actually Losing You Money",
  "Low-E Glass, Explained Without the Sales Pitch",
  "What an NFRC Label Actually Tells You",
  "Vinyl vs. Fiberglass Windows: What Actually Lasts",
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-charcoal py-20 text-white">
        <Container>
          <Eyebrow><span className="text-steel-light">Blog</span></Eyebrow>
          <h1 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
            Straight answers on windows, doors, and energy efficiency.
          </h1>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Coming Soon"
            title="First posts are in the queue"
            lede="Draft topics below — content pending final review before publishing."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {draftTopics.map((title) => (
              <div key={title} className="border border-line p-6">
                <p className="eyebrow text-[10px] text-steel">Draft</p>
                <h3 className="mt-2 font-bold text-ink">{title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
