import { Super } from './../../../node_modules/acorn/dist/acorn.d';
import { StringReader } from './../../../node_modules/@jridgewell/sourcemap-codec/src/strings';
import { Page , Locator , expect } from "@playwright/test";
import { BasePage } from "./basePage";
export class Login extends BasePage {

    private Loginlink : Locator;
     private Email : Locator;
      private pass : Locator;
        private loginbtn : Locator;
          private SuccLogin : Locator;
           private faillogin : Locator;

           constructor(page:Page){

             super(page);
             this.Loginlink = page.locator("//a[@class='ico-login']")
             this.faillogin = page.locator("//span[contains(text(),'Login was unsuccessful. Please correct the errors ')]")
             this.Email = page.locator("//input[@id='Email']");
             this.pass = page.locator("//input[@id='Password']");
             this.loginbtn = page.locator("//input[@value='Log in']");
             this.SuccLogin = page.locator("");
            

           }

           async clickLogin(){
            await this.click(this.Loginlink)
           }

           async enterdetails(value:any){
            await this.fill(this.Email,value.Email);
            await this.fill(this.pass,value.Password);
           }

           async clickbtn(){
            await this.click(this.loginbtn)
           }
           
           async faillogins(){
            await  expect(this.faillogin).toBeDisabled
           }

}