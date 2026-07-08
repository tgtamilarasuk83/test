import { StringReader } from './../../../node_modules/@jridgewell/sourcemap-codec/src/strings';
import { Page , Locator , expect } from "@playwright/test";
import { BasePage } from "./basePage";
export class Register extends BasePage {
    private Gender : Locator;
    private FirstName : Locator;
    private LastName : Locator;
    private Email : Locator;
    private pasword: Locator;
    private ConfrimPass : Locator;
    private Submit : Locator;
    private AssetMessage : Locator;

    constructor(page:Page){
        super(page);
        this.Gender = page.locator("//input[@id='gender-male']");
        this.FirstName = page.locator("//input[@id='FirstName']");
        this.LastName = page.locator("//input[@id='LastName']");
        this.Email = page.locator("//input[@id='Email']");
        this.pasword = page.locator("//input[@id='Password']");
        this.ConfrimPass = page.locator("//input[@id='ConfirmPassword']");
        this.Submit = page.locator("//input[@id='register-button']");
        this.AssetMessage = page.locator("//div[@class='result']");
    }

    async enterdetails(FS: string, LS: string, EMail: string, Pass: string, css: string){
          await this.click( this.Gender)
          await this.fill(this.FirstName,FS);
          await this.fill(this.LastName,LS);
          await this.fill(this.Email,EMail);
          await this.fill(this.ConfrimPass,css);
          await this.fill(this.pasword,Pass);     
    }
    async submit(){
        await this.click(this.Submit)
    }

    async SucessMessage(){
      await  expect(this.AssetMessage).toBeVisible
    }

     

     


    
}