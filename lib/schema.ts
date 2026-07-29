import { BIZ } from "./business";
import { AREAS } from "./areas";
import { SERVICES } from "@/content/services";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    additionalType: "https://en.wikipedia.org/wiki/Duct_(flow)",
    "@id": `${BIZ.url}/#business`,
    name: BIZ.name,
    image: `${BIZ.url}/opengraph-image.png`,
    logo: `${BIZ.url}/logo.png`,
    telephone: BIZ.phoneE164,
    email: BIZ.email,
    url: BIZ.url,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BIZ.address.street,
      addressLocality: BIZ.address.locality,
      addressRegion: BIZ.address.region,
      postalCode: BIZ.address.postalCode,
      addressCountry: BIZ.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BIZ.geo.lat,
      longitude: BIZ.geo.lng,
    },
    areaServed: AREAS.map((a) => ({
      "@type": "City",
      name: a.name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "00:00",
        closes: "23:59",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "00:00",
        closes: "18:00",
      },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Michigan Licensed & Insured Air Duct Cleaning Company",
      identifier: BIZ.licenseId,
    },
    sameAs: Object.values(BIZ.social).filter(Boolean),
  };
}

export function serviceJsonLd(slug: string) {
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.name,
    description: s.description,
    provider: { "@id": `${BIZ.url}/#business` },
    areaServed: { "@type": "AdministrativeArea", name: "Metro Detroit, MI" },
    url: `${BIZ.url}/services/${s.slug}`,
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
