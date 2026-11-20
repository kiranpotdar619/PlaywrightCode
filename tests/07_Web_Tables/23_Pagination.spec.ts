import {test,expect} from '@playwright/test';

test('Verify pagination from table',async({page})=>{

    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');
    const Empname = "Valentina Cruz";

    let row;
    while(true){
    row = page.locator('#employees-table tr').filter({hasText:Empname});
    if(await row.count()){
        console.log(`${Empname}'s details : `);
        console.log(`Email : `,await row.locator('td[data-col="email"]').innerText());
        console.log(`Country : `,await row.locator('.country').innerText());
        console.log(`Role : `,await row.locator('td[data-col="role"]').innerText());
        break;
    }

    const next = page.locator('#next-page');
    if(await next.isDisabled())
    {
        throw new Error("Row not found");
    }
    await next.click();
    }

    await page.waitForTimeout(3000);
});