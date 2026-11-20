import {test, expect} from '@playwright/test';
import userData from './test_data/userData.json';

test('Verift test data from JSON',async({page})=>{

    console.log(userData.username);
    console.log(userData.password);
});