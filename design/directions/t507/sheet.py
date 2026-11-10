# Builds the comparison sheets: per option, the Mac first screen (1440) beside the phone first screens (390).
import sys
from PIL import Image, ImageDraw, ImageFont
F = '/System/Library/Fonts/AppleSDGothicNeo.ttc'
def font(sz, bold=False):
    return ImageFont.truetype(F, sz, index=6 if bold else 0)
OPTS = {
 'A': ('A안 · 폰 앱 페이지 /app/', [('A-mac', 'Mac으로 왔을 때 · /app/'), ('A-home-ios', 'iPhone · 홈 첫 화면'), ('A-ios', 'iPhone · /app/'), ('A-android', 'Android · /app/')]),
 'B': ('B안 · 홈 ‘시작하기’ 안의 폰 블록', [('B-mac', 'Mac으로 왔을 때 · 홈 #phone'), ('B-ios', 'iPhone · 홈 #phone'), ('B-android', 'Android · 홈 #phone')]),
 'C': ('C안 · 기기 맞춤 첫 화면 (과감)', [('C-mac', 'Mac으로 왔을 때 · 홈 첫 화면'), ('C-ios', 'iPhone · 홈 첫 화면'), ('C-android', 'Android · APK 누른 뒤')]),
}
for opt, (title, frames) in OPTS.items():
    for lang, theme in [('ko', 'light'), ('en', 'dark')]:
        bg = (246, 245, 241) if theme == 'light' else (10, 10, 12)
        fg = (21, 22, 26) if theme == 'light' else (239, 237, 231)
        mu = (79, 81, 89) if theme == 'light' else (163, 165, 171)
        H = 1688  # one phone screen at 2x (844 css px)
        ims = []
        for key, cap in frames:
            w = 1440 if key.endswith('mac') else 390
            im = Image.open(f'png/{key}.{lang}-{w}-{theme}.png').convert('RGB')
            if w == 1440:
                im = im.crop((0, 0, im.width, min(im.height, 1800)))
                im = im.resize((int(im.width * H / im.height), H))
            else:
                im = im.crop((0, 0, im.width, min(im.height, H)))
            ims.append((im, cap))
        pad, gap, top = 80, 64, 200
        W = pad * 2 + sum(i.width for i, _ in ims) + gap * (len(ims) - 1)
        sheet = Image.new('RGB', (W, top + H + 140), bg)
        d = ImageDraw.Draw(sheet)
        d.text((pad, 60), title + ('' if lang == 'ko' else '  —  English, dark'), font=font(64, True), fill=fg)
        x = pad
        for im, cap in ims:
            sheet.paste(im, (x, top))
            d.rectangle((x - 1, top - 1, x + im.width, top + im.height), outline=mu, width=2)
            d.text((x, top + H + 36), cap, font=font(40), fill=mu)
            x += im.width + gap
        sheet = sheet.resize((W // 2, sheet.height // 2), Image.LANCZOS)
        sheet.save(f'sheet-{opt}-{theme}.png', optimize=True)
        print(f'sheet-{opt}-{theme}.png', sheet.size)
