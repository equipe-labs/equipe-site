# First-screen crops (1440×900, 390×844) and quarter-size full pages for the sheets.
from PIL import Image
for d in 'abc':
  for lang in ('en','ko'):
    for th in ('light','dark'):
      for w,fh in ((1440,900),(390,844)):
        im=Image.open(f'shots/{d}/{lang}-{w}-{th}.png')
        im.crop((0,0,w*2,fh*2)).resize((w,fh),Image.LANCZOS).save(f'crops/{d}-{lang}-{w}-{th}-fold.png')
        W,H=im.size; im.resize((W//4,H//4),Image.LANCZOS).save(f'crops/{d}-{lang}-{w}-{th}-full.png')
