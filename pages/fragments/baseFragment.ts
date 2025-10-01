import { Locator } from "@playwright/test";

export abstract class BaseFragment {
    constructor(protected readonly mainLocator: Locator) {
    }

    public async isVisible(): Promise<boolean> {
        const locators: Locator[] = await this.mainLocator.all();
        if (locators.length != 0) {
            return await locators[0].isVisible();
        }
        
        return false;
    }  
}