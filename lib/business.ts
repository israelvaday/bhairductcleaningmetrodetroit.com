// Single source of truth for NAP, hours, license, links.

export type DayHours = {
  day: number;
  label: string;
  /** HH:mm in America/Detroit; null = closed */
  open: string | null;
  close: string | null;
  closed?: boolean;
};

export const BIZ = {
  name: "BH Garage Door Metro Detroit",
  legalName: "BH Garage Door Metro Detroit",
  tagline: "Licensed & Insured Garage Door Installation & Repair — Free Quotes Across Metro Detroit",
  phone: "(313) 236-4558",
  phoneE164: "+13132364558",
  phoneHref: "tel:+13132364558",
  smsHref: "sms:+13132364558",
  whatsappHref: "https://wa.me/13132364558",
  email: "info@bhgaragedoormetrodetroit.com",
  emailHref:
    "mailto:info@bhgaragedoormetrodetroit.com?subject=Garage%20door%20quote%20request%20%E2%80%94%20BH%20Garage%20Door%20Metro%20Detroit",
  quotesEmail: "quotes@bhgaragedoormetrodetroit.com",
  quoteNotifyEmails: ["israelvaday97@gmail.com"],
  /** Shown in trust badges */
  licenseId: "Licensed & Insured",
  /** Legacy field name used in templates */
  bsis: "Licensed & Insured",
  url: "https://bhgaragedoormetrodetroit.com",
  address: {
    street: "Metro Detroit Service Area",
    locality: "Detroit",
    region: "MI",
    postalCode: "48201",
    country: "US",
    full: "Metro Detroit, MI",
  },
  geo: { lat: 42.3314, lng: -83.0458 },
  metroBounds: {
    minLat: 42.15,
    maxLat: 42.75,
    minLng: -83.65,
    maxLng: -82.45,
  },
  metroMap: { lat: 42.45, lng: -83.05, zoom: 10 },
  hours247: true,
  hoursSummary: "Sun–Thu 24 hours · Fri until 6 PM · Sat closed",
  hours: [
    { day: 0, open: "00:00", close: "24:00", label: "Sunday" },
    { day: 1, open: "00:00", close: "24:00", label: "Monday" },
    { day: 2, open: "00:00", close: "24:00", label: "Tuesday" },
    { day: 3, open: "00:00", close: "24:00", label: "Wednesday" },
    { day: 4, open: "00:00", close: "24:00", label: "Thursday" },
    { day: 5, open: "00:00", close: "18:00", label: "Friday" },
    { day: 6, open: null, close: null, label: "Saturday" },
  ] satisfies readonly DayHours[],
  social: {
    google: "",
    yelp: "",
    facebook: "",
    instagram: "",
    tiktok: "",
  },
};
