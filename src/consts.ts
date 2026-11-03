import type { Lang } from "./i18n";

/**
 * Data studio terpusat. Isi nilai kosong ('') saat sudah ada.
 * Tombol/link yang nilainya kosong otomatis disembunyikan.
 */
export const SITE = {
  name: "Overlight",
  studio: "Overlight Studio",
  tagline: "Your Creative Partner",
  description: {
    id: "Overlight Studio, creative partner kamu. Kami bikin aplikasi, game, dan desain yang enak dipakai: Diet Mulai Besok, FastLoader, ToiletGo, dan MIMO.",
    en: "Overlight Studio, your creative partner. We make apps, games, and design people enjoy using: Diet Mulai Besok, FastLoader, ToiletGo, and MIMO.",
  },
  email: "overlightstudio.dev@gmail.com",
  // Nomor WhatsApp format internasional tanpa "+" dan tanpa 0 di depan (0819… → 62819…), untuk wa.me
  whatsapp: "6281932571962",
  whatsappDisplay: "+62 819-3257-1962",
  // TODO: isi URL lengkap, mis. "https://instagram.com/overlight.studio"
  instagram: "",
  github: "",
};

/** Buka jendela tulis email di Gmail (web), alamat & subjek sudah terisi. */
export function gmailLink(lang: Lang): string {
  const su = lang === "en" ? "Hello Overlight" : "Halo Overlight";
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE.email)}&su=${encodeURIComponent(su)}`;
}

/** Buka chat WhatsApp langsung, dengan pesan pembuka. */
export function waLink(lang: Lang): string {
  const text = lang === "en" ? "Hi Overlight, I'd like to talk about a project." : "Halo Overlight, saya mau ngobrol soal proyek.";
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
