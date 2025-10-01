import { expect, test } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { StationsPage } from '../pages/stationsPage';

let mainPage: MainPage;
let stationsPage: StationsPage;

test.beforeEach(async ({ page }) => {
  mainPage = new MainPage(page);
  stationsPage = new StationsPage(page);
});

test('Is cookies window presented', async () => {
  await mainPage.open(false);
  
  expect(await mainPage.cookiesWindow.isVisible()).toBeTruthy();
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

test(`Check if FOSSiBOT F1200 presented`, async () => {
  const stationName: string = `FOSSiBOT F1200`;
  
  await mainPage.open();
  await mainPage.headerMenu.clickOnStationsButton();

  expect((await stationsPage.getStationSection(stationName)).isVisible()).toBeTruthy();
});
