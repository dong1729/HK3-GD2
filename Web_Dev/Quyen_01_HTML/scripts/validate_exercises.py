from pathlib import Path
from urllib.request import Request,urlopen
import json,sys
R=Path(__file__).resolve().parents[1];results=[]
first=int(sys.argv[1]) if len(sys.argv)>1 else 1
last=int(sys.argv[2]) if len(sys.argv)>2 else 5
for n in range(first,last+1):
 for level in ['co-ban','trung-binh']:
  file=Path(f'Chuong_{n:02d}')/(level+'.html')
  if not (R/file).is_file():continue
  try:
   request=Request('https://validator.w3.org/nu/?out=json',data=(R/file).read_bytes(),headers={'Content-Type':'text/html; charset=utf-8','User-Agent':'HTML-course-validation/1.0'})
   with urlopen(request,timeout=45)as response:result=json.load(response)
   results.append({'file':str(file),**result});print(str(file),sum(x.get('type')=='error'for x in result.get('messages',[])),'errors',flush=True)
  except Exception as error:results.append({'file':str(file),'request_error':str(error)});print(file,'request failed',flush=True)
(R/f'bao-cao/w3c-bai-tap-{first:02}-{last:02}.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
