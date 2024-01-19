import {test,expect, chromium} from '@playwright/test'

test('Salesforce login', async () =>
{
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");
    await page.waitForLoadState('domcontentloaded');
    await page.locator("input#username").pressSequentially('vinayak@salesforce.com',{delay:100});
    await page.locator("input#password").pressSequentially('topgun55$$',{delay:100});
    await page.locator("input#Login").click();
    const pageUrl =  page.url();
    //expect(pageUrl).toContainEqual("https://login.salesforce.com/");// Failing even though received url is same as expected url
    expect(pageUrl).toContain("https://login.salesforce.com/");
    
})
