from http.server import ThreadingHTTPServer,SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit,parse_qs
import json,html
ROOT=Path(__file__).resolve().parents[1]
class Handler(SimpleHTTPRequestHandler):
 def __init__(self,*a,**kw):super().__init__(*a,directory=str(ROOT),**kw)
 def do_GET(self):
  path=urlsplit(self.path).path
  if path in ['/robots.txt','/sitemap.xml']:self.path='/du-an'+path
  elif path!='/' and not Path(path).suffix:
   if (ROOT/path.lstrip('/')).with_suffix('.html').is_file(): self.path=path+'.html'
  super().do_GET()
 def do_POST(self):
  n=int(self.headers.get('Content-Length','0'))
  if n>16384:self.send_error(413);return
  raw=self.rfile.read(n)
  if self.path not in ['/api/dat-hang','/api/lien-he','/api/dang-ky']:self.send_error(404);return
  data=parse_qs(raw.decode('utf-8',errors='replace'));errors=[]
  if not data.get('name',[''])[0].strip():errors.append('Thiếu họ tên.')
  email=data.get('email',[''])[0]
  if '@' not in email or '.' not in email.rsplit('@',1)[-1]:errors.append('Email chưa hợp lệ.')
  if self.path=='/api/dat-hang':
   import re
   if not re.fullmatch(r'(0[0-9]{9}|[+]84[0-9]{9})',data.get('tel',[''])[0]):errors.append('Điện thoại sai định dạng.')
   if len(data.get('address',[''])[0].strip())<10:errors.append('Địa chỉ quá ngắn.')
   if not data.get('confirm'):errors.append('Chưa xác nhận biểu mẫu thực hành.')
  status=422 if errors else 200
  title='Kiểm tra lại dữ liệu' if errors else 'Đã nhận dữ liệu thực hành'
  msg=' '.join(errors) if errors else 'Dữ liệu chỉ được kiểm tra trong bộ nhớ, không lưu và không tạo đơn hàng. Không phát sinh thanh toán.'
  body=('<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>'+title+'</title></head><body><main><h1>'+title+'</h1><p>'+html.escape(msg)+'</p><a href="/du-an/trang-chu">Về trang chủ</a></main></body></html>').encode()
  self.send_response(status);self.send_header('Content-Type','text/html; charset=utf-8');self.send_header('Content-Length',str(len(body)));self.end_headers();self.wfile.write(body)
if __name__=='__main__':
 print('Mở http://127.0.0.1:8765/du-an/trang-chu',flush=True)
 ThreadingHTTPServer(('127.0.0.1',8765),Handler).serve_forever()
