import {test, expect} from '@playwright/test';

test.describe('Verify Shadow DOM',()=>{

    test.beforeEach(async({page})=>{
        await page.goto('https://selectorshub.com/iframe-in-shadow-dom/');
    });

    test('Verfiy Selectors Hub shadow Dom',async({page})=>{
        let username = page.locator('#kils');
        await username.fill("KIRAN");

        await page.locator('#pizza').fill('Farmhouse');

        const pwd = page.locator('#pwd').locator('input');
        await pwd.click();
        await pwd.pressSequentially('kiran@123');
        await page.pause();
    });
})