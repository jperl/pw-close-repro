const playwright = require("playwright");

let browser;
let page;

beforeAll(async () => {
  browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("google", async () => {
  await page.goto("https://google.com/");
  await new Promise(() => {});
});
