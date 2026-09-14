const { test, expect } = require('@playwright/test');

    test("API test1",async({request})=>{
        const baseurl="http://216.10.245.166"
        const requestBody={
        name: "Learn Appium Automation with Java1111",
        isbn: "bcd11111",
        aisle: "22711111",
        author: "John foe"
    };
        const Response=await request.post(`${baseurl}/Library/Addbook.php`,
            {
                data:requestBody
            }
        )
        expect(Response.status()).toBe(200)
        const actualResponse=await Response.json()
        console.log(actualResponse)
        expect(actualResponse.Msg).toBe("successfully added")


    })