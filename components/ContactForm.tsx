"use client";

import { useState } from "react";

/**
 * TODO: this form does not currently submit anywhere. Wire it to a real
 * endpoint (Formspree, a serverless route, or a CRM webhook) before launch.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border border-line bg-mist p-10 text-center">
        <p className="font-bold text-ink">Thanks — we&apos;ll be in touch.</p>
        <p className="mt-2 text-sm text-steel">
          (Placeholder confirmation — this form isn&apos;t connected to a real
          inbox or CRM yet.)
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-ink">Full Name</span>
          <input
            required
            type="text"
            className="mt-2 w-full border border-line px-3 py-2 outline-none focus:border-ink"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">Phone</span>
          <input
            required
            type="tel"
            className="mt-2 w-full border border-line px-3 py-2 outline-none focus:border-ink"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="font-medium text-ink">Email</span>
        <input
          required
          type="email"
          className="mt-2 w-full border border-line px-3 py-2 outline-none focus:border-ink"
        />
      </label>
      <label className="block text-sm">
        <span className="font-medium text-ink">Property Address</span>
        <input
          type="text"
          className="mt-2 w-full border border-line px-3 py-2 outline-none focus:border-ink"
        />
      </label>
      <label className="block text-sm">
        <span className="font-medium text-ink">How Many Windows/Doors?</span>
        <select className="mt-2 w-full border border-line bg-white px-3 py-2 outline-none focus:border-ink">
          <option>1–5</option>
          <option>6–10</option>
          <option>11–20</option>
          <option>20+ / whole home</option>
        </select>
      </label>
      <label className="block text-sm">
        <span className="font-medium text-ink">Tell Us About Your Project</span>
        <textarea
          rows={4}
          className="mt-2 w-full border border-line px-3 py-2 outline-none focus:border-ink"
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-charcoal-2"
      >
        Request My Free Quote
      </button>
    </form>
  );
}
