import {test,expect} from '@playwright/test';

test('Verify select tag dropdown',async({page})=>{

   console.time('Page navigation');

  await page.goto(
    'https://the-internet.herokuapp.com/dropdown',
    { waitUntil: 'domcontentloaded' }
  );

  console.timeEnd('Page navigation');

  console.time('Dropdown interaction');

    await page.locator("#dropdown").click();

    await page.selectOption("#dropdown","Option 2");

    await page.pause();
});