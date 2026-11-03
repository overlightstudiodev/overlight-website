# Overlight Website

Website studio Overlight: home dengan intro logo animasi + porto, Free Software (halaman per aplikasi), Artikel, dan About. Dua bahasa: Indonesia (`/`) dan Inggris (`/en/`).

Stack: Astro 7 (situs statis) + GSAP (animasi intro) + font Outfit. Tanpa backend.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil di dist/
npm run check    # cek tipe
```

Intro logo diputar sekali per sesi browser. Untuk memutar ulang, buka `http://localhost:4321/?intro`.

## Menambah konten (cukup tambah file Markdown)

| Mau apa | File |
|---|---|
| Aplikasi/porto baru | `src/content/software/id/<slug>.md` dan `src/content/software/en/<slug>.md` |
| Artikel baru | `src/content/articles/id/<slug>.md` dan `src/content/articles/en/<slug>.md` |

- Nama file (slug) **harus sama** di kedua bahasa supaya tombol ID/EN menemukan pasangannya.
- Kolom frontmatter lihat `src/content.config.ts`. Contoh lengkap: `src/content/software/id/toiletgo.md`.
- Ikon/screenshot taruh di `src/assets/apps/` dan `src/assets/shots/`, lalu rujuk dengan path relatif.
- `portfolio: false` = tidak tampil di grid porto home. `free: false` = tidak tampil di Free Software. `draft: true` = disembunyikan.
- Demo animasi di kartu porto: isi `card:` dengan `frames` (2+ screenshot, diputar berurutan; frame pertama dapat efek pindai kamera) dan `chips` (label yang meletup keluar dari HP). Contoh: `diet-mulai-besok.md`.
- Link download: isi `links:` (yang `primary: true` jadi tombol utama). Tanpa link, tombol "Segera hadir" tampil.

## Yang masih perlu diisi

- `src/consts.ts`: email kontak, Instagram, GitHub (kosong = disembunyikan).
- `astro.config.mjs`: `site` = domain asli (sekarang placeholder `overlight.pages.dev`).
- Link download FastLoader, ToiletGo, MIMO saat sudah rilis publik.
- Ikon ToiletGo (`src/assets/apps/toiletgo.svg`) buatan sementara dari maskot tetes air; aplikasinya masih pakai ikon default Android.

## Struktur

- `src/components/Intro.astro`: intro home (kotak meletup → tulisan → jendela logo membesar membuka halaman).
- `src/assets/brand/overlight-logo.svg`: logo hasil tracing dari PNG asli, dipecah per bagian (`ol-s1/s2/s3/ring/over/light/tag`) untuk animasi. `overlight-mark.svg` = simbol tanpa teks (juga `public/favicon.svg`).
- `src/views/*`: isi halaman (dipakai bersama route ID dan EN di `src/pages/`).
- `src/i18n.ts`: teks UI dua bahasa + helper path.
