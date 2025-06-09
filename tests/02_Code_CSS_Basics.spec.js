import {test,expect} from '@playwright/test'

test.describe('tests for css', ()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://www.staging.airtable.com/')
    })

    test('unique_elements', async({page})=>{
        await page.locator('.ActionButton-module_mediumAndUpText__3D7uw').click();
        await page.waitForTimeout(3000);
        await page.goBack();
        await page.waitForTimeout(3000);
        await page.getByTestId('next-slide-button').click();

    })

    test('fullpage_screenshot', async({page})=>{
        await page.waitForTimeout(3000);
        await page.screenshot({path:'sc1.png',fullPage:true});

    })

    test('viewport_screenshot', async({page})=>{
        await page.waitForTimeout(3000);
        await page.screenshot({path:'viewport_sc2.png'});

    })

    test('element_scroll_screenshot', async({page})=>{
        await page.waitForTimeout(3000);
        const elemnt_sc= page.locator("//h2[text()='500,000+ organizations use Airtable every day. Join them.']");
        await page.waitForLoadState('networkidle');
        await elemnt_sc.scrollIntoViewIfNeeded();
        await elemnt_sc.screenshot({path:'new_sc4.png'});
    })

})