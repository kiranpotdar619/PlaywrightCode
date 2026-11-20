import { test, expect } from "@playwright/test";

test.skip('check with gpay',async({page})=>{

    //never executes
});

test.only('Only test executed',async({page})=>{
    console.log("I have executed");
});

test.fail("failed test",async({page})=>{
    expect(90).toBe(100);
    console.log("Error");
});

test.fixme('Fix me later',async({page})=>{
    console.log("Fixed to be later");
});


test('Full regression',async({page})=>{
    test.slow();
    console.log(test.info().timeout);  

});

test('mobile layout', async ({ page, browserName }) => {
  test.fixme(browserName === 'webkit', 'Safari renders menu wrong');
  
  await page.goto("https://sdet.live");
});