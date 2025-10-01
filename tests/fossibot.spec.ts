import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { StationsPage } from '../pages/stationsPage';

let mainPage: MainPage;
let stationsPage: StationsPage;


const F800_STATION_NAME: string = `FOSSiBOT F800 GREEN`;
const F1200_STATION_NAME: string = `FOSSiBOT F1200`;
const F2400_BLACK_STATION_NAME: string = `FOSSiBOT F2400 BLACK`;
const F2400_GREEN_STATION_NAME: string = `FOSSiBOT F2400 GREEN`;
const F3600_PRO_STATION_NAME: string = `FOSSiBOT F3600 Pro`;
const F3840_STATION_NAME: string = `FOSSiBOT F3840`;

test.beforeEach(async ({ page }) => {
  mainPage = new MainPage(page);
  stationsPage = new StationsPage(page);
});

test('Is cookies window presented', async () => {
  await mainPage.open(false);
  
  expect(await mainPage.cookiesWindow.isVisible(), 'Cookies window should be visible.').toBeTruthy();
});

test('Is cookies window has Accept All button', async () => {
  await mainPage.open(false);

  await mainPage.cookiesWindow.checkThatAcceptAllButtonPresented();
});

test('Is cookies window has Accept Mandatory button', async () => {
  await mainPage.open(false);

  await mainPage.cookiesWindow.checkThatAcceptMandatoryButtonPresented();
});

test('Is cookies window has Check Agrrements button', async () => {
  await mainPage.open(false);

  await mainPage.cookiesWindow.checkThatCheckAgreementsButtonPresented();
});

test('Is cookies window has been closed', async () => {
  await mainPage.open(false);
  await mainPage.cookiesWindow.clickOnAcceptAllCookies();

  await mainPage.cookiesWindow.checkThatClosed();
});

test(`Check if stations button in header menu visible`, async () => {
  await mainPage.open();

  expect(await mainPage.headerMenu.isStationsButtonVisible(), `"Stacje zasilania" button should be visible`).toBeTruthy();
});

test(`Check if sets button in header menu visible`, async () => {
  await mainPage.open();

  expect(await mainPage.headerMenu.isSetsButtonVisible(), `"Zestawy" button should be visible`).toBeTruthy();
});

test(`Check if solar panels button in header menu visible`, async () => {
  await mainPage.open();

  expect(await mainPage.headerMenu.isSolarPanelsButtonVisible(), `"Panele słoneczne" button should be visible`).toBeTruthy();
});

test(`Check if accessories button in header menu visible`, async () => {
  await mainPage.open();

  expect(await mainPage.headerMenu.isAccessoriesButtonVisible(), `"Akcesoria" button should be visible`).toBeTruthy();
});

test(`Check if ${F800_STATION_NAME} presented`, async () => {
  
  await mainPage.open();
  await mainPage.headerMenu.clickOnStationsButton();

  expect((await stationsPage.getStationSection(F800_STATION_NAME)).isVisible(), `"${F800_STATION_NAME}" station should be presented.`).toBeTruthy();
});

test(`Check if ${F1200_STATION_NAME} presented`, async () => {
  
  await mainPage.open();
  await mainPage.headerMenu.clickOnStationsButton();

  expect((await stationsPage.getStationSection(F1200_STATION_NAME)).isVisible(), `"${F1200_STATION_NAME}" station should be presented.`).toBeTruthy();
});

test(`Check if ${F2400_BLACK_STATION_NAME} presented`, async () => {
  
  await mainPage.open();
  await mainPage.headerMenu.clickOnStationsButton();

  expect((await stationsPage.getStationSection(F2400_BLACK_STATION_NAME)).isVisible(), `"${F2400_BLACK_STATION_NAME}" station should be presented.`).toBeTruthy();
});

test(`Check if ${F2400_GREEN_STATION_NAME} presented`, async () => {
  
  await mainPage.open();
  await mainPage.headerMenu.clickOnStationsButton();

  expect((await stationsPage.getStationSection(F2400_GREEN_STATION_NAME)).isVisible(), `"${F2400_GREEN_STATION_NAME}" station should be presented.`).toBeTruthy();
});

test(`Check if ${F3600_PRO_STATION_NAME} presented`, async () => {
  
  await mainPage.open();
  await mainPage.headerMenu.clickOnStationsButton();

  expect((await stationsPage.getStationSection(F3600_PRO_STATION_NAME)).isVisible(), `"${F3600_PRO_STATION_NAME}" station should be presented.`).toBeTruthy();
});

test(`Check if ${F3840_STATION_NAME} presented`, async () => {
  
  await mainPage.open();
  await mainPage.headerMenu.clickOnStationsButton();

  expect((await stationsPage.getStationSection(F3840_STATION_NAME)).isVisible(), `"${F3840_STATION_NAME}" station should be presented.`).toBeTruthy();
});
