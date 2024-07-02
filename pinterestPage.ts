import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";
const fs = require('fs'); 

export class Pinterest extends BasePage {
    logInHome: By = By.xpath('(//div[text()="Log in"])[1]'); 
    email: By = By.xpath('//input[@class="D8X Hsu tBJ dyH iFc L4E mbr iyn fSK Et3 LJB xD4 ybQ z-6"]'); 
    password: By = By.xpath('(//input[@name="password"])'); 
    loginForm: By = By.xpath('//button[@class="RCK Hsu USg adn CCY gn8 L4E kVc iyn S9z Vxj aZc Zr3 hA- Il7 hNT BG7"]'); 
    account: By = By.xpath('(//div[@class="INd Jea KS5 mQ8 zI7 iyn Hsu"])[1]'); 
    createPlus: By = By.xpath('(//div[@class="x8f INd _O1 KS5 mQ8 OGJ"])[4]'); 
    board: By = By.xpath('(//span[text()="Board"])[1]'); 
    boardName: By = By.name('boardName'); 
    createBoard: By = By.xpath('(//button[@class="RCK Hsu USg adn CCY NTm KhY iyn S9z F10 xD4 fZz hUC Il7 hNT BG7"])'); 
    firstBoardPin: By = By.xpath('(//div[@class="MIw QLY Rym ojN p6V zI7 iyn Hsu"])[1]'); 
    boardCreateDone: By = By.xpath('(//div[text()="Done"])'); 
    boardSettings: By = By.xpath('//div[@class="x8f INd _O1 KS5 mQ8 WhU"]'); 
    editBoard: By = By.xpath('(//span[text()="Edit board"])[1]'); 
    deleteBoard: By = By.xpath('(//h3[text()="Delete board"])[1]'); 
    deleteButton: By = By.xpath('(//div[text()="Delete"])[1]'); 
    hoverPin: By = By.xpath('(//div[@class="XiG zI7 iyn Hsu"])[8]');  
    hoverSave: By = By.xpath('//div[text()="Save"]')
    newBoard: By = By.xpath('//div[@class="hA- sLG wYR zI7 iyn Hsu "]'); 

    constructor(){
        super({url: "https://www.pinterest.com/"}); 
    }; 

    async login() {
    await this.click(this.logInHome); 
    await this.setInput(this.email, "mars.howard@devmounta.in"); 
    await this.setInput(this.password, "TestPass123"); 
    await this.click(this.loginForm); 
    }; 

    async hover(elementBy: By) {
        const hover = this.driver.actions(); 
        const startElement = await this.getElement(elementBy); 
        await this.actionWiggle(hover, startElement, 100); 
        await hover.perform(); 
    }; 
}