from pathlib import Path
from urllib.request import Request,urlopen
import json,time
R=Path(__file__).resolve().parents[1];results=[]
for slug in ['trang-chu','danh-muc','chi-tiet','gio-hang','thanh-toan','lien-he']:
 try:
  req=Request('https://validator.w3.org/nu/?out=json',data=(R/'du-an'/f'{slug}.html').read_bytes(),headers={'Content-Type':'text/html; charset=utf-8','User-Agent':'HTML-course-validation/1.0'})
  with urlopen(req,timeout=45)as response:result=json.load(response)
  results.append({'page':slug,**result})
 except Exception as e:results.append({'page':slug,'request_error':str(e)})
 print(slug, 'checked',flush=True)
(R/'bao-cao/w3c-nu.json').write_text(json.dumps(results,ensure_ascii=False,indent=2));print('Saved W3C response records.')
