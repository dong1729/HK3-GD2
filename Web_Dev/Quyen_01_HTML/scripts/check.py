from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import json,re
ROOT=Path(__file__).resolve().parents[1]
class Parser(HTMLParser):
 def __init__(self):super().__init__();self.tags=[];self.ids=[];self.headings=[];self.labels=[];self.refs=[]
 def handle_starttag(self,t,a):
  a=dict(a);self.tags.append((t,a))
  if a.get('id'):self.ids.append(a['id'])
  if re.fullmatch('h[1-6]',t):self.headings.append(int(t[1]))
  if t=='label' and 'for' in a:self.labels.append(a['for'])
  for attr in ['src','href','poster']:
   if attr in a:self.refs.append(a[attr])
  if 'srcset' in a:self.refs.extend(x.strip().split()[0]for x in a['srcset'].split(','))
errors=[];n=0
for p in ROOT.rglob('*.html'):
 if any(part in p.parts for part in ['nguon','bao-cao','qa']):continue
 raw=p.read_text();s=Parser();s.feed(raw);n+=1
 def ck(ok,msg):
  if not ok:errors.append(str(p.relative_to(ROOT))+': '+msg)
 ck(raw.lower().startswith('<!doctype html>'),'DOCTYPE thiếu')
 ck(len(s.ids)==len(set(s.ids)),'ID trùng')
 ck(s.headings.count(1)==1,'h1 không duy nhất')
 ck(sum(t=='main' for t,a in s.tags)==1,'main không duy nhất')
 prev=0
 for level in s.headings:ck(level<=prev+1,'Heading nhảy cấp '+str(prev)+'→'+str(level));prev=level
 for t,a in s.tags:
  if t=='img':ck('alt'in a and 'width'in a and 'height'in a,'Ảnh thiếu alt/kích thước')
  if t=='button':ck('type'in a,'Nút thiếu type')
  if t=='a' and a.get('target')=='_blank':ck('noopener'in a.get('rel',''),'Tab mới thiếu noopener')
  if 'aria-labelledby'in a:
   for ident in a['aria-labelledby'].split():ck(ident in s.ids,'aria-labelledby đích thiếu '+ident)
  if 'aria-describedby'in a:
   for ident in a['aria-describedby'].split():ck(ident in s.ids,'aria-describedby đích thiếu '+ident)
 for ref in s.refs:
  u=urlsplit(ref)
  if u.scheme or u.netloc:continue
  if not u.path:
   if u.fragment:ck(unquote(u.fragment)in s.ids,'Neo thiếu '+u.fragment)
   continue
  target=(ROOT/u.path.lstrip('/'))if u.path.startswith('/')else p.parent/u.path
  ck(target.exists()or target.with_suffix('.html').exists(),'Tài nguyên/đích thiếu '+ref)
result={'files':n,'errors':errors,'scope':'Static checks: skeleton, headings, IDs, references, image attributes, explicit button types, ARIA targets. Not W3C or WCAG certification.'}
(ROOT/'bao-cao').mkdir(exist_ok=True);(ROOT/'bao-cao/static-check.json').write_text(json.dumps(result,ensure_ascii=False,indent=2));print(json.dumps(result,ensure_ascii=False,indent=2));raise SystemExit(bool(errors))
