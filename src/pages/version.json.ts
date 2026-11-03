import type { APIRoute } from "astro";

/** Kode versi build terbaru. Diambil tanpa cache oleh setiap halaman untuk mendeteksi versi baru. */
export const GET: APIRoute = () =>
  new Response(JSON.stringify({ id: __BUILD_ID__ }), { headers: { "Content-Type": "application/json" } });
