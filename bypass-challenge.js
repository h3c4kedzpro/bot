const puppeteer = require("puppeteer");

        (async () => {
            const url = process.argv[2];
            const proxy = process.argv[3];
            const browser = await puppeteer.launch({
                args: ['--proxy-server=http://' + proxy],
                headless: true
            });

            const page = await browser.newPage();
            try {
                await page.goto(url, { waitUntil: "domcontentloaded" });
            } catch (e) {}
            await browser.close();
        })();