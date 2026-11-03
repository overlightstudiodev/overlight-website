---
title: MIMO
tagline: Mirror layar HP Android ke laptop, siap buat streaming.
description: MIMO menampilkan layar HP Android di Mac atau PC Windows lewat USB atau Wi-Fi, dengan profil sampai 120 fps, audio, dan rekam layar. Cocok untuk streamer yang main game HP.
category: Streaming
platforms: [macos, windows]
status: soon
free: true
price: Gratis
icon: ../../../assets/apps/mimo.png
color: "#FFE9D4"
accent: "#E8701A"
device: laptop
screenshots:
  - src: ../../../assets/shots/mimo-main.png
    alt: Jendela MIMO di Mac, siap mencari HP lewat Wi-Fi atau USB
card:
  frames:
    - ../../../assets/shots/mimo-main.png
  chips:
    - label: 120 fps
    - label: USB atau Wi-Fi
      color: "#F59E0B"
    - label: Audio ikut
      color: "#10B981"
    - label: Rekam ke MP4
      color: "#EF4444"
order: 4
---

Streamer game HP butuh cara gampang untuk menampilkan layar HP di laptop, lalu menangkapnya di OBS atau aplikasi streaming lain. MIMO menyambungkan HP Android ke Mac atau PC Windows lewat kabel atau Wi-Fi, dan menjaga gambarnya tetap mulus.

## Fitur

- **USB atau Wi-Fi**: pakai USB debugging, atau Wireless Debugging Android 11 ke atas tanpa kabel. Pairing Wi-Fi dan pencarian HP berjalan otomatis.
- **Sampai 120 fps**: lima profil siap pakai, dari latensi paling rendah, 120 fps mulus, detail tinggi, sampai cadangan 60 fps.
- **Resolusi dan audio bisa diatur**: pilih resolusi sampai native, dan atur respons audio (cepat, seimbang, atau stabil).
- **Tes performa 20 detik**: MIMO mengukur FPS dan frame yang terlewat, lalu menyarankan resolusi dan bitrate yang cocok.
- **Rekam dan screenshot**: rekam sesi ke MP4 sambil mirror, atau ambil screenshot dengan satu klik.
- **Sambung ulang otomatis**: kalau koneksi putus atau IP HP berubah, MIMO menyambung lagi ke HP yang sama.
- **Mimo bantuin**: panduan langkah demi langkah saat izin USB, pairing, atau koneksi bermasalah.
- Bisa mematikan layar HP selama mirror supaya baterai lebih awet.

## Untuk streamer

Buka jendela MIMO, lalu tambahkan sebagai sumber **Window Capture** di OBS. Pakai profil latensi rendah untuk game kompetitif, atau 120 fps mulus untuk konten santai.

## Status

MIMO untuk macOS sudah berjalan, versi Windows masih Preview. Saat ini mendukung HP Android (belum iPhone). Video dan kontrol memakai proyek open-source scrcpy.
