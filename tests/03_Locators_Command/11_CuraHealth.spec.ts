import {test,expect} from '@playwright/test';

test('Verify make appointment is visible',async({page})=>{
    await page.goto('https://katalon-demo-cura.herokuapp.com/');

    await page.locator("#btn-make-appointment").click();

    let userName = /*page.locator('[value=*/"John Doe";
    let passWord = /*page.locator('[value=*/"ThisIsNotAPassword";

    console.log(userName);

    await page.locator("#txt-username").fill(userName);
    await page.locator("#txt-password").fill(passWord);
    await page.locator("#btn-login").click();

    let title = page.locator("//h2['Make Appointment']");

    await expect(title).toContainText('Make Appointment');

    await page.locator("#combo_facility").click();
    await page.selectOption("#combo_facility","Hongkong CURA Healthcare Center");
    await page.locator('#chk_hospotal_readmission').check();
    await page.locator('#radio_program_medicare').click();

    await page.locator('#txt_visit_date').click();
    await page.getByRole('cell', { name: '12' }).click();

    await page.locator('#btn-book-appointment').click();

    let confirm = page.locator('//h2["Appointment Confirmation"]');
    await expect(confirm).toContainText("Appointment Confirmation");
    await page.waitForTimeout(3000);

})