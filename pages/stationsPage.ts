import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { StationSection } from "./fragments/stationSection.fragment";

export class StationsPage extends BasePage {
    private readonly stationSectionLocator: Locator;

    constructor(page: Page) {
        super(page);

        this.stationSectionLocator = this.page.locator('div.products > div');
    }

    public async getStationSection(stationName: string): Promise<StationSection> {
        return new StationSection(this.stationSectionLocator.filter({hasText: stationName}).first());
    }
}