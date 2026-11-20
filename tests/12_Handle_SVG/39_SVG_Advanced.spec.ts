import { test, expect } from '@playwright/test';

test.describe('Verify Indian Map', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://simplemaps.com/country/in/');
    })

    test('Verify states in India', async ({ page }) => {
        const statecount = page.locator("//div[@id='map_inner']//*[name()='svg']//*[name()='path' and contains(@class,'sm_state')]");
        console.log(await statecount.count());
        expect(await statecount.count()).toBe(36);

        await page.locator("//div[@id='map_inner']//*[name()='svg']//*[name()='path' and contains(@class,'sm_state sm_state_INMH')]").click();

        await page.waitForLoadState('networkidle');
        console.log(await page.locator("tspan[dy='5.334775733947765']").textContent());

        const stateNamescount = page.locator('tspan');
        const cnt = await stateNamescount.count();

        for (let i = 0; i < cnt; i++) {
            const statename = await stateNamescount.nth(i).textContent();
            console.log(statename);
        }
        await page.pause();
        
    });
});