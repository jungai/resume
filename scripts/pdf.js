const { chromium } = require("playwright");

let browser = null;

(async () => {
  try {
    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.pdf({
      path: "woraphol_wananiyakul.pdf",
      format: "A4",
      printBackground: true,
    });
  } catch (error) {
    throw new Error(error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();
