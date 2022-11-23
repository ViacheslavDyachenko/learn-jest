const timeout = 300000

describe(
  '/ (Home Page)',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER_GLOBAL__.newPage()
      page.setDefaultNavigationTimeout( 90000 );
      await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36');
      await page.goto('http://localhost:4000', { 'waitUntil' : 'domcontentloaded' });
    }, timeout)


    it('should load without error', async () => {
      await page.waitForNavigation({waitUntil: "domcontentloaded"});
      const allResultsSelector = '#header-main > div > div > div > nav > ul > li:nth-child(3) > a';
      await page.waitForSelector(allResultsSelector);
      const nav = await page.$(allResultsSelector);
      console.log(nav);
      nav.click();

      await page.waitForNavigation({waitUntil: "domcontentloaded"});

      const allResultsButton = '#stuffList > div.Row_row__3iWCB.wrapper.Row_pdAll__3ntyH > div > div > div:nth-child(1) > div > div.StaffCardShort_bottom__3lU-x > button';
      setInterval(async () => {
        console.log(await page.evaluate(() => window.location.href));
      }, 1000)
      await page.waitForSelector(allResultsButton);
      await page.click(allResultsButton);

      await page.waitForNavigation({waitUntil: "domcontentloaded"});

      const resultsSkills = 'body > div.ReactModalPortal > div > div > div > div > div > div > div.Col_col__giDe5.Col_col-12__2FpMT.StaffCardLong_container__left__3WuD7 > div > div.StaffCardLong_imgBlock__1bb4i > div.StaffCardLong_list__2cSiD > span:nth-child(1)';
      await page.waitForSelector(resultsSkills);

      const links = await page.evaluate(resultsSkills => {
        return [...document.querySelectorAll(resultsSkills)].map(anchor => {
          const title = anchor.textContent;
          return `${title}`;
        });
      }, resultsSkills);
    
      // Print all the files.
      console.log(links.join('\n'));
      expect(links).toContain('Настройка CI/CD');
      await page.close()
    }, timeout)
  },
  timeout
)