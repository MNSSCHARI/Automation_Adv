import {test,expect} from '@playwright/test'

test.describe('tests for css', ()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://www.staging.airtable.com/')
    })

    test('unique_elements', async({page})=>{
        await page.locator('.ActionButton-module_mediumAndUpText__3D7uw').click();
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
        const elemnt_sc= await page.locator("[class='BkText_typeShortMl__ODfcA BkText_bkText__NcDVw BkText_medium__N04Bo CTASectionHeadline_heading__ZZMJa default']");
        elemnt_sc.scrollIntoViewIfNeeded();
        elemnt_sc.screenshot({path:'scroll_elemrnt_sc'});

    })

})