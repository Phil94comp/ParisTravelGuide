const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function test() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('file:///C:/Users/Phillip/Documents/ParisTravelGuideWebsite_Selenium/paristravelguide/home.html');
    await driver.sleep(2000);
    driver.switchTo().alert().accept();
    await driver.sleep(2000);
    await driver.manage().window().maximize();
    await driver.sleep(2000);
    await driver.findElement(By.id("attractions")).click();
    await driver.sleep(2000);
    await driver.findElement(By.id("home")).click();
    await driver.sleep(2000);
    driver.switchTo().alert().accept();
    await driver.sleep(2000);
    driver.executeScript("window.scrollBy(0,350)", "");
    await driver.sleep(2000);
    await driver.findElement(By.id("attraction")).click();
    await driver.sleep(2000);
    await driver.quit();
})();