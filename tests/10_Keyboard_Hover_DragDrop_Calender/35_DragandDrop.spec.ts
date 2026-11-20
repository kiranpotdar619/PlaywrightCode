import {test,expect} from '@playwright/test';

test('Verify drag and drop',async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd");

  //  let toDoCol = page.locator('#card-review-pr-21');
    // let inProgressCol = page.getByTestId('col-in-progress');
    // let toDoCol = page.getByText('Review PR #21 — flaky test fix',{exact:true});

    // await toDoCol.dragTo(inProgressCol);

    //-----------------------------------------------------------//

    let source = page.locator("#card-review-pr-21");
    const sBox = (await source.boundingBox())!;

    let target = page.getByTestId("col-in-progress");
    const tBox = (await target.boundingBox())!;

    await page.mouse.move(sBox.x + sBox.width/2,sBox.y + sBox.height/2);
    await page.mouse.down();

    
    await page.mouse.move(tBox.x + tBox.width/2,tBox.y + tBox.height/2);
    await page.mouse.up();

    await page.pause();
})