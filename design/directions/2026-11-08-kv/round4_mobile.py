"""Build a legible mobile preview from two crops of the same real accept screen."""
from pathlib import Path
from PIL import Image

HERE = Path(__file__).resolve().parent
wide = Image.open(HERE / "round4-app/accept-dark-1200.png").convert("RGB")
narrow = Image.open(HERE / "round4-app/accept-dark-760.png").convert("RGB")

# The upper crop proves that the squad has several active/finished items; the
# lower crop keeps the full consequence and final Accept action legible.
context = wide.crop((260, 44, 780, 279)).resize((700, 316), Image.Resampling.LANCZOS)
context = context.resize((700, 240), Image.Resampling.LANCZOS)
decision = narrow.crop((340, 44, 760, 450)).resize((700, 660), Image.Resampling.LANCZOS)

out = Image.new("RGB", (700, 901), "#131313")
out.paste(context, (0, 0))
out.paste(decision, (0, 241))
out.save(HERE / "round4-app/accept-dark-mobile.png", quality=95)

# Remove the desktop sidebar and empty lower chrome without redrawing anything.
desktop = wide.crop((260, 0, 1200, 560))
desktop.save(HERE / "round4-app/accept-dark-desktop.png", quality=95)
print(HERE / "round4-app/accept-dark-mobile.png")
