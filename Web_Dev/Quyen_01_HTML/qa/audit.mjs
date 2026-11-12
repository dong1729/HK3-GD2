import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
const browser=await chromeLauncher.launch({chromePath:chromium.executablePath(),chromeFlags:['--headless','--no-sandbox']});
const rows=[];
try{for(const page of ['trang-chu','danh-muc','chi-tiet','gio-hang','thanh-toan','lien-he']){
 const result=await lighthouse('http://127.0.0.1:8765/du-an/'+page,{port:browser.port,output:['html','json'],onlyCategories:['accessibility','performance','seo'],logLevel:'error'});
 await fs.writeFile('../bao-cao/lighthouse-'+page+'.html',result.report[0]);await fs.writeFile('../bao-cao/lighthouse-'+page+'.json',result.report[1]);
 rows.push({page,scores:Object.fromEntries(Object.entries(result.lhr.categories).map(([k,v])=>[k,v.score])),LCP:result.lhr.audits['largest-contentful-paint'].numericValue,CLS:result.lhr.audits['cumulative-layout-shift'].numericValue});
}await fs.writeFile('../bao-cao/lighthouse-summary.json',JSON.stringify(rows,null,2));console.log(rows);}finally{await browser.kill();}
