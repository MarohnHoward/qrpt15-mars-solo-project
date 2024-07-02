import { Pinterest } from "./pinterestPage";
const pin = new Pinterest(); 

test('making sure i can log in',async () => {
    await pin.navigate(); 
    await pin.login(); 
    await pin.click(pin.account); 
    await pin.click(pin.createPlus); 
    await pin.click(pin.board); 
    await pin.setInput(pin.boardName, "new board"); 
    await pin.click(pin.createBoard)
    await pin.click(pin.boardCreateDone); 
    await pin.click(pin.boardSettings); 
    await pin.click(pin.editBoard); 
    await pin.click(pin.deleteBoard); 
    await pin.click(pin.deleteButton); 
    await pin.driver.sleep(2000)
   
}); 

