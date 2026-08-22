const {test, expect } = require('@playwright/test');

test('First test',async ({browser})=>
{
    const username='input#username'
    const password='input#password'
    const signInButton="//input[@id='signInBtn']"
    const errorInvalidPassword="//div[contains(text(),' username/password.')]"
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log("title is",await page.title())
    expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await page.locator(username).fill('rahulshettyacademy')
    await page.locator(password).fill('Binay@123')
    await page.locator(signInButton).click()
    console.log(await page.locator(errorInvalidPassword).textContent());
    await expect(page.locator(errorInvalidPassword)).toContainText("Incorrect");

    await page.locator(password).fill('')
    await page.locator(password).fill('Learning@830$3mK2')
    await page.locator(signInButton).click()
    // await page.pause()
    // await expect(await page.locator(".card-title a",{hasText:'iphone X'})).toContainText("iphone X")

    //wait machanisum
    //OPTION 1 : if this will not work try option 2
    // await page.waitForLoadState('networkidle');
    // OPTION 2
    await page.locator(".card-title a").first().waitFor()
    const carddetails =await page.locator(".card-title a").allTextContents();
    console.log(carddetails)

}
);

test('direct opening page',async ({page}) =>
{
    await page.goto("https://www.amazon.in/")
}
)

test.only("working with select dropdown and radio option", async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const username='input#username'
    const password='input#password'
    const signInButton="//input[@id='signInBtn']"
    const dropdownElement="select.form-control"
    const radioButton='.customradio [value="user"]'
    const checkbox1='#terms'

    await page.locator(username).fill("rahulshettyacademy")
    await page.locator(password).fill("Learning@830$3mK2")
    await page.locator(dropdownElement).selectOption("Teacher")
    console.log(await page.locator(radioButton).isChecked())
    // await page.locator(radioButton).last()

    await page.locator(radioButton).click()
    await page.locator("#okayBtn").click()
    console.log(await page.locator(radioButton).isChecked())
    await expect(page.locator(radioButton)).toBeChecked()

    await page.locator(checkbox1).click()
    console.log("checkbox checked ",await page.locator(checkbox1).isChecked())
    await page.locator(checkbox1).uncheck()
    console.log("checkbox unchecked ",await page.locator(checkbox1).isChecked())
    expect(await page.locator(checkbox1).isChecked()).toBeFalsy()




    
})