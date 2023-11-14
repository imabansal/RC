import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RC extends Page {
    /**
     * define selectors using getter methods
     */
    get currentAge () {
        return $('#current-age');
    }

    get retirementAge () {
        return $('#retirement-age');
    }

    get currentIncome () {
        return $('#current-income');
    }

    get currentTotalSavings () {
        return $('#current-total-savings');
    }

    get currentAnnualSavings () {
        return $('#current-annual-savings');
    }

    get savingsIncreaseRate () {
        return $('#savings-increase-rate');
    }

    get yesSocialBenefits () {
        return $("//label[@for='yes-social-benefits']");
    }

    get yesMarried () {
        return $("//label[@for='married']");
    }

    get Calculate () {
        return $("//button[normalize-space()='Calculate']");
    }

    get Results (){
        return $("//*[@id='calculator-results-container']/h3");
    }


    


    /**
     * a method to encapsule automation code to interact with the page
     */

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('https://www.securian.com/insights-tools/retirement-calculator.html');
    }
}

export default new RC();
