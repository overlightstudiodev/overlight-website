// @ts-check
import { defineConfig } from "astro/config";

// SITE_URL = domain situs (URL kanonis & og:image). BASE_PATH = sub-folder, mis. "/overlight-website"
// untuk GitHub Pages proyek. Keduanya diisi otomatis oleh .github/workflows/deploy.yml.
const BASE_PATH = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://overlight.pages.dev",
  base: BASE_PATH,
  trailingSlash: "ignore",
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: "id",
    locales: ["id", "en"],
    routing: { prefixDefaultLocale: false },
  },
});
