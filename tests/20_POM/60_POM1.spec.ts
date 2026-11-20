import {test , expect} from '@playwright/test';
import {LoginPage} from './pages/LoginPage';

test.describe('Verify tta login',()=>{
    test('Login TTA Cart Page',async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user','tta_secret');
        await expect(page).toHaveTitle('TTACart - Products');

    });
}); 