const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

describe('attractions', function(){
    this.timeout(0)
    let driver;
    this.beforeEach(async function() {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('file:///C:/Users/Phillip/Documents/ParisTravelGuideWebsite/paristravelguide/attractions.html');
    })

    it('clicking the homepage', async function(){
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        await driver.findElement(By.id("home")).click();
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
    })

    it('clicking the attractions page', async function(){
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        await driver.findElement(By.id("attractions")).click();
    })

    it('clicking the trip planning sites page', async function(){
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        await driver.findElement(By.id("planning")).click();
    })

    it('clicking the transportation page', async function(){
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        await driver.findElement(By.id("transport")).click();
    })

    it('clicking the french phrases for travelers page', async function(){
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        await driver.findElement(By.id("phrases")).click();
    })

    it('clicking the other useful information page', async function(){
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        await driver.findElement(By.id("information")).click();
    })

    it('clicking the about me page', async function(){
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        await driver.findElement(By.id("about")).click();
    })

    it('clicking the link to the louvre homepage', async function(){
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        await driver.findElement(By.id("louvre")).click();
        await driver.sleep(2000);
        await driver.findElement(By.className("Bouton_label")).click();
    })

    it.only('clicking the link to the army museum homepage', async function(){
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        driver.executeScript("window.scrollBy(0,1550)", "");
        await driver.sleep(2000);
        await driver.findElement(By.id("military")).click();
        await driver.sleep(2000);
        driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[5]/div[2]/a[3]")).click();
    })

    it('clicking the link to the transportation page', async function(){
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        driver.executeScript("window.scrollBy(0,2550)", "");
        await driver.sleep(2000);
        await driver.findElement(By.id("transportation")).click();
    })

    it('clicking the footer to the homepage', async function(){
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        driver.executeScript("window.scrollBy(0,2950)", "");
        await driver.sleep(2000);
        await driver.findElement(By.id("homefoot")).click();
        await driver.sleep(2000);
        driver.switchTo().alert().accept();
    })

    it('clicking the footer to the attractions page', async function(){
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        driver.executeScript("window.scrollBy(0,2950)", "");
        await driver.sleep(2000);
        await driver.findElement(By.id("attractionsfoot")).click();
    })

    it('clicking the footer to the trip planning sites page', async function(){
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        driver.executeScript("window.scrollBy(0,2950)", "");
        await driver.sleep(2000);
        await driver.findElement(By.id("planningfoot")).click();
    })

    it('clicking the footer to the transportation page', async function(){
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        driver.executeScript("window.scrollBy(0,2950)", "");
        await driver.sleep(2000);
        await driver.findElement(By.id("transportfoot")).click();
    })

    it('clicking the footer to the french phrases for travelers page', async function(){
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        driver.executeScript("window.scrollBy(0,2950)", "");
        await driver.sleep(2000);
        await driver.findElement(By.id("phrasesfoot")).click();
    })

    it('clicking the footer to the other useful information page', async function(){
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        driver.executeScript("window.scrollBy(0,2950)", "");
        await driver.sleep(2000);
        await driver.findElement(By.id("informationfoot")).click();
    })

    it('clicking the footer to the about me page', async function(){
        await driver.sleep(2000);
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        driver.executeScript("window.scrollBy(0,2950)", "");
        await driver.sleep(2000);
        await driver.findElement(By.id("aboutfoot")).click();
    })

    this.afterEach(async function() {
        await driver.sleep(2000);
        await driver.quit();
    })
})