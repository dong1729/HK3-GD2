import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
const urls=['https://pragprog.com/titles/elixir16/programming-elixir-1-6/','https://www.manning.com/books/grokking-algorithms-second-edition','https://www.manning.com/books/grokking-ai-algorithms-second-edition'];
const browser=await chromeLauncher.launch({chromePath:chromium.executablePath(),chromeFlags:['--headless','--no-sandbox']});const rows=[];
try{for(const [i,url]of urls.entries()){
 try{const result=await lighthouse(url,{port:browser.port,output:['html','json'],onlyCategories:['accessibility','seo'],logLevel:'error'});await fs.writeFile('../bao-cao/lighthouse-external-'+(i+1)+'.html',result.report[0]);await fs.writeFile('../bao-cao/lighthouse-external-'+(i+1)+'.json',result.report[1]);rows.push({url,scores:Object.fromEntries(Object.entries(result.lhr.categories).map(([k,v])=>[k,v.score])),runtimeError:result.lhr.runtimeError});}
 catch(error){rows.push({url,error:error.message});}
}await fs.writeFile('../bao-cao/lighthouse-external-summary.json',JSON.stringify(rows,null,2));console.log(rows);}finally{await browser.kill();}
