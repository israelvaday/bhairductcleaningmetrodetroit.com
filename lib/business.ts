// Single source of truth for NAP, hours, links.

export type DayHours = {
  day: number;
  label: string;
  /** HH:mm in America/Detroit; null = closed */
  open: string | null;
  close: string | null;
  closed?: boolean;
};

export const BIZ = {
  name: "BH Air Duct Cleaning Metro Detroit",
  legalName: "BH Air Duct Cleaning Metro Detroit",
  tagline: "Air Duct, Dryer Vent & HVAC Cleaning Across Metro Detroit",
  phone: "(313) 236-4558",
  phoneE164: "+13132364558",
  phoneHref: "tel:+13132364558",
  smsHref: "sms:+13132364558",
  email: "info@bhairductcleaningmetrodetroit.com",
  emailHref:
    "mailto:info@bhairductcleaningmetrodetroit.com?subject=Message%20for%20BH%20Air%20Duct%20Cleaning%20Metro%20Detroit",
  quotesEmail: "quotes@bhairductcleaningmetrodetroit.com",
  quoteNotifyEmails: ["israelvaday97@gmail.com", "oren.siyonov@gmail.com"],
  url: "https://bhairductcleaningmetrodetroit.com",
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
  hours247: false,
  hoursSummary: "Sun–Thu 9 AM–5 PM · Fri 9 AM–12 PM · Sat closed",
  hours: [
    { day: 0, open: "09:00", close: "17:00", label: "Sunday" },
    { day: 1, open: "09:00", close: "17:00", label: "Monday" },
    { day: 2, open: "09:00", close: "17:00", label: "Tuesday" },
    { day: 3, open: "09:00", close: "17:00", label: "Wednesday" },
    { day: 4, open: "09:00", close: "17:00", label: "Thursday" },
    { day: 5, open: "09:00", close: "12:00", label: "Friday" },
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
