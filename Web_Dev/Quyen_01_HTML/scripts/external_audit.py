from pathlib import Path
from html.parser import HTMLParser
from urllib.request import Request,urlopen
import json,hashlib,datetime,re
R=Path(__file__).resolve().parents[1]
URLS=['https://pragprog.com/titles/elixir16/programming-elixir-1-6/','https://www.manning.com/books/grokking-algorithms-second-edition','https://www.manning.com/books/grokking-ai-algorithms-second-edition']
class Scan(HTMLParser):
 def __init__(self):super().__init__();self.meta={};self.links=[];self.headings=[];self.roles=[];self.jsons=[];self.injson=False;self.inhead=None;self.skip=False;self.blank=0;self.current=0;self.lang="";self.title="";self.intitle=False;self.doctype=""
 def handle_decl(self,decl):
  if decl.lower().startswith("doctype"):self.doctype=decl
 def handle_starttag(self,t,a):
  a=dict(a)
  if t=="html":self.lang=a.get("lang","")
  if t=="title":self.intitle=True
  if t=='meta':self.meta[a.get('name',a.get('property',a.get('charset','charset')))]=a.get('content',a.get('charset',''))
  if t=='link':self.links.append(a)
  if t in ['main','nav','aside','header','footer'] or 'role' in a:self.roles.append(t+':'+a.get('role','implicit'))
  if t in ['h1','h2','h3','h4','h5','h6']:self.inhead=t;self.headings.append([t,''])
  if t=='a':
   if a.get('target')=='_blank' and 'noopener' not in a.get('rel','') and 'noreferrer' not in a.get('rel',''):self.blank+=1
   if a.get('href','').startswith('#') and ('skip' in a.get('class','').lower() or 'skip' in a.get('id','').lower()):self.skip=True
   if a.get('aria-current')=='page':self.current+=1
  if t=='script' and a.get('type')=='application/ld+json':self.injson=True;self.jsons.append('')
 def handle_data(self,s):
  if self.intitle:self.title+=s
  if self.inhead:self.headings[-1][1]+=s
  if self.injson:self.jsons[-1]+=s
 def handle_endtag(self,t):
  if t=="title":self.intitle=False
  if t==self.inhead:self.inhead=None
  if t=='script':self.injson=False
rows=[]
for url in URLS:
 try:
  response=urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0 (compatible; HTML-Course-Audit/1.0)'}),timeout=30);raw=response.read();s=Scan();s.feed(raw.decode('utf-8',errors='replace'));schemas=[]
  def walk(x):
   if isinstance(x,dict):
    if '@type' in x:schemas.append({'type':x['@type'],'offers':'offers' in x,'image':'image' in x})
    for v in x.values():walk(v)
   elif isinstance(x,list):
    for v in x:walk(v)
  for text in s.jsons:
   try:walk(json.loads(text))
   except:schemas.append({'error':'JSON-LD không phân tích được'})
  rows.append({'url':url,'status':response.status,'http_content_type':response.headers.get('Content-Type',''),'utf8_bom':raw.startswith(bytes([239,187,191])),'sha256':hashlib.sha256(raw).hexdigest(),'metadata':{'doctype':s.doctype,'lang':s.lang,'title':s.title.strip()[:120],'description':'description' in s.meta,'viewport':'viewport' in s.meta,'charset_offset':(re.search(br'<meta[^>]*charset',raw,re.I).start() if re.search(br'<meta[^>]*charset',raw,re.I) else None),'canonical':[x.get('href') for x in s.links if 'canonical' in x.get('rel','').split()],'icon':any('icon' in x.get('rel','').split() for x in s.links),'open_graph':{k:k in s.meta for k in ['og:title','og:description','og:image','og:url']}},'meta_keys':list(s.meta),'link_rel':[x.get('rel') for x in s.links],'headings':[[a,b.strip()[:80]]for a,b in s.headings],'regions':s.roles,'skip_link_candidate':s.skip,'aria_current_page_count':s.current,'blank_without_explicit_noopener':s.blank,'schemas':schemas})
 except Exception as e:rows.append({'url':url,'error':str(e)})
(R/'bao-cao').mkdir(exist_ok=True);(R/'bao-cao/audit-web-ngoai.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2))
lines=['# Khảo sát ba trang bán sách — 12/11/2026','','Phân tích HTML phản hồi máy chủ; không suy diễn đây là DOM sau JavaScript, không xác nhận dùng bàn phím/screen reader hoặc Rich Results Test. Các trang có thể thay đổi.','','| Trang | HTTP | Metadata thấy trong nguồn | h1 | main/nav | Skip candidate | _blank thiếu noopener tường minh | Schema |','|---|---|---|---|---|---|---|---|']
for r in rows:
 if 'error' in r:lines.append('| '+r['url']+' | Không đọc được | '+r['error']+' | ? | ? | ? | ? | ? |');continue
 keys=[k for k in r['meta_keys']if k in ['description','viewport','og:title','og:image','twitter:card','UTF-8','utf-8']]
 lines.append('| '+r['url']+' | '+str(r['status'])+' | '+', '.join(keys)+' | '+str(sum(h[0]=='h1' for h in r['headings']))+' | '+str(sum(x.startswith('main:') for x in r['regions']))+'/'+str(sum(x.startswith('nav:') for x in r['regions']))+' | '+str(r['skip_link_candidate'])+' | '+str(r['blank_without_explicit_noopener'])+' | '+', '.join(str(x.get('type',x.get('error')))for x in r['schemas'])+' |')
lines+=['','## Diễn giải và đề xuất','','- Thiếu title/description: bổ sung riêng từng sản phẩm; meta tên khác chuẩn không thay cho description.','- Thiếu canonical: đánh giá biến thể URL trước khi bổ sung, không canonical mọi trang về trang chủ.','- Thiếu main/heading: bổ sung landmark và phân cấp có nghĩa; nhiều h1 cần đánh giá ngữ cảnh thay vì tự coi là lỗi cú pháp.','- Không tìm thấy skip trong nguồn chưa chứng minh không có: kiểm DOM và lượt Tab thật. Thêm link đầu body và focus tới main nếu thiếu.','- _blank thiếu noopener tường minh không đồng nghĩa browser hiện đại đang bị khai thác; thêm rel rõ để phòng tương thích.','- Có schema Product/Book, offers/image chỉ là ứng viên kỹ thuật; không kết luận đủ điều kiện Google rich result nếu chưa chạy công cụ.','- Bằng chứng chi tiết: audit-web-ngoai.json, gồm hash nguồn, heading, landmark, metadata và schema. Không lưu toàn văn nội dung có bản quyền.']
(R/'bao-cao/KHAO_SAT_WEB.md').write_text('\n'.join(lines))
print(json.dumps(rows,ensure_ascii=False)[:4500])
