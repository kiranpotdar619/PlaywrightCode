import {test,expect, FrameLocator} from '@playwright/test';

test('Verify multi frame',async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");

    const allframes = await page.locator('//frame').all();
    const allframescount = await page.locator('//frame').count();

    for(const frame of allframes){
       // console.log(await frame.getAttribute('name'),':',await frame.getAttribute('src'));
             console.log(await frame.getAttribute('title'));
        
    }

    const sideFrame = page.frameLocator('[name="side"]');
    await sideFrame.getByTestId('side-link-registration').click();

    await page.waitForTimeout(4000);
});
