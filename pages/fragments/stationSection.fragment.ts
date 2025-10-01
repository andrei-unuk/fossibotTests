import { Locator } from "@playwright/test";
import { BaseFragment } from "./baseFragment";

export class StationSection extends BaseFragment{
    public readonly stationName: Locator;

    constructor(mainLocator: Locator) {
         super(mainLocator);

         this.stationName = this.mainLocator.locator('span.productname');
    }
}