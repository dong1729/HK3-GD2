import fs from 'node:fs/promises';
import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const routes=['trang-chu','danh-muc','chi-tiet','gio-hang','thanh-toan','lien-he'];
for(const slug of routes){
 test(slug+' — cấu trúc, tài nguyên, bàn phím và axe',async({page})=>{
  const missing=[];page.on('response',r=>{if(r.url().startsWith('http://127.0.0.1:8765')&&r.status()>=400)missing.push(r.url()+':'+r.status());});
  await page.goto('/du-an/'+slug);await expect(page.locator('h1')).toHaveCount(1);await expect(page.locator('main')).toHaveCount(1);
  await page.keyboard.press('Tab');await expect(page.locator('.skip-link')).toBeFocused();await page.keyboard.press('Enter');await expect(page.locator('main')).toBeFocused();
  const cdp=await page.context().newCDPSession(page);const tree=await cdp.send('Accessibility.getFullAXTree');await fs.mkdir('../bao-cao/accessibility',{recursive:true});await fs.writeFile('../bao-cao/accessibility/'+slug+'.json',JSON.stringify(tree,null,2));await test.info().attach('accessibility-tree-'+slug,{body:JSON.stringify(tree,null,2),contentType:'application/json'});
  const keyboard=[];for(let step=0;step<100;step++){await page.keyboard.press('Tab');const focused=await page.evaluate(()=>{const e=document.activeElement,s=getComputedStyle(e);return{tag:e.tagName,id:e.id,name:(e.getAttribute('aria-label')||e.textContent||'').trim().slice(0,80),outline:s.outlineStyle+' '+s.outlineWidth};});if(step>0&&JSON.stringify(focused)===JSON.stringify(keyboard[0]))break;keyboard.push(focused);}await fs.mkdir('../bao-cao/keyboard',{recursive:true});await fs.writeFile('../bao-cao/keyboard/'+slug+'.json',JSON.stringify(keyboard,null,2));
  const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();expect(result.violations).toEqual([]);
  await page.screenshot({path:'../bao-cao/anh/'+slug+'-desktop.png',fullPage:true});
  await page.setViewportSize({width:390,height:844});await expect.poll(()=>page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1)).toBe(true);await page.screenshot({path:'../bao-cao/anh/'+slug+'-mobile.png',fullPage:true});
  expect(missing).toEqual([]);
  await test.info().attach('axe-'+slug,{body:JSON.stringify(result,null,2),contentType:'application/json'});
 });
}
test('giỏ hàng, modal và thông báo',async({page})=>{
 await page.goto('/du-an/trang-chu');await page.getByRole('button',{name:'Thêm Lập trình Web căn bản vào giỏ',exact:true}).click();await expect(page.locator('#thong-bao')).toContainText('Đã thêm');
 const opener=page.getByRole('button',{name:'Xem nhanh Lập trình Web căn bản',exact:true});await opener.click();await expect(page.locator('dialog')).toBeVisible();
 for(let i=0;i<4;i++){await page.keyboard.press('Tab');expect(await page.evaluate(()=>document.activeElement.closest('dialog')!==null)).toBe(true);}
 await page.keyboard.press('Escape');await expect(opener).toBeFocused();await page.goto('/du-an/gio-hang');await expect(page.locator('[data-cart-total]')).toContainText('98.000');await page.locator('#so-luong').fill('2');await page.getByRole('button',{name:'Cập nhật số lượng',exact:true}).click();await expect(page.locator('[data-cart-total]')).toContainText('196.000');await page.reload();await expect(page.locator('[data-cart-total]')).toContainText('196.000');
});
test('bộ lọc và tìm kiếm',async({page})=>{
 await page.goto('/du-an/danh-muc');const open=page.getByRole('button',{name:'Bộ lọc',exact:true});await open.click();await expect(open).toHaveAttribute('aria-expanded','true');await page.locator('#chu-de').selectOption('data');await expect(page.locator('#danh-sach-sach>li:visible')).toHaveCount(1);await page.keyboard.press('Escape');await expect(open).toBeFocused();await expect(open).toHaveAttribute('aria-expanded','false');
 await page.locator('#tim-sach').fill('giải thuật');await page.getByRole('button',{name:'Tìm kiếm',exact:true}).click();await expect(page.locator('#ket-qua')).toContainText('1');await expect(page.locator('#danh-sach-sach>li:visible')).toContainText('Tư duy giải thuật');
});
test('mật khẩu xóa customError, lưu nháp',async({page})=>{
 await page.goto('/Chuong_07/trung-binh.html');await page.locator('#mat-khau').fill('abcdefgh');await page.locator('#nhap-lai').fill('different');expect(await page.locator('#nhap-lai').evaluate(e=>e.validity.customError)).toBe(true);await page.locator('#nhap-lai').fill('abcdefgh');expect(await page.locator('#nhap-lai').evaluate(e=>e.validity.customError)).toBe(false);await page.getByRole('button',{name:'Lưu nháp',exact:true}).click();await expect(page.locator('#loi-khop')).toContainText('nháp');
});
test('server không tin xác thực phía client',async({request})=>{
 const bad=await request.post('/api/dat-hang',{form:{name:'Mau',email:'bad',tel:'123',address:'abc'}});expect(bad.status()).toBe(422);
 const ok=await request.post('/api/dat-hang',{form:{name:'Người nhận mẫu',email:'mau@example.com',tel:'0912345678',address:'Địa chỉ minh họa 123',confirm:'on'}});expect(ok.status()).toBe(200);expect(await ok.text()).toContain('không lưu');
});

for(let chapter=1;chapter<=5;chapter++)for(const level of ['co-ban','trung-binh']){test('Bài '+chapter+' '+level+' — HTML và trợ năng',async({page})=>{await page.goto('/Chuong_'+String(chapter).padStart(2,'0')+'/'+level+'.html');await expect(page.locator('h1')).toHaveCount(1);await expect(page.locator('main')).toHaveCount(1);const result=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();expect(result.violations).toEqual([]);});}
