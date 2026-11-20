import {test,expect} from '@playwright/test';

test.describe('Verify file download',()=>{

    test.beforeEach(async({page})=>{
        await page.goto('https://selectorshub.com/xpath-practice-page/');
    });

    test('Verify file download',async({page})=>{
        
        const [staticDownload]=await Promise.all([
            page.waitForEvent('download'),
             page.getByText('Click to Download PNG File').click()
        ]);

        await staticDownload.saveAs('./output/'+staticDownload.suggestedFilename());
        await page.pause();
    });
});