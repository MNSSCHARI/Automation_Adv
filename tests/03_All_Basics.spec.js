import {test,expect} from '@playwright/test'

test.describe('Alrets,Popups,Frames,MouseandKeyboard', ()=>{
    
    test.beforeEach('Excecute1st',async({page})=>{
        await page.goto('https://demo.automationtesting.in/');
        console.log('Navigated to Automation demo site')
        await page.locator('#btn2').click();
        await page.waitForTimeout(3000);
        await page.locator("(//a)[contains(text(),'SwitchTo')]").click();
        await page.waitForTimeout(3000);
        await page.locator("[href='Alerts.html']").click();
    })

    test('Normal_Alert', async({page})=>{
        await page.locator('[onclick="alertbox()"]').click();
        page.on('dialog', async dialog=>{
            console.log(dialog.message());
            dialog.accept();
        })
    })

    test('Confirmation_Alert', async({page})=>{
        await page.locator('[href="#CancelTab"]').click();
        await page.locator('[onclick="confirmbox()"]').click();
        page.on('dialog', async dialog=>{
            console.log(dialog.message());
            // dialog.accept();
            dialog.dismiss();
        })
    })

    test('Editable_Alert', async({page})=>{
        await page.locator('[href="#Textbox"]').click();
        await page.locator('[onclick="promptbox()"]').click();
        page.on('dialog', async dialog=>{
            console.log(dialog.message());
            dialog.accept('This is a edit text box alert');
            // dialog.dismiss();
        })
    })
        


})