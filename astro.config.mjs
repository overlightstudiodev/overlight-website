// @ts-check
import { defineConfig } from "astro/config";

// SITE_URL = domain situs (URL kanonis & og:image). BASE_PATH = sub-folder, mis. "/overlight-website"
// untuk GitHub Pages proyek. Keduanya diisi otomatis oleh .github/workflows/deploy.yml.
const BASE_PATH = process.env.BASE_PATH ?? "/";
// Kode versi build = 7 digit commit (Cloudflare Pages / GitHub Actions); dipakai halaman untuk
// mengecek apakah ada versi baru (lihat Base.astro).
const COMMIT = process.env.CF_PAGES_COMMIT_SHA ?? process.env.GITHUB_SHA ?? "";
const BUILD_ID = COMMIT.slice(0, 7) || Date.now().toString(36);

export default defineConfig({
  site: process.env.SITE_URL ?? "https://overlight-website.pages.dev",
  base: BASE_PATH,
  trailingSlash: "ignore",
  devToolbar: { enabled: false },
  vite: {
    define: { __BUILD_ID__: JSON.stringify(BUILD_ID) },
    // Target browser untuk CSS: lightningcss menambah prefix -webkit- sendiri (mis. backdrop-filter
    // untuk Safari < 18). Jangan tulis -webkit-backdrop-filter manual SETELAH backdrop-filter:
    // lightningcss menganggapnya pengganti dan membuang versi tanpa prefix, blur hilang di Chrome.
    build: { cssTarget: ["chrome111", "edge111", "firefox114", "safari16.4", "ios16.4"] },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
    routing: { prefixDefaultLocale: false },
  },
});
