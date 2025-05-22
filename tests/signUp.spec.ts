import { test, expect } from '@playwright/test';

test('Register User', async ({ page }) => {
  await page.goto('http://automationexercise.com');


  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('link', { name: 'Signup / Login' }).click();

  await expect(page.getByText('New User Signup!')).toBeVisible();
  await page.fill('input[placeholder="Name"]', 'Jorge');
  await page.locator('input[placeholder="Email Address"]').nth(1).fill('rattaaaatatt@example.com');
  await page.click('button:has-text("Signup")');

  await page.locator('text=/enter account information/i');
  await page.check('input[value="Mr"]');
  await page.fill('input[name="password"]', '123');
  await page.selectOption('select[name="days"]', '15');   
  await page.selectOption('select[name="months"]', '5');   
  await page.selectOption('select[name="years"]', '1995');
  await page.check('input[name="newsletter"]');
  await page.check('input[name="optin"]');
  await page.fill('input[name="first_name"]', 'Jprge');
  await page.fill('input[name="last_name"]', 'Doe');
  await page.fill('input[name="company"]', 'Rat Inc.');
  await page.fill('input[name="address1"]', '123 Rat Street');
  await page.fill('input[name="address2"]', 'Apt 4B');
  await page.selectOption('select[name="country"]', 'Canada');
  await page.fill('input[name="state"]', 'Ratland');
  await page.fill('input[name="city"]', 'Rat City');
  await page.fill('input[name="zipcode"]', '12345');
  await page.fill('input[name="mobile_number"]', '1234567890');
  await page.click('button:has-text("Create Account")');

  await page.locator('text=/account created/i');
  await page.getByRole('link', { name: 'Continue' }).click();
  
  await page.getByRole('link', { name: 'Delete Account' }).click();

});
