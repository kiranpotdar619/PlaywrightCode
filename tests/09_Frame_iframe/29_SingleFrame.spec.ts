import {test,expect, Locator, FrameLocator} from '@playwright/test';

test('Verify single iframe',async({page})=>{

    await page.goto("https://app.thetestingacademy.com/playwright/frames/");

    console.log(await page.locator('.tta-eyebrow').textContent());
    let vehicleframe : FrameLocator= page.frameLocator('#frame-one');
    await vehicleframe.locator('#RESULT_TextField-1').fill('Wagon R');
    await vehicleframe.locator('#RESULT_TextField-2').fill("Kiran P");
    await vehicleframe.locator('#RESULT_RadioButton-1').click();
    await vehicleframe.locator('#RESULT_RadioButton-1').selectOption("Hatchback");
    await vehicleframe.locator('#RESULT_TextField-4').fill('2015');
    await vehicleframe.locator('#vehicle-submit').click()

   // await page.waitForTimeout(4000);

    console.log(await vehicleframe.locator('.submission-output').textContent());
    //console.log(texte);

    await page.pause();
}); 