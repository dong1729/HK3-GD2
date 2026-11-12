(() => {
'use strict';
const key='sao-mai-course-cart-v1';
const books={web:{name:'Lập trình Web căn bản',price:98000,url:'/du-an/chi-tiet'},algo:{name:'Tư duy giải thuật',price:125000,url:'/du-an/sach/tu-duy-giai-thuat'},data:{name:'Dữ liệu cho người mới',price:110000,url:'/du-an/sach/du-lieu-cho-nguoi-moi'}};
let cart={};try{const saved=JSON.parse(localStorage.getItem(key)||'{}');for(const [id,q] of Object.entries(saved)){if(books[id]&&Number.isInteger(q)&&q>0&&q<=99)cart[id]=q;}}catch{}
const money=n=>n.toLocaleString('vi-VN')+' đ';
const announce=text=>{const el=document.getElementById('thong-bao');if(el)el.textContent=text;};
function render(){
 let count=0,total=0;const rows=[];
 for(const[id,q]of Object.entries(cart)){let b=books[id];count+=q;total+=b.price*q;const tr=document.createElement('tr');const th=document.createElement('th');th.scope='row';th.textContent=b.name;tr.append(th);for(const val of [money(b.price),q,money(b.price*q)]){const td=document.createElement('td');td.textContent=val;tr.append(td);}rows.push(tr);}
 document.querySelectorAll('[data-cart-count]').forEach(e=>e.textContent=count);
 document.querySelectorAll('[data-cart-summary]').forEach(e=>e.textContent=count+' cuốn — '+money(total));
 document.querySelectorAll('[data-cart-total]').forEach(e=>e.textContent=money(total));
 document.querySelectorAll('[data-cart-body]').forEach(e=>{e.replaceChildren(...rows.map(r=>r.cloneNode(true)));if(!rows.length){const tr=document.createElement('tr'),th=document.createElement('th');th.scope='row';th.textContent='Chưa có sách';tr.append(th);for(const v of ['0 đ','0','0 đ']){const td=document.createElement('td');td.textContent=v;tr.append(td);}e.append(tr);}});
 try{localStorage.setItem(key,JSON.stringify(cart));}catch{announce('Trình duyệt không cho lưu giỏ, dữ liệu chỉ giữ trong phiên này.');}
}
render();
const modal=document.getElementById('xem-nhanh');
modal?.addEventListener('keydown',event=>{
 if(event.key!=='Tab'||!modal.open)return;
 const items=[...modal.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex="0"]')].filter(el=>el.getClientRects().length);
 if(!items.length){event.preventDefault();modal.focus();return;}
 const first=items[0],last=items[items.length-1];
 if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
 else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
});
document.addEventListener('click',event=>{
 const add=event.target.closest('[data-add]');if(add){const id=add.dataset.add;if(!books[id])return;cart[id]=Math.min(99,(cart[id]||0)+1);render();announce('Đã thêm '+books[id].name+' vào giỏ.');}
 const clear=event.target.closest('[data-clear-cart]');if(clear){cart={};render();announce('Đã xóa giỏ hàng trên thiết bị.');}
 const quick=event.target.closest('[data-quick]');if(quick){const b=books[quick.dataset.quick];if(!b)return;document.getElementById('noi-dung-hop').textContent=b.name+' — '+money(b.price);const d=document.getElementById('xem-nhanh');d.showModal();d.addEventListener('close',()=>quick.focus(),{once:true});}
});
const edit=document.getElementById('sua-gio');edit?.addEventListener('submit',e=>{e.preventDefault();const id=Object.keys(cart)[0];if(!id){announce('Giỏ trống. Hãy thêm sách trước.');return;}cart[id]=Math.max(1,Math.min(99,Number(edit.elements.quantity.value)));render();announce('Đã cập nhật số lượng.');});
const open=document.getElementById('mo-loc'),filter=document.getElementById('bo-loc');
function closeFilter(){filter.hidden=true;open.setAttribute('aria-expanded','false');open.focus();}
open?.addEventListener('click',()=>{const expanded=open.getAttribute('aria-expanded')==='true';if(expanded){closeFilter();return;}filter.hidden=false;open.setAttribute('aria-expanded','true');document.getElementById('chu-de').focus();});
document.getElementById('dong-loc')?.addEventListener('click',closeFilter);filter?.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();closeFilter();}});
const list=document.getElementById('danh-sach-sach');
if(list){const params=new URLSearchParams(location.search);const q=(params.get('q')||'').toLocaleLowerCase('vi');const cat=params.get('category')||'all';const select=document.getElementById('chu-de');if(['all','web','data'].includes(cat))select.value=cat;function apply(){let n=0;list.querySelectorAll('li').forEach(li=>{const a=li.querySelector('article');const id=a.dataset.smBookId;const match=(!q||li.textContent.toLocaleLowerCase('vi').includes(q))&&(select.value==='all'||id===select.value);li.hidden=!match;if(match)n++;});document.getElementById('ket-qua').textContent='Tìm thấy '+n+' cuốn sách'+(q?' cho “'+q+'”':'')+'.';}select.addEventListener('change',apply);apply();}
for(const form of document.querySelectorAll('form[data-validate]')){
 form.addEventListener('invalid',e=>{const field=e.target;field.setAttribute('aria-invalid','true');const err=document.getElementById('loi-'+field.id);if(err)err.textContent='Lỗi: '+field.validationMessage;const box=form.querySelector('[role=alert]');if(box)box.textContent='Có trường chưa hợp lệ. Vui lòng sửa theo hướng dẫn.';},true);
 form.addEventListener('input',e=>{const field=e.target;field.setCustomValidity('');if(field.id==='dia-chi'&&field.value.trim().length>0&&field.value.trim().length<10)field.setCustomValidity('Địa chỉ cần ít nhất 10 ký tự sau khi bỏ khoảng trắng đầu cuối.');if(field.validity.valid){field.removeAttribute('aria-invalid');const err=document.getElementById('loi-'+field.id);if(err)err.textContent='';}else{const err=document.getElementById('loi-'+field.id);if(err)err.textContent='Lỗi: '+field.validationMessage;}});
}
document.querySelector('.skip-link')?.addEventListener('click',()=>{document.getElementById('noi-dung').focus();});
})();
