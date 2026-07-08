import { TamilWorld } from './../../world/Tamilworld';
import { Given ,When ,Then,  } from "@cucumber/cucumber";


Given('the user in the Dashboard', async function (this:TamilWorld) {
  
});

When('The user enters {string} , {string},{string},{string},{string} details',async function (this: TamilWorld,FN: string, LN: string,Email: string,Pass: string,Cpass: string) {
    await this.Register.enterdetails(FN, LN, Email, Pass, Cpass);
  }
);

When('The user click on the Register button', async function () {
  await new Promise((resolve) => setTimeout(resolve, 9000));
  await this.Register.submit()
  await new Promise((resolve) => setTimeout(resolve, 9000));
 
});

Then('The user register sucessfully with the message of Your registration completed', async function (this:TamilWorld) {
  await new Promise((resolve) => setTimeout(resolve, 9000));
  await this.Register.SucessMessage();
});
