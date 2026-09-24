import type { Metadata } from "next";
import Image from "next/image";
import { Container, Eyebrow, SectionHeading, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: "Real Iron Sight Exteriors project photography — updated as jobs are completed.",
};

const projectPhotos = [
  { src: "/gallery/window-install-01.jpg", alt: "Completed double-hung window replacement, green stucco home", w: 1500, h: 2000 },
  { src: "/gallery/window-install-02-crew.jpg", alt: "Iron Sight installer completing an upper-story window install", w: 1600, h: 1200 },
  { src: "/gallery/window-install-03.jpg", alt: "Completed sliding window replacements, tan stucco home", w: 640, h: 480 },
];

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
            No stock photos dressed up as our work. Every image here is a
            real Iron Sight install, added as jobs wrap.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Recent Work" title="A few early installs." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectPhotos.map((p) => (
              <div key={p.src} className="relative aspect-[4/3] overflow-hidden border border-line bg-mist">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-16">
            <SectionHeading eyebrow="The Crew" title="Who's actually showing up to your house." />
            <div className="mt-8 max-w-2xl">
              <div className="relative aspect-[16/9] overflow-hidden border border-line bg-mist">
                <Image
                  src="/gallery/team-photo-01.jpg"
                  alt="Iron Sight Exteriors install crew"
                  fill
                  sizes="(min-width: 640px) 42rem, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <Button href="/contact" variant="primary">
              Get a Free Quote
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
