import {test,expect} from '@playwright/test';

test('Verify web table',async({page})=>{

    await page.goto("https://awesomeqa.com/webtable1.html");
    const fullData = await page.locator('[summary="Sample Table"]').textContent();

    //console.log(fullData);

    const path='//table[@summary="Sample Table"]/tbody/tr[';
    const colnpath = '//table[@summary="Sample Table"]/tbody/tr[4]/td['
    let rowslen = await page.locator('//table[@summary="Sample Table"]/tbody/tr').count();
    let coldlen = await page.locator('//table[@summary="Sample Table"]/tbody/tr[4]/td').count();

    //console.log(rowslen);

    const end = ']';
    for(let i=1;i<=rowslen;i++){
     const data = `${path}${i}${end}`;
     const printdaata = await page.locator(data).textContent();
     console.log(printdaata);
    }

    //for colm data
    for(let i=1;i<=coldlen;i++){
        const data = `${colnpath}${i}${end}`;
       // console.log(data);
        const reqData = await page.locator(data).innerText();
      //  console.log(reqData);

        if(reqData.includes('China')){
            const City = `${data}/following-sibling::td`;
            const citytext = await page.locator(City).first().innerText();
            console.log(`${citytext} is in China.`);   
        }

    }
});