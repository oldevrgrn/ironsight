import type { Metadata } from "next";
import { Container, Eyebrow, SectionHeading, PhotoPlaceholder, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: "Real Iron Sight Exteriors project photography — updated as jobs are completed.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-charcoal py-20 text-white">
        <Container>
          <Eyebrow><span className="text-steel-light">Gallery</span></Eyebrow>
          <h1 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
            Real projects. As they happen.
          </h1>
          <p className="mt-5 max-w-xl text-white/70">
            As a brand-new company, we won&apos;t fill this page with stock
            photos dressed up as our work. Every image here will be a real
            Iron Sight install, added as jobs wrap.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Coming Soon"
            title="First project photos land after our first completed jobs."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <PhotoPlaceholder key={i} label="Project photo coming soon" />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/contact" variant="primary">
              Be Our First Project
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
