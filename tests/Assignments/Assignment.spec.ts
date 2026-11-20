import {test,expect} from '@playwright/test';

test('Verify Right click',async({page})=>{

    await page.goto('https://demo.applitools.com/app.html#');

    
    const count = await page.locator('//table/tbody/tr/td[5]').count();
    console.log(count);
    
    const amounttext = await page.locator('//table/tbody/tr/td[5]').allTextContents();
    const amnt=[];
    let sum;
    for(let i=0;i<count;i++){

        amnt[i] = amounttext[i].trim().replace("USD","");
       
    }
 
   
});