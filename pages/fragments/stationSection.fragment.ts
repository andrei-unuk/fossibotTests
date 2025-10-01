import { Locator } from "@playwright/test";
import { BaseFragment } from "./baseFragment";

export class StationSection extends BaseFragment{
    private readonly stationName: Locator;

    constructor(mainLocator: Locator) {
         super(mainLocator);

         this.stationName = this.mainLocator.locator('span.productname');
    }

    /** Get the station name from the section
     * @returns station name as a string
     */
    public async getStationName(): Promise<string> {
        return await this.stationName.textContent() ?? '';
    }
}