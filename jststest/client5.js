// create this for 1000 customer Format for this is : Customer_ID, Phone Number all data for each will be unique
const fs= require("fs");
const customer=[];
const phoneNumbers= new Set();

for (let i=1;i<=1000;i++){
    let phoneNumber;
    do{
        phoneNumber=Math.floor(9000000000+Math.random()*5999999999).toString()

    } while
    (phoneNumbers.has(phoneNumber));
        phoneNumbers.add(phoneNumber);
        customer.push({Customer_ID:`CUTS${String(i).padStart(4,"0")}`,
        phone_number:phoneNumber
        })

    let csvData="Customer_ID,phone_number\n";

    customer.forEach(customer=>{
        csvData +=`$
        {
            {customer.Customer_ID},$
            {customer.phone_number}\n`;

        });
    fs.writeFileSync("customer.csv",csvData);
    console.log("success")




}























