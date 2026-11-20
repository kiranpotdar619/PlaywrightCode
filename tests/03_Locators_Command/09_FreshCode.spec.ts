import {test, expect} from '@playwright/test';

test('Verify vwo page is loaded',async({page})=>{
    await page.goto('https://app.vwo.com',{
        waitUntil:'domcontentloaded',
        timeout:3000,
        referer:"https://sdet.live"
    });

    let userName = page.locator('#login-username');
    let passWord = page.locator('#login-password');
    let loginBtn = page.locator('#js-login-btn');

    await userName.pressSequentially("kkram");
    await passWord.pressSequentially("aoeb vdk");
    await loginBtn.click();

    let errorMsg = page.locator("#js-notification-box-msg");
    await expect(errorMsg).toContainText("Your email, password, IP address or location did not match");
    
    
});