// Central source of truth for every real-world fact used on the site.
// Everything marked TODO is a placeholder — the site will not go live
// with these values. Update here once and it propagates everywhere.

export const site = {
  name: "Iron Sight Exteriors",
  shortName: "Iron Sight",
  tagline: "Precision-Engineered Window & Door Replacement",
  founded: 2026, // real — company founded August 2026

  // TODO: swap for the real tracked forwarding/business number before launch.
  phoneDisplay: "(555) 555-0100",
  phoneHref: "tel:+15555550100",

  // TODO: confirm real inbox.
  email: "info@ironsightexteriors.com",

  // TODO: confirm domain with Jake.
  domain: "ironsightexteriors.com",

  // TODO: confirm a legitimately staffed address (not a bare mailbox —
  // Google disallows unstaffed virtual addresses for GBP verification).
  address: {
    city: "St. George",
    state: "UT",
    line1: "Address pending",
  },

  // Phase 1 launch market. Do not imply coverage beyond this until each
  // state has real licensing/insurance/local presence in place.
  primaryState: "Utah",
  launchCities: [
    "St. George",
    "Washington",
    "Hurricane",
    "Ivins",
    "Santa Clara",
    "Cedar City",
  ], // TODO: confirm actual launch cities with Jake

  expansionStates: ["Idaho", "Montana", "Wyoming", "Colorado"],

  // Nothing here is claimed publicly until it's true and documented.
  license: {
    number: null as string | null, // TODO: DOPL application pending
    bonded: false,
    insured: false,
  },

  social: {
    // TODO
    facebook: null as string | null,
    instagram: null as string | null,
  },
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/financing", label: "Financing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
