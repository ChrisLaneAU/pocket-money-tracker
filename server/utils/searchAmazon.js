const puppeteer = require("puppeteer");

exports.amazonSearch = terms => {
  try {
    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 600 });
      await page.goto("https://www.amazon.com.au");
      await page.type("#twotabsearchtextbox", terms);
      await page.click("input.nav-input");
      await page.waitForSelector(".s-image");

      const images = await page.$$eval(".s-image", imgs => {
        return imgs.map(img => img.src).slice(0, 3);
      });
      const names = await page.$$eval("span.a-size-medium", titles => {
        return titles.map(title => title.textContent).slice(0, 3);
      });
      const prices = await page.$$eval("span.a-offscreen", costs => {
        return costs
          .map(cost => cost.textContent.slice(1, cost.textContent.indexOf(".")))
          .slice(0, 3);
      });
      const allGoals = await images.map((image, index) => {
        return { image, name: names[index], price: prices[index] };
      });

      await browser.close();
      return allGoals;
    })();
  } catch (err) {
    console.error(err);
  }
};
