import {test,expect} from '@playwright/test';
import path from 'path';

test.describe('Verify File uploads',()=>{

    test.beforeEach(async({page})=>{
        await page.goto('https://selectorshub.com/xpath-practice-page/');
    });

    test('Verify file uploads',async({page})=>{
       
        const filePath = path.join(__dirname,'testData.txt');
        console.log(filePath);

         await page.locator('#myFile').setInputFiles([filePath]);

        // await expect(page.locator('#myFile')).toContainText('testData.txt');
        await page.pause();
    });
});
//E:\PlaywrightCode\tests\14_FileUpload_Download\42_File_Upload.spec.ts