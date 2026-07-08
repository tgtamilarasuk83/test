/*/*
    Reusable action methods all over the project....
*/

import { expect, Locator, Page, Download } from "@playwright/test";

export class BasePage {
    protected page: Page;

   
    constructor(page: Page) {
        this.page = page;
    }



    // Fill inside the input field
    async fill(locator: Locator, value: string) {
        await locator.isVisible();
        await locator.fill(value);
    }

    // Click the locator
    async click(locator: Locator) {
        await locator.isEnabled();
        await locator.click();
    }

    // GetText from the locator
    async getText(locator: Locator) {
        await locator.isVisible();
        return await locator.textContent();
    }

    async checkTheBox(locator: Locator) {
        await locator.isVisible();
        await locator.check();
    }


    // Return the innerText
    async getInnerText(locator: Locator) {
        await locator.isVisible();
        return await locator.innerText();
    }


}