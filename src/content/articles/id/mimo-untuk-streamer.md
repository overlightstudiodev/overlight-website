---
title: "MIMO: cara gampang mirror HP Android buat streaming"
description: Main game di HP tapi mau streaming dari laptop? MIMO menampilkan layar HP di Mac atau PC lewat USB atau Wi-Fi, dan bisa langsung ditangkap OBS.
pubDate: 2026-11-03
tags: [Streaming, Desktop]
software: mimo
---

Streaming game HP biasanya butuh capture card, kabel tambahan, atau aplikasi yang pengaturannya bikin pusing. Kami ingin sesuatu yang lebih sederhana: colok HP, klik satu tombol, layar HP langsung tampil di laptop.

## Kabel atau tanpa kabel

MIMO bisa tersambung lewat **USB debugging** atau **Wireless Debugging** (Android 11 ke atas). Lewat kabel, delay biasanya lebih stabil. Lewat Wi-Fi, kamu bebas bergerak. MIMO mencari HP sendiri dan menyambung ulang otomatis kalau koneksi putus.

## Pilih profil, bukan angka

Daripada mengatur bitrate dan resolusi satu per satu, MIMO punya lima profil: latensi paling rendah, 120 fps mulus, 120 fps paling stabil, detail tinggi, dan cadangan 60 fps. Belum yakin mana yang cocok? Jalankan tes performa 20 detik, dan MIMO akan memberi saran.

## Masuk ke OBS

1. Buka MIMO dan mulai mirroring.
2. Di OBS, tambahkan sumber **Window Capture** dan pilih jendela MIMO.
3. Atur ukuran di scene, dan kamu siap live.

Mau sekalian simpan rekaman? Tombol **Rekam & mirror** menyimpan sesi ke MP4 tanpa mengganggu stream.

MIMO untuk macOS sudah berjalan dan versi Windows sedang Preview. Info lengkapnya ada di [halaman MIMO](/id/software/mimo).
