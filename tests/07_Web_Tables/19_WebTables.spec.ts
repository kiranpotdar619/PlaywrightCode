import {test,expect} from '@playwright/test';

test('Verify web tables',async({page})=>{

    await page.goto("https://awesomeqa.com/webtable1.html");

    const dynamicPath1 = "//table[@summary='Sample Table']/tbody/tr[";
    const path2 = "]/td[";
    const path3 = "]";

    const row = await page.locator("//table[@summary='Sample Table']/tbody/tr").count();
    const col = await page.locator("//table[@summary='Sample Table']/tbody/tr[2]/td").count();

    for(let i=1;i<=row;i++){
        for(let j=1;j<=col;j++){
            const fullpath = `${dynamicPath1}${i}${path2}${j}${path3}`;

            const data=await page.locator(fullpath).innerText();
            console.log(data);

           
            
        }
    }
    
});