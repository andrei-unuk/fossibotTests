import { expect, Locator, Page } from "@playwright/test";
import { BaseFragment } from "./baseFragment";

export class CookiesWindow extends BaseFragment {
    private readonly acceptAllButton: Locator;
    private readonly acceptMandatoryButton: Locator;
    private readonly checkAgreementsButton: Locator;

    constructor(page: Page) {
        super(page.locator('div.consents > div', {has: page.locator('div[aria-labelledby=customer_privacy_banner_header]')}));

        this.acceptAllButton = this.mainLocator.getByRole('button', {name: 'Zaakceptuj wszystkie'});
        this.acceptMandatoryButton = this.mainLocator.getByRole('button', {name: 'Zaakceptuj tylko niezbędne'});
        this.checkAgreementsButton = this.mainLocator.getByRole('button', {name: 'Dostosuj zgody'});
    }

    /** Click on the "Zaakceptuj wszystkie" button in the cookies window
     */
    public async clickOnAcceptAllCookies(): Promise<void> {
        await this.acceptAllButton.click();
    }

    /** Click on the "Zaakceptuj tylko niezbędne" button in the cookies window
     */
    public async clickOnAcceptMandatoryCookies(): Promise<void> {
        await this.acceptMandatoryButton.click();
    }

    /** Click on the "Dostosuj zgody" button in the cookies window
     */
    public async clickOnCheckAgreementsButton(): Promise<void> {
        await this.checkAgreementsButton.click();
    }

    /** Check that the cookies window is visible
     */
    public async checkThatIsVisible(): Promise<void> {
        await expect.soft(this.mainLocator, `Cookies window should be presented.`).toBeVisible();
    }

    /** Check that the "Zaakceptuj wszystkie" button is visible
     */
    public async checkThatAcceptAllButtonPresented(): Promise<void> {
        await expect.soft(this.acceptAllButton, `"Zaakceptuj wszystkie" button should be visible`).toBeVisible();
    }

    /** Check that the "Zaakceptuj tylko niezbędne" button is visible
     */
    public async checkThatAcceptMandatoryButtonPresented(): Promise<void> {
        await expect.soft(this.acceptMandatoryButton, `"Zaakceptuj tylko niezbędne" button should be visible`).toBeVisible();
    }

    /** Check that the "Dostosuj zgody" button is visible
     */
    public async checkThatCheckAgreementsButtonPresented(): Promise<void> {
        await expect.soft(this.checkAgreementsButton, `"Dostosuj zgody" button should be visible`).toBeVisible();
    }

    /** Check that the cookies window is closed
     */
    public async checkThatClosed(): Promise<void> {
        await expect.soft(this.mainLocator, `Cookies window should be closed.`).toBeHidden();
    }
}