# Builds the comparison sheets from shots/ (made by the T-18 shoot script on the dev server with mock.js injected).
import sys
from PIL import Image, ImageDraw, ImageFont
F = ImageFont.truetype('/usr/share/fonts/truetype/noto/NotoSansMono-Bold.ttf', 30)
def crop(lang, reg, w, mode, opt):
    return Image.open(f'shots/{lang}-{reg}-{w}-{mode}-{opt}.png')
def sheet(lang, reg, opts, name, title):
    rows = []
    for opt in opts:
        a = [crop(lang, reg, 1440, m, opt) for m in ('light', 'dark')]
        a = [t.resize((1440, int(t.height * 1440 / t.width))) for t in a]
        b = [crop(lang, reg, 390, m, opt) for m in ('light', 'dark')]
        b = [t.resize((390, int(t.height * 390 / t.width))) for t in b]
        H = a[0].height + a[1].height + 24
        row = Image.new('RGB', (20 + 1440 + 24 + 390 * 2 + 24 + 20, max(H, b[0].height) + 90), '#d9d7d0')
        d = ImageDraw.Draw(row)
        d.text((20, 20), f'{title[opt]}   (1440 light / dark | 390 light | 390 dark)', fill='#111', font=F)
        row.paste(a[0], (20, 70)); row.paste(a[1], (20, 70 + a[0].height + 24))
        x = 20 + 1440 + 24
        for t in b: row.paste(t, (x, 70)); x += 390 + 24
        rows.append(row)
    W = max(r.width for r in rows); S = Image.new('RGB', (W, sum(r.height for r in rows)), '#d9d7d0'); y = 0
    for r in rows: S.paste(r, (0, y)); y += r.height
    S.save(name)
T = {'before': 'Before (today)', 'A': 'A - official mono files, Tenki 72px / Ironact 96px wide', 'B': 'B - both in the footer grey (needs both companies OK), same sizes'}
sheet('en', 'footer', ['before', 'A', 'B'], 'sheet-footer-en.png', T)
sheet('ko', 'footer', ['before', 'A', 'B'], 'sheet-footer-ko.png', T)
S = {'before': 'Before (today)', 'A': 'After - Run it in the cloud'}
sheet('en', 'start', ['before', 'A'], 'sheet-start-en.png', S)
sheet('ko', 'start', ['before', 'A'], 'sheet-start-ko.png', S)
