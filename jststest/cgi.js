const emplyeeColletion=[{empName:"Test Auto",salary:3000},
{empName:"QA Auto",salary:4000},
{empName:"Test Auto",salary:5000},
{empName:"Analyst Test",salary:5000}];

let empdata=[]
const empcount={}

const result=emplyeeColletion.map((emp)=>{
    const [firstname,lastname]=emp.empName.split(" ")

const basemail=`${firstname}.${lastname}`.toLowerCase()
// console.log(basemail)

const count=empcount[basemail] || 0;

const email=count===0 ? `${basemail}@cgi.com` :`${basemail}${count}@cgi.com`
empcount[basemail]=count+1;
return {
    ...emp,email:email
}

})

// console.log(result)



console.log(result)

console.log(a)
var a=10
