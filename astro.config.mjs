// @ts-check
import { defineConfig } from "astro/config";

// SITE_URL = domain situs (URL kanonis & og:image). BASE_PATH = sub-folder, mis. "/overlight-website"
// untuk GitHub Pages proyek. Keduanya diisi otomatis oleh .github/workflows/deploy.yml.
const BASE_PATH = process.env.BASE_PATH ?? "/";
// Kode versi build: dipakai halaman untuk mengecek apakah ada versi baru (lihat Base.astro).
const BUILD_ID = (process.env.GITHUB_SHA ?? "").slice(0, 7) || Date.now().toString(36);

export default defineConfig({
  site: process.env.SITE_URL ?? "https://overlight.pages.dev",
  base: BASE_PATH,
  trailingSlash: "ignore",
  devToolbar: { enabled: false },
  vite: { define: { __BUILD_ID__: JSON.stringify(BUILD_ID) } },
  i18n: {
    defaultLocale: "id",
    locales: ["id", "en"],
    routing: { prefixDefaultLocale: false },
  },
});
