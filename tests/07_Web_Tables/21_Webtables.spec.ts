import {test , expect } from '@playwright/test';

test('Verify web table',async({page})=>{
      await page.goto("https://awesomeqa.com/webtable1.html");
      //const fullData = await page.locator('[summary="Sample Table"]').textContent();

      const first ='//table[@summary="Sample Table"]/tbody/tr[';
      const secondpath =']/td';
      const thirdPath =']';

      const rowLen = await page.locator('//table[@summary="Sample Table"]/tbody/tr').count();
      console.log(rowLen);
      const coln = page.locator('//table[@summary="Sample Table]/tbody/tr[');

      for(let i=1;i<=rowLen;i++){
        const clen = `${first}${i}${secondpath}`;
        const lengt= await page.locator(clen).count();
        for(let j=1;j<=lengt;j++){
            const dataPath = `${clen}[${j}${thirdPath}`;
            const dataText = await page.locator(dataPath).innerText();
            //console.log(dataText);

            if(dataText.includes('Taipei')){
                const precedingPath = `${dataPath}/preceding-sibling::td`;
                const text = await page.locator(precedingPath).innerText();
                console.log(`Taipei is in ${text}`);
            }
        }
      }
      
});