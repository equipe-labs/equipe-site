#!/usr/bin/env python3
"""WCAG contrast for text pairs. usage: contrast.py fg:bg[:label] ..."""
import sys
def lum(h):
    h=h.lstrip('#'); r,g,b=(int(h[i:i+2],16)/255 for i in (0,2,4))
    f=lambda c: c/12.92 if c<=0.03928 else ((c+0.055)/1.055)**2.4
    return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b)
def ratio(a,b):
    la,lb=sorted((lum(a),lum(b)),reverse=True); return (la+0.05)/(lb+0.05)
for arg in sys.argv[1:]:
    p=arg.split(':'); r=ratio(p[0],p[1])
    print(f"{p[2] if len(p)>2 else '':28s} #{p[0].lstrip('#')} on #{p[1].lstrip('#')}  {r:5.2f}:1  {'AA' if r>=4.5 else ('AA-large' if r>=3 else 'FAIL')}")
