import {test,expect} from '@playwright/test';

test.describe('Verify JS ALert click',()=>{

    test.beforeEach(async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    });

    test('Verify Js alert 1',async({page})=>{

        await page.getByRole('button',{name:'Click for JS Alert'}).click();
        page.once('dialog',async dialog=>{
            console.log('Alert type : ',dialog.type());
            console.log('Alert message : ',dialog.message());
            await expect(dialog.message()).toBe("I am a JS Alert");
            await dialog.accept();
        });
         await page.pause();
    });

    test('Verify Js alert 2',async({page})=>{

      //   await page.getByRole('button',{name:'Click for JS Confirm'}).click();
        page.once('dialog',async dialog=>{
            console.log('Alert type : ',dialog.type());
            expect(dialog.type()).toBe('confirm');
            console.log('Alert message : ',dialog.message());
            expect(dialog.message()).toBe("I am a JS Confirm");
            await dialog.accept();
        });
        await page.locator('button', { hasText: 'Click for JS Confirm' }).click();
        await expect(page.locator('#result')).toHaveText('You clicked: Ok');

         await page.pause();
    });
    
    test('Verify Js alert 3',async({page})=>{
          page.once('dialog',async dialog=>{
            console.log('Alert type : ',dialog.type());
           // expect(dialog.type()).toBe('confirm');
            console.log('Alert message : ',dialog.message());
          //  expect(dialog.message()).toBe("I am a JS Confirm");
            await dialog.accept('Kiran');
        });
        await page.locator('button', { hasText: 'Click for JS prompt' }).click();
        await expect(page.locator('#result')).toHaveText('You entered: Kiran');

         await page.pause();
    });
   
});