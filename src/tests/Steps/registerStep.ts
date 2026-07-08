import { TamilWorld } from './../../world/Tamilworld';
import { Given ,When ,Then,  } from "@cucumber/cucumber";


Given('the user in the Dashboard', async function (this:TamilWorld) {
  
});

When('The user enters {string} , {string},{string},{string},{string} details', async function (FN, LN, Email, Pass, Cpass,{this:TamilWorld}) {
  await this.Register.enterdetails(FN, LN, Email, Pass, Cpass,)
});

When('The user click on the Register button', async function () {
  await this.Register.submit()
 
});

Then('The user register sucessfully with the message of Your registration completed', async function (this:TamilWorld) {
  await this.Register.SucessMessage();
});
