const host=document.getElementById('the-tu-khuon');
if(host){
 try{
  host.inert=true;
  const [markup,books]=await Promise.all([fetch('/nguon/khuon.html').then(r=>{if(!r.ok)throw Error('Khuôn không tải được');return r.text();}),fetch('/du-an/assets/books.json').then(r=>r.json())]);
  const doc=new DOMParser().parseFromString(markup,'text/html');const template=doc.getElementById('sm-card');
  for(const b of [...books,{id:'extra',name:'Thực hành HTML',price:75000}]){
   const node=template.content.cloneNode(true);const article=node.querySelector('article');article.dataset.smBookId=b.id;article.dataset.smPrice=String(b.price);
   node.querySelector('[data-sm-slot=name]').textContent=b.name;node.querySelector('[data-sm-slot=price]').textContent=b.price.toLocaleString('vi-VN')+' đ';node.querySelector('[data-sm-slot=link]').textContent='Xem '+b.name;node.querySelector('[data-sm-slot=link]').href='/du-an/danh-muc';host.append(node);
  }
 }catch(error){host.textContent='Không tải được dữ liệu khuôn. '+error.message;}finally{host.inert=false;}
}
