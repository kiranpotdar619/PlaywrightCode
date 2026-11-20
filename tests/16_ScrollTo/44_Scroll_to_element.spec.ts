import {test,expect} from '@playwright/test';

test.describe('Verify scroll down',()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://www.flipkart.com/');
    });

    test('Verify page scroll',async({page})=>{
        // await page.locator('//a[@href="https://www.myntra.com/"]').scrollIntoViewIfNeeded();
        // await page.waitForTimeout(3000);
        // await page.locator('//a[@href="https://www.myntra.com/"]').click();

        await page.getByRole('button',{name:'✕'}).click();

        //jump to bottom
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      
        //jump back to top
        await page.evaluate(()=> window.scrollTo(0,0));
        await page.waitForTimeout(8000);

    });
});