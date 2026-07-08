import { After, AfterAll, Before, BeforeAll, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { TamilWorld } from "../../world/Tamilworld";
import { Browser, chromium } from "@playwright/test";
import { Register } from "../pages/RegisterPage";
import { Login } from "../pages/LoginPage";
import dotenv from "dotenv";
import path from "path";

// Load the correct .env file (defaults to "ninja")
const envName = (process.env.ENV || "ninja").trim();
dotenv.config({ path: path.resolve(process.cwd(), `env/.env.${envName}`) });

setDefaultTimeout(60 * 1000);

let browser: Browser;

BeforeAll(async () => {
    browser = await chromium.launch({
        headless: false
    })
})

Before(async function (this: TamilWorld) {
    this.browserContext = await browser.newContext();
    this.page = await this.browserContext.newPage();
    await this.page.goto(process.env.BASE_URL as string);

    this.Register = new Register(this.page);
    this.Login = new Login(this.page);
})

After(async function (this: TamilWorld, { pickle, result }) {
    if (result?.status == Status.FAILED && this.page) {
        const screenshot = await this.page.screenshot({
            path: `reports/screenshots/${pickle.name}.png`
        });
        await this.attach(screenshot, "image/png");
    }

    await this.page?.close();
    await this.browserContext?.close();
})

AfterAll(async () => {
    await browser?.close();
})