from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
ROOT=Path(__file__).resolve().parents[1];A=ROOT/'du-an/assets';A.mkdir(parents=True,exist_ok=True)
font='/System/Library/Fonts/Supplemental/Arial.ttf'
def ft(n):
 try:return ImageFont.truetype(font,n)
 except:return ImageFont.load_default()
for key,title,color in [('web','WEB\nFOUNDATIONS','#173e36'),('algo','ALGORITHM\nTHINKING','#6b3d21'),('data','DATA\nSTARTER','#243c64')]:
 im=Image.new('RGB',(1200,1500),color);d=ImageDraw.Draw(im);d.rectangle((70,70,1130,1430),outline='#e2d5a1',width=6);d.text((120,150),'SAO MAI / LEARNING',font=ft(48),fill='#f1e6c6');d.multiline_text((120,380),title,font=ft(108),fill='white',spacing=30);d.ellipse((360,900,840,1380),outline='#e2d5a1',width=12);d.line((600,900,600,1380),fill='#e2d5a1',width=8);d.text((120,800),'SEMANTIC HTML / 2026',font=ft(40),fill='white')
 for w in (400,800,1200):
  img=im.resize((w,w*5//4))
  for ext in ('jpg','webp','avif'):img.save(A/(key+'-'+str(w)+'.'+ext),quality=80)
share=Image.new('RGB',(1200,630),'#e5ece3');d=ImageDraw.Draw(share);d.rectangle((50,50,1150,580),outline='#173e36',width=5);d.text((100,140),'SAO MAI',font=ft(110),fill='#173e36');d.text((105,300),'BOOKS FOR A NEW BEGINNING',font=ft(42),fill='#173e36');d.text((105,440),'HTML LEARNING PROJECT / 2026',font=ft(32),fill='#173e36');share.save(A/'chia-se.jpg',quality=88)
source=Image.new('RGB',(2400,1350),'#e5ece3');d=ImageDraw.Draw(source)
for row in range(2):
 d.rectangle((50,600+row*600,2350,635+row*600),fill='#6b3d21')
 for i,col in enumerate(['#173e36','#6b3d21','#243c64','#6c2750','#526321','#315c6b']):d.rectangle((100+i*360,120+row*600,370+i*360,595+row*600),fill=col)
source.save(A/'anh-goc-2400.jpg',quality=90)
for w in (400,800,1200):
 im=source.resize((w,w*9//16))
 for ext in ('jpg','webp','avif'):im.save(A/('anh-goc-'+str(w)+'.'+ext),quality=80)
print('Generated original artwork + 3 sizes × 3 formats for 4 images, and 1200x630 share image.')
