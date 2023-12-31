import RC from '../pageobjects/retirement.calculator.page.js'
describe('Retirement-Calculator', () =>{
    
    it('Scenario 1:', async () => {
        //browser.url('https://www.securian.com/insights-tools/retirement-calculator.html')
        await RC.open()
        await RC.currentAge.scrollIntoView({ block: 'center', inline: 'center' })
        await RC.currentAge.setValue("40")
        browser.pause(3000)
        await RC.retirementAge.scrollIntoView({ block: 'center', inline: 'center' })
        await RC.retirementAge.setValue("68")
        browser.pause(3000)
        await RC.currentIncome.scrollIntoView({ block: 'center', inline: 'center' })
        await RC.currentIncome.setValue("100000")
        browser.pause(3000)
        await RC.currentTotalSavings.scrollIntoView({ block: 'center', inline: 'center' })
        await RC.currentTotalSavings.setValue("500000")
        browser.pause(3000)
        await RC.currentAnnualSavings.scrollIntoView({ block: 'center', inline: 'center' })
        await RC.currentAnnualSavings.setValue("10")
        browser.pause(3000)
        await RC.savingsIncreaseRate.scrollIntoView({ block: 'center', inline: 'center' })
        await RC.savingsIncreaseRate.setValue("1")
        browser.pause(3000)
        await RC.yesSocialBenefits.scrollIntoView({ block: 'center', inline: 'center' })
        await RC.yesSocialBenefits.click()
        browser.pause(3000)
        await RC.yesMarried.click()
        browser.pause(3000)
        await RC.Calculate.scrollIntoView({ block: 'center', inline: 'center' })
        await RC.Calculate.click()
        browser.pause(3000)
        const resultsElm = await RC.Results
        await expect(resultsElm).toHaveText('Results')
        browser.pause(3000)

    })

    it('Scenario-2-4:', async () => {
        browser.url('https://www.securian.com/insights-tools/retirement-calculator.html')
        await $('#current-age').scrollIntoView({ block: 'center', inline: 'center' })
        await $('#current-age').setValue("40")
        browser.pause(3000)
        await $('#retirement-age').scrollIntoView({ block: 'center', inline: 'center' })
        await $('#retirement-age').setValue("68")
        browser.pause(3000)
        await $('#current-income').scrollIntoView({ block: 'center', inline: 'center' })
        await $('#current-income').setValue("100000")
        browser.pause(3000)
        await $('#spouse-income').scrollIntoView({ block: 'center', inline: 'center' })
        await $('#spouse-income').setValue("75000")
        browser.pause(3000)
        await $('#current-total-savings').scrollIntoView({ block: 'center', inline: 'center' })
        await $('#current-total-savings').setValue("500000")
        browser.pause(3000)
        await $('#current-annual-savings').scrollIntoView({ block: 'center', inline: 'center' })
        await $('#current-annual-savings').setValue("10")
        browser.pause(3000)
        await $('#savings-increase-rate').scrollIntoView({ block: 'center', inline: 'center' })
        await $('#savings-increase-rate').setValue("1")
        browser.pause(3000)
        await $("//label[@for='yes-social-benefits']").scrollIntoView({ block: 'center', inline: 'center' })
        await $("//label[@for='yes-social-benefits']").click()
        browser.pause(3000)
        await $("//label[@for='no-social-benefits']").scrollIntoView({ block: 'center', inline: 'center' })
        await $("//label[@for='no-social-benefits']").click()
        browser.pause(3000)
        await $("//label[@for='yes-social-benefits']").scrollIntoView({ block: 'center', inline: 'center' })
        await $("//label[@for='yes-social-benefits']").click()
        browser.pause(3000)
        await $("//label[@for='married']").click()
        browser.pause(3000)
        await $("#social-security-override").scrollIntoView({ block: 'center', inline: 'center' })
        await $("#social-security-override").setValue(4000)
        browser.pause(3000)
        await $("//a[normalize-space()='Adjust default values']").scrollIntoView({ block: 'center', inline: 'center' })
        await $("//a[normalize-space()='Adjust default values']").click()
        browser.pause(3000)
        await $("#additional-income").setValue(500)
        await $("#retirement-duration").setValue(20)
        await browser.scroll(0, 400)
        await browser.pause(3000)
        //await(await $("input[name='inflation-inclusion']")).click()
        await $("//*[@id='include-inflation-container']/ul/li[1]/label").click()
        browser.pause(3000)
        //console.log("clicked on yes on post-retirement income increase with inflation")
        //await $("#expected-inflation-rate").scrollIntoView({ block: 'center', inline: 'center' })
        await $("#expected-inflation-rate").setValue(3)
        browser.pause(3000)
        //await $("#retirement-annual-income").scrollIntoView({ block: 'center', inline: 'center' })
        await $("#retirement-annual-income").setValue(75)
        browser.pause(3000)
        //await $("#pre-retirement-roi").scrollIntoView({ block: 'center', inline: 'center' })
        await $("#pre-retirement-roi").setValue(8)
        browser.pause(3000)
        //await $("#post-retirement-roi").scrollIntoView({ block: 'center', inline: 'center' })
        await $("#post-retirement-roi").setValue(5)
        browser.pause(3000)
        await $("//button[normalize-space()='Save changes']").click()
        browser.pause(3000)
        await $("//button[normalize-space()='Calculate']").click()
        browser.pause(3000)
        const resultsElm = await RC.Results
        await expect(resultsElm).toHaveText('Results')
        browser.pause(3000)
    })

})
