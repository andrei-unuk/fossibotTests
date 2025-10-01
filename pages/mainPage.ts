import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { URLs } from "../data/constants/urls" 
import { CookiesWindow } from "./fragments/cookiesWindow.fragment";

export class MainPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    public async open(skipCookies: boolean = true): Promise<void> {
        await this.page.goto(URLs.mainPageUrl);

        if (skipCookies && await this.cookiesWindow.isVisible()) {
            await this.cookiesWindow.clickOnAcceptAllCookies();
        }
    }

    public get cookiesWindow(): CookiesWindow {
        return new CookiesWindow(this.page);
    }
}