import { test, expect } from "@playwright/test";
import loginData from './test_data/Login_Data.json';

test.describe.serial("Login - data driven", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    });

    test('Verify Valid login credentials', async ({ page }) => {
        await page.getByPlaceholder('student@thetestingacademy.com').fill(loginData.validUser.email);
        await page.getByPlaceholder('Enter your password').fill(loginData.validUser.password);

        await page.getByTestId('login-button').click();

    });

    test('Verify Invalid login credentials', async ({ page }) => {
        await page.getByPlaceholder('student@thetestingacademy.com').fill(loginData.invalidUser.email);
        await page.getByPlaceholder('Enter your password').fill(loginData.invalidUser.password);

        await page.getByTestId('login-button').click();
    });

    test.afterEach('tear down', async ({ page }) => {
        await page.waitForTimeout(6000);
    })
});