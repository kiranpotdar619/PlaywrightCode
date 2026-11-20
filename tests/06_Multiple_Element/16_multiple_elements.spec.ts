import {test,expect} from '@playwright/test';

test('Verify multiple elements',async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    const str = await page.getByText('Secure Practice').innerText();
    console.log(str);

    const navigationList = await page.locator('a.list-group-item').allInnerTexts();
    console.log(navigationList);

    for(const lis of navigationList){
        if(lis.includes("Forgotten Password"))
            await page.getByText(lis).first().click();
    }


    const panelList = await page.locator('a.list-group-item').all();

    for(const pl of panelList){
        console.log(await pl.getAttribute("href"));
        console.log(await pl.textContent());
    }

    
});