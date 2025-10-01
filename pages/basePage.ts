import { Page } from "@playwright/test";
import { HeaderMenu } from "./fragments/headerMenu.fragment";

export abstract class BasePage {
    constructor(protected readonly page: Page) {}

    public get headerMenu(): HeaderMenu {
        return new HeaderMenu(this.page);
    }
}