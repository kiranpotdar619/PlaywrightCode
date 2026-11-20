import {test,expect} from '@playwright/test';

test('Verify Keyboard actions',async({page})=>{

    await page.goto('https://www.toptal.com/developers/keycode',{waitUntil:'load'});

    await page.keyboard.press('A');
    await page.screenshot({path:'A.png'});

    await page.keyboard.press('ArrowLeft');
    await page.screenshot({path:'Arrow.png'});

    await page.keyboard.press('Shift+0');
    await page.screenshot({path:'Shift0.png'});

    


});
//E:\PlaywrightCode\tests\10_Keyboard_Hover_DragDrop_Calender\32_Keyboard_Keys.spec.ts