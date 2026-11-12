from pathlib import Path
from string import Template
import json,html,os
ROOT=Path(__file__).resolve().parents[1]
SITE=os.environ.get('SITE_URL','https://sachsaomai.example').rstrip('/')
def esc(v): return html.escape(str(v),quote=True)
pages=json.loads((ROOT/'nguon/pages.json').read_text())
head=Template((ROOT/'nguon/head.html').read_text())
frame=Template((ROOT/'nguon/khung.html').read_text())
menu=[('trang-chu','Trang chủ','Home'),('danh-muc','Danh mục','Catalog'),('chi-tiet','Chi tiết sách','Book details'),('gio-hang','Giỏ hàng','Cart'),('thanh-toan','Thanh toán','Checkout'),('lien-he','Liên hệ','Contact')]
for slug,p in pages.items():
 lang=p.get('lang','vi');en=lang=='en';url=SITE+'/du-an/'+slug
 nav=''.join('<li><a href="/du-an/'+s+'"'+(' aria-current="page"' if slug==s or (s=='danh-muc' and slug=='danh-muc-trang-2') else '')+'>'+ (eng if en else vi)+'</a></li>' for s,vi,eng in menu)
 extra=''
 if slug=='danh-muc': extra+='<link rel="next" href="'+SITE+'/du-an/danh-muc-trang-2">'
 if slug=='danh-muc-trang-2':extra+='<link rel="prev" href="'+SITE+'/du-an/danh-muc">'
 pairs={'danh-muc':('danh-muc','en/catalog'),'en/catalog':('danh-muc','en/catalog'),'chi-tiet':('chi-tiet','en/book'),'en/book':('chi-tiet','en/book')}
 if slug in pairs:
  vi,eng=pairs[slug]
  extra+=''.join('<link rel="alternate" hreflang="'+lg+'" href="'+SITE+'/du-an/'+path+'">' for lg,path in [('vi',vi),('en',eng),('x-default',vi)])
 schema=[]
 if 'book' in p:
  b=p['book'];schema.append({'@context':'https://schema.org','@type':['Book','Product'],'name':b['name'],'author':{'@type':'Organization','name':b['author']},'image':SITE+'/du-an/assets/'+b['id']+'-1200.jpg','description':p['description'],'offers':{'@type':'Offer','price':str(b['price']),'priceCurrency':'VND','availability':'https://schema.org/InStock','url':url}})
 if slug!='trang-chu':schema.append({'@context':'https://schema.org','@type':'BreadcrumbList','itemListElement':[{'@type':'ListItem','position':1,'name':'Home' if en else 'Trang chủ','item':SITE+'/du-an/trang-chu'},{'@type':'ListItem','position':2,'name':p['title'],'item':url}]})
 for obj in schema:extra+='<script type="application/ld+json">'+json.dumps(obj,ensure_ascii=False).replace('<','\u003c')+'</script>'
 h=head.substitute(title=esc(p['title']),description=esc(p['description']),canonical=esc(url),robots=p.get('robots','index, follow'),site=SITE,ogtype='book' if 'book' in p else 'website',extra=extra)
 crumb='' if slug=='trang-chu' else '<nav class="breadcrumb" aria-label="'+('Breadcrumb' if en else 'Đường dẫn vị trí')+'"><ol><li><a href="/du-an/trang-chu">'+('Home' if en else 'Trang chủ')+'</a></li><li aria-current="page">'+esc(p['title'])+'</li></ol></nav>'
 main=((ROOT/'nguon'/p['content_file']).read_text() if 'content_file' in p else p['main']).replace('/du-an/chi-tiet?book=web','/du-an/chi-tiet').replace('/du-an/chi-tiet?book=algo','/du-an/sach/tu-duy-giai-thuat').replace('/du-an/chi-tiet?book=data','/du-an/sach/du-lieu-cho-nguoi-moi')
 result=frame.substitute(lang=lang,head=h,main=main,menu=nav,breadcrumb=crumb,skip='Skip to main content' if en else 'Bỏ qua điều hướng đến nội dung',navlabel='Main navigation' if en else 'Điều hướng chính',searchlabel='Find books' if en else 'Tìm sách',search='Search' if en else 'Tìm kiếm',cartlabel='Cart' if en else 'Giỏ hàng',demo='Learning demo, no real orders' if en else 'Dự án học tập, không đặt hàng thật',newtab='new tab' if en else 'tab mới',minicart='Mini cart' if en else 'Giỏ hàng nhanh',empty='No books' if en else 'Chưa có sách',viewcart='View cart' if en else 'Xem giỏ hàng',close='Close' if en else 'Đóng',quick='Quick view' if en else 'Xem nhanh')
 out=ROOT/'du-an'/slug;out=out.with_name(out.name+'.html');out.parent.mkdir(parents=True,exist_ok=True);out.write_text(result)
public=[s for s,p in pages.items() if 'noindex' not in p.get('robots','')]
(ROOT/'du-an/sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+''.join('<url><loc>'+SITE+'/du-an/'+s+'</loc><lastmod>2026-11-12</lastmod></url>' for s in public)+'</urlset>')
(ROOT/'du-an/robots.txt').write_text('User-agent: *\nAllow: /\nDisallow: /*?sort=\nDisallow: /*?filter=\nSitemap: '+SITE+'/du-an/sitemap.xml\n')
print('Built',len(pages),'pages. Canonical base:',SITE)

# Giu ban dung de doc khi bo dinh dang da duoc cai trong qa.
if (ROOT/"qa/node_modules/prettier/index.mjs").is_file():
 import subprocess
 subprocess.run(["node",str(ROOT/"scripts/format.mjs")],check=True)
