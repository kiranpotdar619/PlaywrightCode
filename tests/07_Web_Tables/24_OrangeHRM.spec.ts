import { test, expect } from '@playwright/test';
import { log } from 'node:console';

test('Orange HRM Webtables and Pagination', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator('[placeholder="Username"]').pressSequentially("Admin");
    await page.locator('[placeholder="Password"]').pressSequentially("admin123");
    await page.locator('[type="submit"]').click();

    let EmpName = "Zuyca";
    //  const loginTitle = await page.locator("//h6[text()='Dashboard']").innerText();

    // expect(loginTitle).toContain("Dashboard");
    //-------------------------------------------------//
    await page.locator("span:has-text('PIM')").click();
    await page.locator("//i[@class='oxd-icon bi-plus oxd-button-icon']").click();

    await page.screenshot({ path: 'debug-orangehrm.png', fullPage: true });

    await page.locator('[placeholder="First Name"]').fill(EmpName);
    await page.locator('[placeholder="Last Name"]').fill("J");
    await page.locator('.oxd-input--active').last().clear();


    await page.getByText("Save").click();
    await page.getByRole('textbox').nth(4).fill('2051');
    await page.locator('.orangehrm-left-space').first().click();
    await page.waitForTimeout(2000);
    //     await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').first().click();
    await page.getByRole('link', { name: 'Employee List' }).click();
    await page.waitForLoadState('networkidle');
    const emplCount = await page.locator('.oxd-table-card').count();
    console.log(emplCount);

    console.log(await page.locator('.oxd-table-card').nth(2).textContent());
    //expect(await page.locator('.oxd-table-card').nth(2).textContent()).toBe('04095Amulya Ravi');

    let row = page.locator('.oxd-table-card').filter({ hasText: EmpName });
   
//------------------------------------------------------//

    while(true){
   // row = page.locator('#employees-table tr').filter({hasText:Empname});
    if(await row.count()){
        console.log(`${EmpName}'s details : `);
         console.log(await row.textContent());
         await row.locator('.bi-trash').click();
         await page.getByRole('button', { name: ' Yes, Delete' }).click();
         console.log("Successfully Deleted");
        break;
    }

    const next = page.locator('.oxd-pagination-page-item--previous-next');
    if(await next.isDisabled())
    {
        throw new Error("Row not found");
    }
    await next.click();
    }

    await page.pause();

});