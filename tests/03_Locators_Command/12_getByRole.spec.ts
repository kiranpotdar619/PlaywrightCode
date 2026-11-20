import {test,expect} from '@playwright/test';

test('Verify get by role',async({page})=>{
    await page.goto("https://app.wingify.com/#/login");

    let username = page.getByRole("textbox",{name:"Email"});
    let password = page.getByRole("textbox",{name:"Password"});

    await username.fill("kjewqs");
    await password.fill("asdf");

    await page.getByRole("button",{name:"Sign In"}).first().click();

    let error_msg = page.locator("#js-notification-box-msg");
   
    await expect(error_msg).toContainText("Your email, password, IP address or location did not match");

});