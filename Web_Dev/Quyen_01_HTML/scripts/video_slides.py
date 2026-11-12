from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
R=Path(__file__).resolve().parents[1];A=R/'du-an/assets'
f='/System/Library/Fonts/Supplemental/Arial.ttf'
for n,(title,line)in enumerate([('Nhà sách Sao Mai','Giáo trình cho khởi đầu mới'),('Đọc để hiểu','Thực hành để nhớ'),('Khám phá kiến thức','Chọn một cuốn sách cho bạn')]):
 im=Image.new('RGB',(800,450),'#173e36');d=ImageDraw.Draw(im);d.rectangle((25,25,775,425),outline='#e2d5a1',width=3);d.text((65,120),title,font=ImageFont.truetype(f,48),fill='#f7f5ef');d.text((65,240),line,font=ImageFont.truetype(f,30),fill='#e2d5a1');im.save(A/('slide-'+str(n)+'.png'))
