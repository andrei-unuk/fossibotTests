import { Locator, Page } from "@playwright/test";
import { BaseFragment } from "./baseFragment";

export class HeaderMenu extends BaseFragment {
    private readonly stationsButton: Locator;
    private readonly setsButton: Locator;
    private readonly solarPanelsButton: Locator;
    private readonly accessoriesButton: Locator

    constructor(page: Page) {
        super(page.locator('header'));

        this.stationsButton = this.mainLocator.locator('span', { hasText: 'Stacje zasilania' });
        this.setsButton = this.mainLocator.locator('span', { hasText: 'Zestawy' });
        this.solarPanelsButton = this.mainLocator.locator('span', { hasText: 'Panele słoneczne' });
        this.accessoriesButton = this.mainLocator.locator('span', { hasText: 'Akcesoria' });
    }

    /** Click on the "Stacje zasilania" button in the header menu
     */
    public async clickOnStationsButton(): Promise<void> {
        await this.stationsButton.click();
    }

    /** Click on the "Zestawy" button in the header menu
     */
    public async clickOnSetsButton(): Promise<void> {
        await this.setsButton.click();
    }

    /** Click on the "Panele słoneczne" button in the header menu
     */
    public async clickOnSolarPanelsButton(): Promise<void> {
        await this.solarPanelsButton.click();
    }

    /** Click on the "Akcesoria" button in the header menu
     */
    public async clickOnAccessoriesButton(): Promise<void> {
        await this.accessoriesButton.click();
    }

    /** Check if the "Stacje zasilania" button is visible
     * @returns true if the button is visible, false otherwise
     */
    public async isStationsButtonVisible(): Promise<boolean> {
        return await this.stationsButton.isVisible();
    }

    /** Check if the "Zestawy" button is visible
     * @returns true if the button is visible, false otherwise
     */
    public async isSetsButtonVisible(): Promise<boolean> {
        return await this.setsButton.isVisible();
    }

    /** Check if the "Panele słoneczne" button is visible
     * @returns true if the button is visible, false otherwise
     */
    public async isSolarPanelsButtonVisible(): Promise<boolean> {
        return await this.solarPanelsButton.isVisible();
    }

    /** Check if the "Akcesoria" button is visible
     * @returns true if the button is visible, false otherwise
     */
    public async isAccessoriesButtonVisible(): Promise<boolean> {
        return await this.accessoriesButton.isVisible();
    }
}