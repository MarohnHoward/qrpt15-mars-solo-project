import { By, until, WebDriver } from "selenium-webdriver";
import { BasePage  } from "./basePage";
const fs = require('fs');

export class metPage extends BasePage {
    
    planVisitLink: By = By.xpath('//a[@class="button secondary video-banner_button__Hgot1"]');
    buyTickets: By = By.xpath('//a[@class="primary button link_button__JayI0"]');
    fifthAve: By = By.xpath('//p[text()="The Met Fifth Avenue"]');
    anotherDate: By = By.xpath('(//input[@name="selectDate"])[3]');
    july26: By = By.xpath('(//span[text()="26"])[1]');
    plusAdultBtn: By = By.xpath('(//span[text()="increase"])[1]');
    plusChildBtn: By = By.xpath('(//span[text()="increase"])[2]');
    addToCart: By = By.xpath('//button[text()="Add To Cart"]');
    checkoutBtn: By = By.xpath('(//a[text()="Checkout"])[2]');
    emailBox: By = By.xpath('//input[@id="MetMuseumGuestLoginRequest_Email"]');
    confirmEmailBox: By = By.xpath('//input[@id="MetMuseumGuestLoginRequest_ConfirmEmail"]');
    firstName: By = By.xpath('//input[@name="MetMuseumGuestLoginRequest.FirstName"]');
    lastName: By = By.xpath('//input[@name="MetMuseumGuestLoginRequest_LastName"]');
    continueGuest: By = By.xpath('//button[text()="Continue as guest"]');
    artLink: By = By.xpath('//a[text()="Art"]');
    metCollection: By = By.xpath('//a[text()="The Met Collection"]');
    egyptianArt: By = By.xpath('//span[text()="Egyptian Art"]'); 
    egyptianImage1: By = By.xpath('(//img[@class="collection-object_image__XVQPm collection-object_gridView__8kZLF"])[1]');
    egyptianImage2: By = By.xpath('(//img[@class="collection-object_image__XVQPm collection-object_gridView__8kZLF"])[2]');
    egyptianImage3: By = By.xpath('(//img[@class="collection-object_image__XVQPm collection-object_gridView__8kZLF"])[3]');
    egyptianImage4: By = By.xpath('(//img[@class="collection-object_image__XVQPm collection-object_gridView__8kZLF"])[4]');
    egyptianImage5: By = By.xpath('(//img[@class="collection-object_image__XVQPm collection-object_gridView__8kZLF"])[5]');
    button2: By = By.xpath('//button[text()="2"]');
    button3: By = By.xpath('//button[text()="3"]'); 
    button4: By = By.xpath('//button[text()="4"]'); 
    button5: By = By.xpath('//button[text()="5"]'); 
    button6: By = By.xpath('//button[text()="6"]');  
    magicWandImage: By = By.xpath('(//div[@class="collection-object_imageWrapper__dUMo_"])[30]');
    downloadBtn: By = By.xpath('//a[@class="gtm__download__image"]');
    shopLink: By = By.xpath('//a[@class="nav-main__link nav-main__link--primary nav-main__link--external"]');
    giftGuideLink: By = By.xpath('(//a[@class="jq-head level-top clickable"])[7]');
    recommended: By = By.xpath('//h2[text()="Recommended for You"]');
    quickView1: By = By.xpath('(//a[@class="qv-link"])[7]');
    quickView2: By = By.xpath('(//a[@class="qv-link"])[8]');
    quickView3: By = By.xpath('(//a[@class="qv-link"])[9]');
    quickView4: By = By.xpath('(//a[@class="qv-link"])[10]');
    xButton: By = By.xpath('(//a[@class="qv-close"])[1]'); 
   // giftsForKids: By = By.xpath('//h3[text()="Gifts for Kids"]');
    giftsForKids: By = By.xpath('(//a[@class="hero-cta-primary"])[4]'); 
    ages911: By = By.xpath('(//p[@class="body-copy-short underline-text"])[4]');
    mapPuzzle: By = By.xpath('//a[text()="Magnetic World Map Puzzle"]');
    plusBtn: By = By.xpath('//a[@class="plus"]');
    minusBtn: By = By.xpath('//a[@class="minus"]');
    addToBagButton: By = By.xpath('//button[@class="action primary tocart "]');
    shoppingBag: By = By.xpath('//span[@class="counter-number"]');
    shopCheckoutBtn: By = By.xpath('(//button[@class="checkout-btn action apply primary"])[1]');
    shopGuestEmail: By = By.xpath('//input[@name="guest-email"]');
    finalCheckout: By = By.xpath('//button[@name="send3"]');
    exhibitionsAndEvents: By = By.xpath('//a[text()="Exhibitions and Events"]');
    exhibitions: By = By.xpath('//a[text()="Exhibitions"]');
    hiddenFaces: By = By.xpath('//span[text()="Hidden Faces: Covered Portraits of the Renaissance"]');
    theHarlem: By = By.xpath('//span[text()="The Harlem Renaissance and Transatlantic Modernism"]');
    sleepingBeauties: By = By.xpath('//span[text()="Sleeping Beauties: Reawakening Fashion"]');
    collectingInspiration: By = By.xpath('//span[text()="Collecting Inspiration: Edward C. Moore at Tiffany & Co."]');
    planVisitBottom: By = By.xpath('//h2[text()="Plan Your Visit"]');
    allExhibitions: By = By.xpath('(//a[text()="All exhibitions"])[1]'); 
    learnWithUs: By = By.xpath('(//a[@class="nav-main__link nav-main__link--primary nav-main__link--parent"])[4]');
    learningResources: By = By.xpath('//a[text()="Learning Resources"]');
    kidsAndFamilies: By = By.xpath('(//a[@class="js-jump-link jumplink-banner__link button secondary-button"])[1]');
    downloadColoring: By = By.xpath('(//h3[@class="content-card__heading"])[5]');
    felineBottle: By = By.xpath('(//div[@class="image-block__description rich-text"])[10]');
    faceBook: By = By.xpath('//*[@class="icon--fbook social-item__icon"]'); 
    xSocial: By = By.xpath('//*[@class="icon--x social-item__icon"]'); 
    pinterest: By = By.xpath('//*[@class="icon--pinterest social-item__icon"]'); 
    instagram: By = By.xpath('//*[@class="icon--instagram social-item__icon"]'); 
    youtube: By = By.xpath('//*[@class="icon--youtube social-item__icon"]'); 
    constructor() {
        super({url: "https://www.metmuseum.org/"});
    };

    async canHover(elementBy: By) {
        const hover = this.driver.actions();
        const startElement = await this.getElement(elementBy);
        await this.actionWiggle(hover, startElement, 300);
        await hover.perform();
    };

    async scroll(elementBy: By) {
        const scrollThing = await this.getElement(elementBy);
        await this.driver.actions()
        .move({origin: scrollThing})
        .perform();
    };

    async repeat(clickAmount: number, clickThing: By) {
        for(let i = 0; i < clickAmount; i++){
            await this.click(clickThing); 
        }; 
    }; 
    async tabs(){
        let myTabs = await this.driver.getAllWindowHandles(); 
        await this.driver.switchTo().window(myTabs[1]); 
        await this.driver.sleep(1500); 
        await this.driver.close(); 
        await this.driver.switchTo().window(myTabs[0]);
    }
    async socials(){
        await this.scroll(this.faceBook); 
        await this.click(this.faceBook); 
        await this.tabs()
        await this.click(this.xSocial); 
        await this.tabs()
        await this.click(this.pinterest); 
        await this.tabs()
        await this.click(this.instagram); 
        await this.tabs()
        await this.click(this.youtube); 
        await this.tabs()
    }
};
