import { test, expect } from '@playwright/test';


test('Login User with correct email and password', async ({ page }) => {
    await page.goto('http://automationexercise.com');
  
    await expect(page.locator('body')).toBeVisible();
    await page.getByRole('link', { name: 'Signup / Login' }).click();
  
    await expect(page.getByText('Login to your account')).toBeVisible();
    await page.fill('input[placeholder="Email Address"]', 'ratata@gmail.com');
    await page.fill('input[placeholder="Password"]', '123');
    await page.click('button:has-text("Login")');
  
    await page.locator('text=/logged in as/i');
    await page.getByRole('link', { name: 'Continue' }).click();
    await page.getByRole('link', { name: 'Delete Account' }).click();
    await page.locator('text=/account deleted!/i');
  })
  