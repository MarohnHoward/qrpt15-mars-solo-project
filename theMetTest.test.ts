import { metPage } from "./theMetPage";
const met = new metPage();
const fs = require('fs')

test('making sure the Egyptian collection works', async () => {
    await met.navigate();
    await met.driver.manage().window().maximize()
    await met.canHover(met.artLink);
    await met.click(met.metCollection);
    await met.driver.sleep(2000); 
    await met.scroll(met.egyptianArt);
    await met.click(met.egyptianArt); 
    await met.canHover(met.egyptianImage1);
    await met.canHover(met.egyptianImage2);
    await met.canHover(met.egyptianImage3);
    await met.canHover(met.egyptianImage4);
    await met.scroll(met.button2);
    await met.click(met.button2);
    await met.scroll(met.button3);
    await met.click(met.button3);
    await met.scroll(met.button4);
    await met.click(met.button4);
    await met.scroll(met.button5);
    await met.click(met.button5);
    await met.scroll(met.button6);
    await met.click(met.button6);
    //await met.scroll(met.magicWandImage);
    //await met.click(met.magicWandImage);
    //await met.click(met.downloadBtn);
     
});

test('making sure i can add and remove items from shopping cart', async () => {
    await met.navigate();
    await met.driver.manage().window().maximize()
    await met.click(met.shopLink);
    await met.click(met.giftGuideLink);
    await met.scroll(met.recommended);
    await met.click(met.quickView1);
    await met.click(met.xButton);
    await met.click(met.quickView2);
    await met.click(met.xButton);
    await met.click(met.quickView3);
    await met.driver.sleep(3000)
    await met.click(met.xButton);
    await met.click(met.quickView4);
    await met.driver.sleep(3000)
    await met.click(met.xButton);
    await met.driver.sleep(3000)
    await met.scroll(met.giftsForKids);
    await met.driver.sleep(3000)
    await met.click(met.giftsForKids)
    await met.scroll(met.ages911);
    await met.click(met.ages911);
    await met.click(met.mapPuzzle);
    await met.repeat(20,met.plusBtn);//how do i add multiple times
    await met.driver.sleep(1000)
    await met.repeat(5,met.minusBtn);
    await met.driver.sleep(1000)
    await met.repeat(5,met.plusBtn);
    await met.click(met.addToBagButton);
    await met.click(met.shoppingBag);
    await met.driver.sleep(2000)
    fs.writeFile(`${__dirname}/cartPicture.png`,
        await met.driver.takeScreenshot(), "base64", 
        (e) => {
            if (e) console.log(e);
            else console.log("Thats a lot"); 
        }); 
    

}); 

test('making sure exhibition links work properly', async () => {
    await met.navigate();
    await met.driver.manage().window().maximize()
    await met.canHover(met.exhibitionsAndEvents);
    await met.click(met.exhibitions);
    await met.click(met.hiddenFaces);
    await met.scroll(met.planVisitBottom);
    await met.scroll(met.allExhibitions);
    await met.click(met.allExhibitions);
    await met.click(met.theHarlem);
    await met.scroll(met.planVisitBottom);
    await met.scroll(met.allExhibitions);
    await met.click(met.allExhibitions);
    await met.scroll(met.sleepingBeauties);
    await met.click(met.sleepingBeauties);
    await met.scroll(met.planVisitBottom);
    await met.scroll(met.allExhibitions);
    await met.click(met.allExhibitions);
    await met.scroll(met.collectingInspiration);
    await met.click(met.collectingInspiration);
    await met.scroll(met.planVisitBottom);
    await met.scroll(met.allExhibitions);
    await met.click(met.allExhibitions);
});

test('making sure i can select a coloring page to download', async () => {
    await met.navigate();
    await met.driver.manage().window().maximize()
    await met.canHover(met.learnWithUs);
    await met.click(met.learningResources);
    await met.click(met.kidsAndFamilies);
    await met.scroll(met.downloadColoring);
    await met.click(met.downloadColoring);
    await met.scroll(met.felineBottle);
    
}); 

test('socials',async () => {
    await met.navigate(); 
    await met.driver.manage().window().maximize(); 
    await met.socials()
    await met.driver.quit()
})