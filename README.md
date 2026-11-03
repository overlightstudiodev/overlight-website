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

## Online (sementara)

https://overlightstudiodev.github.io/overlight-website/

Repo: https://github.com/overlightstudiodev/overlight-website. Setiap push ke `main` otomatis di-build dan di-deploy oleh `.github/workflows/deploy.yml` (GitHub Pages, sumber "GitHub Actions"). Workflow mengisi `SITE_URL` dan `BASE_PATH` (`/overlight-website`); semua link internal memakai `href()` / `withBase()` di `src/i18n.ts` supaya tetap benar di sub-folder. Saat pindah ke domain sendiri: hapus `BASE_PATH` (jadi `/`) dan isi `SITE_URL` dengan domain baru.

Folder internal (`docs/source-assets/`, `docs/project-memory.md`, `AGENTS.md`) sengaja tidak di-upload (lihat `.gitignore`).

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
- `device: laptop` = screenshot ditampilkan di mockup laptop (aplikasi desktop); default `phone`. Di home, kartu laptop dapat baris penuh, sisi laptopnya bergantian.
- Link download: isi `links:` (yang `primary: true` jadi tombol utama). Tanpa link, tombol "Segera hadir" tampil.

## Yang masih perlu diisi

- `src/consts.ts`: Instagram, GitHub (kosong = disembunyikan). Email & WhatsApp sudah diisi; link dibuat oleh `gmailLink()` (buka Gmail compose) dan `waLink()` (buka chat wa.me).
- `astro.config.mjs`: `site` = domain asli (sekarang placeholder `overlight.pages.dev`).
- Link download FastLoader, ToiletGo, MIMO saat sudah rilis publik.
- Ikon ToiletGo (`src/assets/apps/toiletgo.svg`) buatan sementara dari maskot tetes air; aplikasinya masih pakai ikon default Android.

## Struktur

- `src/components/Services.astro`: bagian Layanan di home (tab berganti otomatis + visual per layanan). Teks ID/EN ada di komponen itu.

- `src/components/Intro.astro`: intro home (kotak meletup → tulisan → jendela logo membesar membuka halaman).
- `src/assets/brand/overlight-logo.svg`: logo hasil tracing dari PNG asli, dipecah per bagian (`ol-s1/s2/s3/ring/over/light/tag`) untuk animasi. Simbol tanpa teks ada di `public/favicon.svg`.
- `src/views/*`: isi halaman (dipakai bersama route ID dan EN di `src/pages/`).
- `src/i18n.ts`: teks UI dua bahasa + helper path.
