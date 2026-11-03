---
title: "MIMO: an easy way to mirror your Android phone for streaming"
description: Playing on your phone but streaming from your laptop? MIMO shows your phone screen on a Mac or PC over USB or Wi-Fi, ready for OBS to capture.
pubDate: 2026-11-03
tags: [Streaming, Desktop]
software: mimo
---

Streaming mobile games usually means a capture card, extra cables, or an app with settings that make your head spin. We wanted something simpler: plug in the phone, click one button, and the phone screen appears on the laptop.

## Cable or no cable

MIMO connects over **USB debugging** or **Wireless Debugging** (Android 11 and up). Over a cable, latency is usually steadier. Over Wi-Fi, you are free to move. MIMO finds your phone by itself and reconnects automatically if the connection drops.

## Pick a profile, not a number

Instead of tuning bitrate and resolution one by one, MIMO has five profiles: lowest latency, smooth 120 fps, most stable 120 fps, high detail, and a 60 fps fallback. Not sure which one fits? Run the 20-second performance test and MIMO will suggest one.

## Into OBS

1. Open MIMO and start mirroring.
2. In OBS, add a **Window Capture** source and choose the MIMO window.
3. Size it in your scene, and you are ready to go live.

Want a recording too? The **Record & mirror** button saves the session to MP4 without interrupting your stream.

MIMO for macOS is up and running and the Windows version is in Preview. Full details are on the [MIMO page](/software/mimo).
