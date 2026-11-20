import { test, expect } from '@playwright/test';

test.describe.parallel('DDT Simple', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.saucedemo.com/");
    });

    const loginData = [
        {
            description: "valid credentials",
            username: "standard_user",
            password: "secret_sauce",
            expectedURL: /labs/,
            shouldPass: true
        },
        {
            description: "invalid credentials",
            username: "aff@gmail.com",
            password: "wrong",
            expectedURL: /labs/,
            shouldPass: false
        }
        ,
        {
            description: "empty username credentials",
            username: "",
            password: "admin123",
            expectedURL: /labs/,
            shouldPass: false
        },
        {
            description: "empty password credentials",
            username: "admin@gmail.com",
            password: "",
            expectedURL: /labs/,
            shouldPass: false
        },
        {
            description: "both empty credentials",
            username: "",
            password: "",
            expectedURL: /labs/,
            shouldPass: false
        }
    ];

    for(const data of loginData){
        test(`Login with : ${data.description}`, async ({ page ,navigationTimeout}) => {
            await page.locator("#user-name").fill(data.username);
            await page.locator("#password").fill(data.password);
            await page.getByTestId("login-button").click();
        });
    }
    // test.afterEach(async ({ page }) => {
    //     await page.waitForTimeout(3000);
    // });
});