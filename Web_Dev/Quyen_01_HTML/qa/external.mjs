import {chromium} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';
const urls=['https://pragprog.com/titles/elixir16/programming-elixir-1-6/','https://www.manning.com/books/grokking-algorithms-second-edition','https://www.manning.com/books/grokking-ai-algorithms-second-edition'];
const browser=await chromium.launch();const results=[];
try{for(const [i,url]of urls.entries()){
 const context=await browser.newContext({viewport:{width:1280,height:900}});const page=await context.newPage();const row={url,method:'Chromium + axe, keyboard Tab scan up to 120 stops; no purchases/submissions; not screen-reader certification'};
 try{
  const response=await page.goto(url,{waitUntil:'domcontentloaded',timeout:45000});row.status=response?.status();row.title=await page.title();
  if(row.status>=400||/Just a moment|Access denied|Forbidden|Security verification|Robot Check/i.test(row.title)){row.blocked=true;}else{
   row.dom=await page.evaluate(()=>({headings:[...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(e=>({tag:e.tagName,text:e.textContent.trim().slice(0,80)})),landmarks:[...document.querySelectorAll('header,nav,main,aside,footer,[role=main],[role=navigation]')].map(e=>({tag:e.tagName,role:e.getAttribute('role'),label:e.getAttribute('aria-label')})),canonical:document.querySelector('link[rel=canonical]')?.href,skip:[...document.querySelectorAll('a[href^="#"]')].filter(e=>/skip|main content/i.test(e.textContent)).map(e=>({text:e.textContent,href:e.getAttribute('href')})),blank:[...document.querySelectorAll('a[target=_blank]')].filter(e=>!e.rel.includes('noopener')&&!e.rel.includes('noreferrer')).length}));
   const cdp=await context.newCDPSession(page);const tree=await cdp.send('Accessibility.getFullAXTree');const roles={};const levels=[];const byId=new Map(tree.nodes.map(n=>[n.nodeId,n]));const seen=new Set();function visit(node){if(!node||seen.has(node.nodeId))return;seen.add(node.nodeId);if(!node.ignored){const role=node.role?.value;if(['main','navigation','banner','contentinfo','complementary'].includes(role))roles[role]=(roles[role]||0)+1;if(role==='heading')levels.push(node.properties?.find(p=>p.name==='level')?.value?.value);}for(const id of node.childIds||[])visit(byId.get(id));}visit(tree.nodes.find(n=>n.role?.value==='RootWebArea')||tree.nodes[0]);row.accessibilityTree={roles,headingLevels:levels,order:'depth-first traversal from AX root using childIds'};
   row.navigation=await page.evaluate(()=>({navCount:document.querySelectorAll('nav,[role=navigation]').length,currentPage:document.querySelectorAll('nav [aria-current="page"]').length,charset:document.characterSet,lang:document.documentElement.lang}));
   const axe=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();row.axe={violations:axe.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,nodes:v.nodes.map(n=>n.target)})),incomplete:axe.incomplete.length};
   const stops=[];let first=null;
   for(let n=0;n<120;n++){
    await page.keyboard.press('Tab');const stop=await page.evaluate(()=>{const e=document.activeElement,s=getComputedStyle(e);return{tag:e.tagName,id:e.id,name:(e.getAttribute('aria-label')||e.textContent||'').trim().slice(0,80),href:e.getAttribute('href'),outline:s.outlineStyle+' '+s.outlineWidth,boxShadow:s.boxShadow,visible:e.getClientRects().length>0};});
    const signature=JSON.stringify(stop);if(n>0&&signature===first){row.loopAt=n;break;}if(n===0)first=signature;stops.push(stop);
   }row.keyboard=stops;await page.screenshot({path:'../bao-cao/anh/external-'+(i+1)+'.png',fullPage:false});
  }
 }catch(error){row.error=error.message;}results.push(row);await context.close();
}await fs.writeFile('../bao-cao/external-browser.json',JSON.stringify(results,null,2));console.log(results.map(r=>({url:r.url,status:r.status,blocked:r.blocked,error:r.error,axeViolations:r.axe?.violations.length,tabStops:r.keyboard?.length})));}finally{await browser.close();}
