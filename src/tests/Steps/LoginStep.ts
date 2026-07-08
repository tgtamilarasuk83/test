

import { TamilWorld } from './../../world/Tamilworld';
import { Given ,When ,Then,  } from "@cucumber/cucumber";
import Logindata from '../../utilis/Logindata.json';

const valid = Logindata.valid
const invalid = Logindata.invalid

When('the user click on the login', async function (this:TamilWorld) {
    this.Login.clickLogin()
  
});

When('Enters The Email and Password', async function (this:TamilWorld) {
    this.Login.enterdetails(valid);

});

When('Enters The invalid  Email and Password', async function () {
  this.Login.enterdetails(invalid);
});

When('Click on the login', async function (this:TamilWorld) {
    this.Login.clickLogin()
  
});

Then('The user sucessfully Login to the application', async function (this:TamilWorld) {
  
});

Then('The user can see the error message', async function (this:TamilWorld) {

    this.Login.faillogins()
});
