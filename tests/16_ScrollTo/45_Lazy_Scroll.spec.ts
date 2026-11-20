import { test, expect } from '@playwright/test';

test.describe('Scroll to Element - TestingAcademy', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');
    });

    test('Lazy scroll into view', async ({ page }) => {
        await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();
        await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();

        const list = page.getByTestId('lazy-list').locator('li');

        await expect(list).toHaveCount(10);
        const initialCount = await list.count();
        console.log(initialCount);

        await page.evaluate(() => window.scrollTo(0, 0));

        await page.getByTestId('lazy-loader').scrollIntoViewIfNeeded();

        await expect.poll(async () => list.count(), {
            message: "expected_itmes > 20",
            timeout: 10_000
        }).toBeGreaterThan(initialCount);

        await page.waitForTimeout(4000);
    });
});