const { test,expect } = require("@playwright/test")

test("demo1",async({browser})=>{
    const context1=await browser.newContext()
    const page1=await context1.newPage()
    await page1.goto("https://rahulshettyacademy.com/client/#/auth/login")
    console.log("Title is",page1.title())
    await expect(page1.locator("h1.login-title")).toHaveText("Log In")

}


)