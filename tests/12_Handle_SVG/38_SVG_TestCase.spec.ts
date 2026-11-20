import { test, expect, Locator } from '@playwright/test';

test.describe('Verify JS SVG ', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.flipkart.com/search?');
  });

  test('Verify Js SVG 1', async ({ page }) => {
    await page.locator('[name="q"]').fill('livon hair serum');
    const svgElements = page.locator('svg');
    await svgElements.first().click();

    await page.waitForLoadState('networkidle');

    const prodTitles: Locator = page.locator("//div[contains(@data-id,'HSM') or contains(@data-id,'HSY')]/div/a[2]");
    const pcount = await prodTitles.count();

    console.log(pcount);
    for (let i = 0; i < pcount; i++) {
      const title: string | null = await prodTitles.nth(i).textContent();
      console.log(title);
    }
    await page.pause();
  });
});