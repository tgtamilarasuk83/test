

import { TamilWorld } from './../../world/Tamilworld';
import { Given ,When ,Then,  } from "@cucumber/cucumber";
import Logindata from '../../utilis/Logindata.json';

const valid = Logindata.valid
const invalid = Logindata.invalid

When('the user click on the login', async function (this:TamilWorld) {
   await  this.Login.clickLogin()
  
});

When('Enters The Email and Password', async function (this:TamilWorld) {
    await this.Login.enterdetails(valid);

});

When('Enters The invalid  Email and Password', async function () {
   await this.Login.enterdetails(invalid);
});

When('Click on the login', async function (this:TamilWorld) {
      await new Promise((resolve) => setTimeout(resolve, 9000));
        await this.Login.clickbtn()
  
});

Then('The user sucessfully Login to the application', async function (this:TamilWorld) {
      await new Promise((resolve) => setTimeout(resolve, 9000));
   console.log("SucessfulluLohin")
});

Then('The user can see the error message', async function (this:TamilWorld) {
    await new Promise((resolve) => setTimeout(resolve, 9000));
    await this.Login.faillogins()
});
