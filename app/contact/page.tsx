import type { Metadata } from "next";
import { Container, Eyebrow, CallButton, PhoneIcon } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Request a free quote from ${site.name}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-charcoal py-20 text-white">
        <Container>
          <Eyebrow><span className="text-steel-light">Contact</span></Eyebrow>
          <h1 className="mt-3 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
            Let&apos;s talk about your windows.
          </h1>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-14 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-ink">Get In Touch</h2>
            <div className="mt-6 space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <PhoneIcon className="mt-1 h-4 w-4 text-steel" />
                <div>
                  <p className="font-medium text-ink">Call or Text</p>
                  <a href={site.phoneHref} className="text-steel hover:text-ink">
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
              <div>
                <p className="font-medium text-ink">Email</p>
                <a href={`mailto:${site.email}`} className="text-steel hover:text-ink">
                  {site.email}
                </a>
              </div>
              <div>
                <p className="font-medium text-ink">Service Area</p>
                <p className="text-steel">
                  {site.launchCities.join(", ")} &mdash; {site.address.state}
                </p>
              </div>
            </div>

            <CallButton className="mt-8" />

            <div className="mt-10 flex aspect-video w-full items-center justify-center border border-line bg-mist text-center">
              <p className="eyebrow px-6 text-[10px] text-steel-light">
                Map embed pending a confirmed business address
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="border border-line p-8 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
