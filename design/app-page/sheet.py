# Review sheets for the refined /app/ page: Mac at 1280 beside the phones at 390, cropped to a first screen and a scroll.
import sys
from PIL import Image, ImageDraw, ImageFont
F = '/System/Library/Fonts/AppleSDGothicNeo.ttc'
font = lambda sz, b=False: ImageFont.truetype(F, sz, index=6 if b else 0)
SHEETS = {
 'first': [('mac', 1280, 'Mac · 1280'), ('ios', 390, 'iPhone · 390'), ('android', 390, 'Android · 390')],
 'states': [('mac-android-open', 1280, 'Mac · Android 도움말 펼침'), ('ios-link-copied', 390, 'iPhone · 링크 복사됨'), ('android-verify-copied', 390, 'Android · 아래쪽: 파일 확인 펼침·복사됨')],
}
H = 3400
for name, frames in SHEETS.items():
    for lang, theme in [('ko', 'light'), ('ko', 'dark'), ('en', 'light')]:
        bg, fg = ((246, 245, 241), (21, 22, 26)) if theme == 'light' else ((10, 10, 12), (239, 237, 231))
        ims = []
        for key, w, cap in frames:
            im = Image.open(f'shots/{key}.{lang}-{w}-{theme}.png').convert('RGB')
            if w == 1280:
                im = im.resize((im.width * 3 // 4, im.height * 3 // 4))
            y0 = max(0, im.height - H) if key == 'android-verify-copied' else 0
            ims.append((im.crop((0, y0, im.width, min(im.height, y0 + H))), cap))
        Hh = max(i.height for i, _ in ims)
        pad, gap, top = 60, 60, 140
        W = pad * 2 + sum(i.width for i, _ in ims) + gap * (len(ims) - 1)
        sh = Image.new('RGB', (W, top + Hh + 40), bg); d = ImageDraw.Draw(sh)
        x = pad
        for im, cap in ims:
            d.text((x, 50), cap, font=font(44, True), fill=fg)
            sh.paste(im, (x, top)); d.rectangle((x - 1, top - 1, x + im.width, top + im.height), outline=(128, 128, 128), width=2)
            x += im.width + gap
        sh = sh.resize((W // 2, sh.height // 2), Image.LANCZOS)
        out = f'sheet-{name}.{lang}-{theme}.png'; sh.save(out, optimize=True); print(out, sh.size)
