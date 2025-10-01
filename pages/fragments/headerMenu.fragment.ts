import { Locator, Page } from "@playwright/test";
import { BaseFragment } from "./baseFragment";

export class HeaderMenu extends BaseFragment {
    public readonly stationsButton: Locator;

    constructor(page: Page) {
        super(page.locator('header'));

        this.stationsButton = this.mainLocator.locator('span', { hasText: 'Stacje zasilania' });
    }

    public async clickOnStationsButton(): Promise<void> {
        await this.stationsButton.click();
    }
}