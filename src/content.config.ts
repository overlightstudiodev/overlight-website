import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Aplikasi/karya. Satu file per bahasa: src/content/software/<id|en>/<slug>.md
// Nama file (slug) harus sama di kedua bahasa supaya tombol ganti bahasa bisa menemukan pasangannya.
const software = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/software" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      description: z.string(),
      category: z.string(),
      platforms: z.array(z.enum(["android", "ios", "macos", "windows", "web"])),
      status: z.enum(["live", "beta", "soon"]),
      free: z.boolean().default(true),
      // Teks harga singkat, mis. "Gratis + Premium opsional"
      price: z.string().optional(),
      icon: image(),
      // Warna latar lembut kartu porto & warna aksen (tombol, ikon) di halaman aplikasi
      color: z.string(),
      accent: z.string(),
      links: z
        .array(z.object({ label: z.string(), url: z.url(), primary: z.boolean().default(false) }))
        .default([]),
      // Bingkai perangkat untuk screenshot: HP (aplikasi mobile) atau laptop (aplikasi desktop)
      device: z.enum(["phone", "laptop"]).default("phone"),
      screenshots: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      // Demo animasi di kartu porto: beberapa layar bergantian + label yang "meletup" keluar dari HP.
      card: z
        .object({
          // 1 frame tinggi = layar bergulir pelan; 2+ frame = bergantian
          frames: z.array(image()).min(1),
          chips: z.array(z.object({ label: z.string(), color: z.string().optional() })).default([]),
          // posisi foto di layar pertama (persen tinggi layar) untuk bingkai kamera & garis pindai
          scan: z.object({ top: z.number(), height: z.number() }).optional(),
        })
        .optional(),
      order: z.number().default(99),
      // Tampil di grid porto home
      portfolio: z.boolean().default(true),
      draft: z.boolean().default(false),
    }),
});

// Artikel. src/content/articles/<id|en>/<slug>.md
const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // slug aplikasi terkait (opsional), untuk warna & tautan
    software: z.string().optional(),
    author: z.string().default("Tim Overlight"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { software, articles };
