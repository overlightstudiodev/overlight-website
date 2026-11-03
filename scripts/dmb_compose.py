"""Tempel foto makanan baru ke screenshot Diet Mulai Besok dan buat frame 'Menganalisa makanan'.

usage: dmb_compose.py <home.png> <result.png> <food.png> <font.ttf> <outdir>
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

home_p, result_p, food_p, font_p, out = sys.argv[1:6]
out = Path(out)
out.mkdir(parents=True, exist_ok=True)

# kotak foto di screenshot 720x1600 (diukur dari piksel)
BOX = (30, 440, 690, 837)
RADIUS = 30
SS = 4  # supersampling untuk tepi membulat yang halus


def rounded_mask(size, r):
    w, h = size
    m = Image.new("L", (w * SS, h * SS), 0)
    ImageDraw.Draw(m).rounded_rectangle((0, 0, w * SS - 1, h * SS - 1), r * SS, fill=255)
    return m.resize((w, h), Image.LANCZOS)


home = Image.open(home_p).convert("RGB")
food = Image.open(food_p).convert("RGB")
bw, bh = BOX[2] - BOX[0], BOX[3] - BOX[1]
food_fit = ImageOps.fit(food, (bw, bh), Image.LANCZOS, centering=(0.5, 0.5))

# lapisan dasar = warna latar aplikasi, supaya sudut lama tertutup rapi
photo = home.copy()
bg = home.getpixel((10, 600))
ImageDraw.Draw(photo).rectangle(BOX, fill=bg)
photo.paste(food_fit, BOX[:2], rounded_mask((bw, bh), RADIUS))
photo.save(out / "dmb-photo.png", optimize=True)

# frame menganalisa: layar diredupkan + dialog putih seperti di aplikasi
W, H = photo.size
dim = Image.blend(photo, Image.new("RGB", photo.size, (0, 0, 0)), 0.62)
d = ImageDraw.Draw(dim, "RGBA")
dw, dh = int(W * 0.68), 262
x0, y0 = (W - dw) // 2, 692
dlg = Image.new("L", (dw * SS, dh * SS), 0)
ImageDraw.Draw(dlg).rounded_rectangle((0, 0, dw * SS - 1, dh * SS - 1), 32 * SS, fill=255)
dim.paste((255, 255, 255), (x0, y0), dlg.resize((dw, dh), Image.LANCZOS))

# spinner: busur hijau
cx, cy, r = W // 2, y0 + 108, 26
sp = Image.new("RGBA", (r * 2 * SS + 40 * SS, r * 2 * SS + 40 * SS), (0, 0, 0, 0))
sd = ImageDraw.Draw(sp)
pad = 20 * SS
sd.arc((pad, pad, pad + 2 * r * SS, pad + 2 * r * SS), start=-80, end=170, fill=(5, 150, 105, 255), width=8 * SS)
sp = sp.resize((sp.width // SS, sp.height // SS), Image.LANCZOS)
dim.paste(sp, (cx - sp.width // 2, cy - sp.height // 2), sp)

font = ImageFont.truetype(font_p, 34)
try:
    font.set_variation_by_name("Bold")
except Exception:
    pass
text = "Menganalisa makanan"
tw = d.textlength(text, font=font)
d.text(((W - tw) / 2, y0 + 172), text, font=font, fill=(31, 41, 55))
dim.save(out / "dmb-loading.png", optimize=True)

Image.open(result_p).convert("RGB").save(out / "dmb-result.png", optimize=True)
print("ok", out)
