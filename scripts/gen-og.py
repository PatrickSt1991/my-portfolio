"""Generate the social share (Open Graph) image for madebypatrick.nl.

Run from repo root:  python3 scripts/gen-og.py
Outputs: public/og-image.png  (1200x630)
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630
FONT_DIR = "/usr/share/fonts/truetype/google-fonts"
BOLD = f"{FONT_DIR}/Poppins-Bold.ttf"
MED = f"{FONT_DIR}/Poppins-Medium.ttf"
LIGHT = f"{FONT_DIR}/Poppins-Light.ttf"


def font(path, size):
    return ImageFont.truetype(path, size)


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


# ---- base: dark navy diagonal gradient (#0b1020 -> #131a35) -----------------
base = Image.new("RGB", (W, H), (11, 16, 32))
top = (11, 16, 32)
bot = (19, 26, 53)
px = base.load()
for y in range(H):
    row = lerp(top, bot, y / H)
    for x in range(W):
        px[x, y] = row

# ---- soft glows (indigo top-right, sky bottom-left) -------------------------
glow = Image.new("RGB", (W, H), (0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.ellipse([W - 520, -260, W + 200, 460], fill=(60, 70, 200))   # indigo
gd.ellipse([-260, H - 420, 420, H + 220], fill=(20, 120, 190))  # sky
glow = glow.filter(ImageFilter.GaussianBlur(150))
base = Image.blend(base, ImageEnhance := Image.composite(
    Image.new("RGB", (W, H), (255, 255, 255)), base, glow.convert("L")), 0.0)
# additive-ish blend of glow onto base
base = Image.blend(base, glow, 0.28)

draw = ImageDraw.Draw(base)

# ---- gradient ring mark (echoes the site's profile ring) --------------------
ring_cx, ring_cy, R = 150, 150, 54
ring = Image.new("RGBA", (R * 2 + 16, R * 2 + 16), (0, 0, 0, 0))
rd = ImageDraw.Draw(ring)
indigo = (99, 102, 241)
sky = (14, 165, 233)
for i in range(360):
    t = i / 360
    col = lerp(indigo, sky, abs(0.5 - t) * 2)
    rd.arc([8, 8, 8 + R * 2, 8 + R * 2], i, i + 2, fill=col + (255,), width=10)
base.paste(ring, (ring_cx - R - 8, ring_cy - R - 8), ring)
# PS monogram inside
mono = font(BOLD, 46)
tb = draw.textbbox((0, 0), "PS", font=mono)
draw.text((ring_cx - (tb[2] - tb[0]) / 2, ring_cy - (tb[3] - tb[1]) / 2 - tb[1]),
          "PS", font=mono, fill=(226, 232, 240))

# ---- "made by" kicker -------------------------------------------------------
draw.text((232, 120), "made by", font=font(MED, 30), fill=(148, 163, 184))

# ---- name (gradient fill) ---------------------------------------------------
name = "Patrick Stel"
nf = font(BOLD, 92)
nb = draw.textbbox((0, 0), name, font=nf)
nw, nh = nb[2] - nb[0], nb[3] - nb[1]
mask = Image.new("L", (nw + 8, nh + 24), 0)
ImageDraw.Draw(mask).text((0, -nb[1]), name, font=nf, fill=255)
grad = Image.new("RGB", (nw + 8, nh + 24))
gp = grad.load()
for x in range(grad.width):
    col = lerp((129, 140, 248), (56, 189, 248), x / grad.width)
    for y in range(grad.height):
        gp[x, y] = col
base.paste(grad, (230, 158), mask)

# ---- role subtitle ----------------------------------------------------------
draw.text((232, 286), "Cloud Application Engineer & Developer",
          font=font(MED, 38), fill=(203, 213, 225))

# ---- tech chips -------------------------------------------------------------
chips = ["C#", ".NET", "React", "Vue", "Home Assistant", "Azure"]
x = 232
cf = font(MED, 26)
for c in chips:
    cb = draw.textbbox((0, 0), c, font=cf)
    cw = cb[2] - cb[0]
    pad = 22
    draw.rounded_rectangle([x, 360, x + cw + pad * 2, 412], radius=26,
                           fill=(30, 41, 71), outline=(71, 85, 120), width=1)
    draw.text((x + pad, 368), c, font=cf, fill=(199, 210, 254))
    x += cw + pad * 2 + 14

# ---- footer: domain + dot ---------------------------------------------------
draw.ellipse([232, 540, 248, 556], fill=(16, 185, 129))
draw.text((262, 532), "madebypatrick.nl", font=font(BOLD, 34), fill=(241, 245, 249))
draw.text((262, 575), "Open-source tools voor thuis, sportclubs en bedrijven",
          font=font(LIGHT, 24), fill=(148, 163, 184))

base.save("public/og-image.png", "PNG", optimize=True)
print("wrote public/og-image.png")
