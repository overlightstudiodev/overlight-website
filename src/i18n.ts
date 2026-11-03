export type Lang = "id" | "en";

/** Sub-folder situs, mis. "/overlight-website" di GitHub Pages. Kosong kalau di root domain. */
const BASE = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");

/** Tambah sub-folder situs di depan path absolut ("/favicon.svg" -> "/overlight-website/favicon.svg"). */
export function withBase(path: string): string {
  return BASE + (path.startsWith("/") ? path : `/${path}`);
}

/** Link absolut di HTML hasil Markdown ("/software/x") ikut diberi sub-folder situs. */
export function baseLinks(html: string): string {
  if (!BASE) return html;
  return html.replace(/href="(\/(?!\/)[^"]*)"/g, (m, p: string) =>
    p === BASE || p.startsWith(BASE + "/") ? m : `href="${BASE}${p}"`,
  );
}

function stripBase(pathname: string): string {
  if (BASE && (pathname === BASE || pathname.startsWith(BASE + "/"))) return pathname.slice(BASE.length) || "/";
  return pathname;
}

/** Bahasa default = English (di root "/"); Indonesia di bawah "/id/". */
export function getLang(url: URL): Lang {
  const p = stripBase(url.pathname);
  return p === "/id" || p.startsWith("/id/") ? "id" : "en";
}

/** Path dalam bahasa tertentu. `path` selalu ditulis tanpa awalan bahasa (versi English). */
export function href(lang: Lang, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === "en") return withBase(clean);
  return withBase(clean === "/" ? "/id/" : clean.startsWith("/#") ? `/id/${clean.slice(1)}` : `/id${clean}`);
}

/** Path yang sama di bahasa lain. */
export function swapLangPath(url: URL): string {
  const lang = getLang(url);
  const p = stripBase(url.pathname);
  const enPath = lang === "id" ? p.replace(/^\/id(?=\/|$)/, "") || "/" : p;
  return href(lang === "id" ? "en" : "id", enPath);
}

/** Entry koleksi memakai id "<lang>/<slug>". */
export function entryLang(id: string): Lang {
  return id.startsWith("en/") ? "en" : "id";
}
export function entrySlug(id: string): string {
  return id.split("/").slice(1).join("/");
}

export function formatDate(d: Date, lang: Lang): string {
  return d.toLocaleDateString(lang === "en" ? "en-GB" : "id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const dict = {
  id: {
    "nav.work": "Karya",
    "nav.articles": "Artikel",
    "nav.about": "About",
    "nav.software": "Free Software",
    "nav.switchLabel": "Switch to English",
    "nav.menu": "Menu",
    "nav.home": "Beranda",
    "nav.cta": "Ngobrol yuk",
    "totop": "Kembali ke atas",
    "totop.label": "Balik ke atas",
    "intro.skip": "Lewati",
    "home.eyebrow": "Overlight Studio",
    "home.title.a": "Dirancang",
    "home.title.a2": "dengan",
    "home.title.b": "rasa",
    "home.title.c": "Dibangun",
    "home.title.c2": "dengan",
    "home.title.d": "logika",
    "home.lead":
      "Studio kreatif kecil dari Indonesia. Kami merancang, membangun, dan merawat produk digital, mulai dari ide di kertas sampai rilis di toko aplikasi.",
    "home.work.a": "Hasil",
    "home.work.b": "racikan kami",
    "home.workBtn": "Lihat karya kami",
    "home.workLead": "Dari coretan ide sampai aplikasi di HP dan laptopmu. Klik salah satu untuk intip dapurnya.",
    "home.latest": "Artikel terbaru",
    "home.allArticles": "Semua artikel",
    "home.cta.t": "Punya ide yang mau diwujudkan?",
    "home.cta.d": "Ceritakan idemu. Kami bantu rapikan jadi produk yang siap dipakai.",
    "home.cta.btn": "Chat WhatsApp",
    "home.cta.mail": "Kirim email",
    "contact.where": "Cibinong, Bogor, Indonesia",
    "sw.title": "Free Software",
    "sw.lead": "Aplikasi buatan Overlight yang bisa kamu pakai gratis. Klik salah satu untuk lihat fitur, cara pasang, dan link unduhnya.",
    "sw.back": "Semua aplikasi",
    "sw.more": "Aplikasi lain",
    "sw.soon": "Segera hadir",
    "sw.free": "Gratis",
    "status.live": "Tersedia",
    "status.beta": "Beta",
    "status.soon": "Segera hadir",
    "art.title": "Artikel",
    "art.lead": "Catatan dari dapur Overlight: cerita di balik produk, proses, dan hal-hal yang kami pelajari.",
    "art.back": "Semua artikel",
    "art.related": "Aplikasi terkait",
    "art.read": "Baca",
    "about.title": "About",
    "foot.rights": "Hak cipta dilindungi.",
    "notfound.t": "Halaman tidak ditemukan",
    "notfound.d": "Mungkin link-nya salah ketik, atau halamannya sudah pindah.",
    "notfound.btn": "Kembali ke home",
  },
  en: {
    "nav.work": "Work",
    "nav.articles": "Articles",
    "nav.about": "About",
    "nav.software": "Free Software",
    "nav.switchLabel": "Ganti ke Bahasa Indonesia",
    "nav.menu": "Menu",
    "nav.home": "Home",
    "nav.cta": "Let's talk",
    "totop": "Back to top",
    "totop.label": "Back to top",
    "intro.skip": "Skip",
    "home.eyebrow": "Overlight Studio",
    "home.title.a": "Designed",
    "home.title.a2": "with",
    "home.title.b": "feeling",
    "home.title.c": "Built",
    "home.title.c2": "with",
    "home.title.d": "logic",
    "home.lead":
      "A small creative studio from Indonesia. We design, build, and look after digital products, from a sketch on paper to a release in the app store.",
    "home.work.a": "What we've",
    "home.work.b": "cooked up",
    "home.workBtn": "See our work",
    "home.workLead": "From a scribbled idea to an app on your phone and laptop. Pick one to take a peek inside.",
    "home.latest": "Latest articles",
    "home.allArticles": "All articles",
    "home.cta.t": "Got an idea you want to build?",
    "home.cta.d": "Tell us about it. We will help shape it into a product people can use.",
    "home.cta.btn": "Chat on WhatsApp",
    "home.cta.mail": "Send an email",
    "contact.where": "Cibinong, Bogor, Indonesia",
    "sw.title": "Free Software",
    "sw.lead": "Apps made by Overlight that you can use for free. Pick one to see its features, how to install it, and where to download.",
    "sw.back": "All apps",
    "sw.more": "More apps",
    "sw.soon": "Coming soon",
    "sw.free": "Free",
    "status.live": "Available",
    "status.beta": "Beta",
    "status.soon": "Coming soon",
    "art.title": "Articles",
    "art.lead": "Notes from the Overlight kitchen: stories behind our products, our process, and what we learned along the way.",
    "art.back": "All articles",
    "art.related": "Related app",
    "art.read": "Read",
    "about.title": "About",
    "foot.rights": "All rights reserved.",
    "notfound.t": "Page not found",
    "notfound.d": "The link may have a typo, or the page has moved.",
    "notfound.btn": "Back to home",
  },
} as const;

export type Key = keyof (typeof dict)["id"];

export function t(lang: Lang, key: Key): string {
  return dict[lang][key];
}

export const PLATFORM_LABEL: Record<string, string> = {
  android: "Android",
  ios: "iOS",
  macos: "macOS",
  windows: "Windows",
  web: "Web",
};
