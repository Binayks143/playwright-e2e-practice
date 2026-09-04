const {test,expect} =require('@playwright/test')

test("Landing to client app login Page",async({browser})=>{
    const context =await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    console.log("Title is:", await page.title())
    await expect(page.locator("h1.login-title")).toHaveText("Log in")
})

test("Login the client app",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    const email="vivnay111@gmail.com"
    const password="Binay@123"
    const emailLocator='input[type="email"]'
    const passwordLocator='input[type="password"]'
    const LoginButton='input[id="login"]'
    await page.locator(emailLocator).fill(email)
    await page.locator(passwordLocator).fill(password)
    await page.locator(LoginButton).click()
})

test.only("e2e testing for adding and checking out product the client app",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    const email="vivnay111@gmail.com"
    const password="Binay@123"
    const emailLocator='input[type="email"]'
    const passwordLocator='input[type="password"]'
    const LoginButton='input[id="login"]'
    await page.locator(emailLocator).fill(email)
    await page.locator(passwordLocator).fill(password)
    await page.locator(LoginButton).click()
    await page.waitForLoadState('networkidle')
    await expect(page.locator('//h3[text()="Automation"]')).toBeVisible()

    // want to add the product in cart
    const RequiredProduct="ZARA COAT 3"
    const products=page.locator("div.card-body")
    const count= await products.count()
    console.log("total product is:",count)
    for(let i=0; i<count; ++i)
        {
        if(await products.nth(i).locator('b').textContent()==RequiredProduct)
        {
            await products.nth(i).getByText("Add To Cart").click()
            break;
        }
    }

    // Navigate to cart page and verify the added product
    await page.locator("[routerlink*='cart']").click()
    await page.waitForLoadState('networkidle');
    await expect(page.locator("h3:has-text('ZARA COAT 3')")).toBeVisible()

    //clicking on checkout button
    await page.getByText("Checkout").click()

    await expect(page.locator(`label:has-text("${email}")`)).toBeVisible()

    await page.getByPlaceholder("Select Country").pressSequentially("ind",{delay:150})

    const dropdown=page.locator(".ta-results")
    await dropdown.waitFor()
    const countOption=await dropdown.locator("button").count();

    for(let i=0;i<countOption;++i){
        const text=await dropdown.locator("button").nth(i).textContent()
        if (text.trim()==='India'){
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    await page.getByText("Place Order").click()
    await expect(page.getByText(" Thankyou for the order.")).toBeVisible()

})