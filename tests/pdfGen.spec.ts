// This is not a test. This 'test' generates PDF of CV for downloading by users

import { test } from '@playwright/test';

test.use({ browserName: 'chromium' });

test('Generate CV PDF', async ({ page }) => {
    await page.goto('/cv');
    await page.pdf({
        path: 'public/generated/cv.pdf',
        format: 'A4',
    });
});

