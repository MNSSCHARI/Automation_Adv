import {test,expect} from "@playwright/test"
import { text } from "stream/consumers";

test.describe("Basics of Automation", ()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://www.automationexercise.com/');

    })


    test('xapth-customized/relative',async({page})=>{

        // await page.goto(BASE_URL);
        const allcontext= await page.locator("//a[@data-product-id='1']/ancestor::div[@class='features_items']").allTextContents();
        await page.locator('(//div[@title="OnlineTypingWork"])[1]').click();
        console.log(allcontext);

    });

    test('xpath-functions&keywords', async({page})=>{
        // await page.goto(BASE_URL);
        const blue_top = page.locator('(//a[@data-product-id="1"]/ancestor::div[@class="single-products"])[1]');
        await expect(blue_top).toBeVisible();

    });

    test('playwright_default_locators', async({page})=>{
        // await page.goto(BASE_URL);
        await page.getByRole('button', { name: 'Test Cases' }).click();
        await page.getByText('Below is the list of test').click();
        await page.getByAltText('Website for practice automation').click();
        await page.getByPlaceholder('Your email address').fill('srinivas.machavaram@gmail.com')
        // await page.waitForTimeout(3000);
        await page.goBack();
        // await page.getByTitle('OnlineTypingWork').click();

    });



})