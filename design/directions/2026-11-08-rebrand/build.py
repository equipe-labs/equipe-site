# Writes a/en.html, a/ko.html … for each direction module.
import sys, os, importlib
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from copy_text import C
for d in sys.argv[1:] or ['a', 'b', 'c']:
  m = importlib.import_module(f'dir_{d}')
  os.makedirs(d, exist_ok=True)
  for lang in ('en', 'ko'):
    open(f'{d}/{lang}.html', 'w').write(m.page(C[lang]))
  print('built', d)
