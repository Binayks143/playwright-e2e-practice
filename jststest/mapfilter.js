/*
Apply transformations and calculations to array elements, and filter elements based on a condition

*/
const productPrices =[56,89,9090,787,67677]
const discountedPrices= productPrices.map(price=> Math.round(price * 0.9 * 100)/100)
const affortablePrice=discountedPrices.filter(price=>price<100);
const totalPrice=affortablePrice.reduce((totalPrice,price)=>totalPrice+price)
console.log(discountedPrices)
console.log(affortablePrice)
console.log(totalPrice)