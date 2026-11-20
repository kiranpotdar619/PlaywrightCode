import {test, expect} from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { Inventorypage } from './pages/InventoryPage';

test.describe('Verify tta inventory page',()=>{
    test('Add to cart',async({page})=>{
        //const loginPage = new LoginPage(page);
        const inventoryPage = new Inventorypage(page);
     //   loginPage.goto();
       // loginPage.login('standard_user','tta_secret');
        await inventoryPage.goto();
        await inventoryPage.addProduct();
        
    })

});