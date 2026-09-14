console.log("hi")
a=4
console.log(a)
var c="jkj";
var c=9+9;
console.log(c)
// const c=7
const c1=73
let y78=null
console.log(y78)
let a1=[23,45,66,2,4,5,6,89]
const result=a1
.filter((s)=>s%2===0)
.map((s)=>s*3)
.reduce((sum,v)=>sum+v,0)
console.log(result)

for (let i=0;i<=10;i++){
    // console.log(i,end=" ")
    if (i%2===0)
    {
        console.log(i)
    }
}

let su=[2,7,'h','hi']
for (let i=0;i<=su.length-1;i++){
    console.log(su[i])
}
su.push(89)

console.log(su)
console.log(su.pop())
console.log(su)
console.log(su.indexOf(7))
console.log(su.includes('h'))
sub=su.slice(2,3)
console.log(sub)
console.log(su.sort().reverse())  

let day="sunday"
console.log(day.length)
let subday=day.slice(4,6)
console.log(subday)
let splitday=day.split("n")
console.log()
let p={fn:"otp",ln:"lki"}
console.log(p['fn'])
p['fn']="Binay"
console.log(p['fn'])
console.log(p)
console.log('fn' in p)

for (let key in p){
    console.log(key)
    console.log(p[key])
}
//cgi
console.log(a)
var a=10
//cgi
console.log(b)
let b=10

