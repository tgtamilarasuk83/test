

import {setWorldConstructor,World,IWorldOptions,} from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";
import { Register } from "../tests/pages/RegisterPage";
import { Login } from "../tests/pages/LoginPage";
export class TamilWorld extends World {
  browser!: Browser;
  browserContext!: BrowserContext;
  page!: Page;
  Register! : Register
  Login!: Login

  constructor(options: IWorldOptions) {
    super(options);
  }
}
setWorldConstructor(TamilWorld);