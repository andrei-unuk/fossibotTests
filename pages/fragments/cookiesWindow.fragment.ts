import { expect, Locator, Page } from "@playwright/test";
import { BaseFragment } from "./baseFragment";

export class CookiesWindow extends BaseFragment {
    public readonly acceptAllButton: Locator;
    public readonly acceptMandatoryButton: Locator;
    public readonly checkAgreementsButton: Locator;

    constructor(page: Page) {
        super(page.locator('div.consents > div', {has: page.locator('div[aria-labelledby=customer_privacy_banner_header]')}));

        this.acceptAllButton = this.mainLocator.getByRole('button', {name: 'Zaakceptuj wszystkie'});
        this.acceptMandatoryButton = this.mainLocator.getByRole('button', {name: 'Zaakceptuj tylko niezbędne'});
        this.checkAgreementsButton = this.mainLocator.getByRole('button', {name: 'Dostosuj zgody'});
    }

    public async clickOnAcceptAllCookies(): Promise<void> {
        await this.acceptAllButton.click();
    }

    public async clickOnAcceptMandatoryCookies(): Promise<void> {
        await this.acceptMandatoryButton.click();
    }

    public async clickOnCheckAgreementsButton(): Promise<void> {
        await this.checkAgreementsButton.click();
    }

    public async checkThatAcceptAllButtonPresented(): Promise<void> {
        await expect.soft(this.acceptAllButton).toBeVisible();
    }

    public async checkThatAcceptMandatoryButtonPresented(): Promise<void> {
        await expect.soft(this.acceptMandatoryButton).toBeVisible();
    }

    public async checkThatCheckAgreementsButtonPresented(): Promise<void> {
        await expect.soft(this.checkAgreementsButton).toBeVisible();
    }

    public async checkThatClosed(): Promise<void> {
        await expect.soft(this.mainLocator).toBeHidden();
    }
}