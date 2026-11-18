#!/usr/bin/env python3
"""Render a direction page with headless Chrome.

usage: render.py <page.html> <out-dir> [--first]
Writes <name>-<width>-<theme>-<lang>.png for 1440/390 x dark/light x ko/en.
--first: first screen only (1440x900, 390x844). Otherwise the full page,
trimmed of trailing rows that are all background.
The page reads ?theme=dark|light&lang=ko|en from location.search.
"""
import subprocess, sys, pathlib
from PIL import Image

# chrome-headless-shell lays out at true narrow widths (new headless Chrome clamps to 500px)
CHROME = str(next(pathlib.Path.home().glob("Library/Caches/ms-playwright/chromium_headless_shell-*/chrome-headless-shell-mac-arm64/chrome-headless-shell")))
page = pathlib.Path(sys.argv[1]).resolve()
out = pathlib.Path(sys.argv[2]).resolve(); out.mkdir(parents=True, exist_ok=True)
first = "--first" in sys.argv
only = [a.split("=",1)[1] for a in sys.argv if a.startswith("--only=")]

def trim(p):
    im = Image.open(p).convert("RGB"); w, h = im.size
    bg = im.getpixel((2, h - 2)); y = h - 1
    px = im.load()
    while y > 0 and all(px[x, y] == bg for x in range(0, w, 3)):
        y -= 1
    im.crop((0, 0, w, min(h, y + 2))).save(p)

for width, height in ((1440, 900 if first else 7000), (390, 844 if first else 9000)):
    for theme in ("dark", "light"):
        for lang in ("ko", "en"):
            tag = f"{width}-{theme}-{lang}"
            if only and tag not in only: continue
            name = f"{page.stem}-{tag}{'-first' if first else ''}.png"
            dst = out / name
            subprocess.run([CHROME, "--hide-scrollbars",
                "--force-device-scale-factor=2", f"--window-size={width},{height}",
                "--virtual-time-budget=6000", f"--screenshot={dst}",
                f"file://{page}?theme={theme}&lang={lang}"], capture_output=True)
            if not first: trim(dst)
            print(dst)
