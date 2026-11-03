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

## Online

Cloudflare Pages: https://overlight-website.pages.dev/

Repo: https://github.com/overlightstudiodev/overlight-website. Proyek Cloudflare Pages `overlight-website` terhubung ke branch `main`: setiap push memicu build dan deployment otomatis. Preset framework: Astro, build command: `npm run build`, output directory: `dist`, root directory: root repository.

Variabel build di Cloudflare untuk Production dan Preview:

| Variabel | Nilai |
|---|---|
| `SITE_URL` | `https://overlight-website.pages.dev` |
| `BASE_PATH` | `/` |
| `NODE_VERSION` | `24` |

Domain sendiri belum ditetapkan. Setelah domain dimiliki dan ditambahkan di Cloudflare Pages, ubah `SITE_URL` ke URL HTTPS domain tersebut lalu deploy ulang. `BASE_PATH` tetap `/`. Semua tautan internal memakai helper `href()` / `withBase()` di `src/i18n.ts`.

Alamat GitHub Pages lama tetap tersedia sebagai cadangan: https://overlightstudiodev.github.io/overlight-website/. Workflow `.github/workflows/deploy.yml` masih menerbitkan versi dengan `SITE_URL` GitHub dan `BASE_PATH=/overlight-website`, terpisah dari build Cloudflare.

Cache: `public/_headers` membuat file `/_astro/*` (nama ber-hash) di-cache 1 tahun di Cloudflare; HTML tetap selalu dicek ulang. `version.json` berisi 7 digit commit (`CF_PAGES_COMMIT_SHA` / `GITHUB_SHA`), berguna untuk mengecek versi yang sedang live.

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
- Domain resmi: setelah dipilih dan dimiliki, pasang di Cloudflare Pages dan perbarui variabel build `SITE_URL`. Nilai di dashboard mengesampingkan fallback lokal `https://overlight-website.pages.dev` pada `astro.config.mjs`.
- Link download FastLoader, ToiletGo, MIMO saat sudah rilis publik.
- Ikon ToiletGo (`src/assets/apps/toiletgo.svg`) buatan sementara dari maskot tetes air; aplikasinya masih pakai ikon default Android.

## Struktur

- `src/components/Services.astro`: bagian Layanan di home (tab berganti otomatis + visual per layanan). Teks ID/EN ada di komponen itu.

- `src/components/Intro.astro`: intro home (kotak meletup → tulisan → jendela logo membesar membuka halaman).
- `src/assets/brand/overlight-logo.svg`: logo hasil tracing dari PNG asli, dipecah per bagian (`ol-s1/s2/s3/ring/over/light/tag`) untuk animasi. Simbol tanpa teks ada di `public/favicon.svg`.
- `src/views/*`: isi halaman (dipakai bersama route ID dan EN di `src/pages/`).
- `src/i18n.ts`: teks UI dua bahasa + helper path.
