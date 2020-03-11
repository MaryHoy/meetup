import puppeteer from 'puppeteer';
import { mockEvents } from '../mock-events';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 250 // slow down by 250ms
      });    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.Event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const extra = await page.$('.Event .extra');
    expect(extra).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.Event .details-btn');

    const extra = await page.$('.Event .extra');
    expect(extra).toBeDefined();
  });

  test('user can collapse an event to hide its details', async () => {
    await page.click('.events .detail-btn');
    const eventDetails = await page.$('.events .eventDetails');
    expect(eventDetails).toBeNull();
  })

describe('Filter events by city', () => {
  let browser;
  let page;
  beforeAll(async () => {
      browser = await puppeteer.launch();
      page = await browser.newPage();
      await page.goto('http://localhost:3000');
      await page.waitForSelector('.suggestions');
  });

  afterAll(() => {
    browser.close();
  });

  test('By default, when user hasn\'t searched for a city, show upcoming events based on the user\'s location.', async () => {
    const events = await page.$('.events');
    expect(events).toBeDefined();
  });


  test('User should see a list of suggestions when they search for a city.', async () => {
    const suggestions = await page.$('.suggestions');
    expect(suggestions).toBeDefined();
  });

  test('User can select a city from the suggested list.', async () => {
    const suggestions = await page.$('.suggestions');
    expect(suggestions).toBeDefined();
    expect('.city').toBeDefined();
  });
});
});