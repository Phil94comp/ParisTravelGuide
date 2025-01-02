const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

describe('homepage', function(){
    this.timeout(0)
    let driver;
    this.beforeEach(async function() {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('file:///C:/Users/Phillip/Documents/ParisTravelGuideWebsite/paristravelguide/home.html');
    })

    it('clicking the alert', async function(){
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
    })

    it('clicking the homepage', async function(){
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        await driver.findElement(By.id("home")).click();
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
    })

    it('clicking the attractions page', async function(){
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        await driver.findElement(By.id("attractions")).click();
    })

    it('clicking the trip planning sites page', async function(){
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        await driver.findElement(By.id("planning")).click();
    })

    it('clicking the transportation page', async function(){
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        await driver.findElement(By.id("transport")).click();
    })

    it('clicking the french phrases for travelers page', async function(){
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        await driver.findElement(By.id("phrases")).click();
    })

    it('clicking the other useful information page', async function(){
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        await driver.findElement(By.id("information")).click();
    })

    it('clicking the about me page', async function(){
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        await driver.findElement(By.id("about")).click();
    })

    it('clicking the link to the attractions page', async function(){
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        driver.executeScript("window.scrollBy(0,350)", "");
        await driver.sleep(2000);
        await driver.findElement(By.id("attraction")).click();
    })

    it('clicking the footer to the home page', async function(){
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        driver.executeScript("window.scrollBy(0,2150)", "");
        await driver.sleep(2000);
        await driver.findElement(By.id("homefoot")).click();
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
    })

    it('clicking the footer to the attractions page', async function(){
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        driver.executeScript("window.scrollBy(0,2150)", "");
        await driver.sleep(2000);
        await driver.findElement(By.id("attractionsfoot")).click();
    })

    it('clicking the footer to the trip planning sites page', async function(){
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        driver.executeScript("window.scrollBy(0,2150)", "");
        await driver.sleep(2000);
        await driver.findElement(By.id("planningfoot")).click();
    })

    it('clicking the footer to the transportation page', async function(){
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        driver.executeScript("window.scrollBy(0,2150)", "");
        await driver.sleep(2000);
        await driver.findElement(By.id("transportfoot")).click();
    })

    it('clicking the footer to the french phrases for travelers page', async function(){
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        driver.executeScript("window.scrollBy(0,2150)", "");
        await driver.sleep(2000);
        await driver.findElement(By.id("phrasesfoot")).click();
    })

    it('clicking the footer to the other useful information page', async function(){
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        driver.executeScript("window.scrollBy(0,2150)", "");
        await driver.sleep(2000);
        await driver.findElement(By.id("informationfoot")).click();
    })

    it('clicking the footer to the about me page', async function(){
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        driver.executeScript("window.scrollBy(0,2150)", "");
        await driver.sleep(2000);
        await driver.findElement(By.id("aboutfoot")).click();
    })

    this.afterEach(async function() {
        await driver.sleep(2000);
        await driver.quit();
    })
})