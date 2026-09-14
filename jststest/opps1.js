// A class is like a blueprint for creating objects.
class Employee{
// A static property belongs to the class itself, not to individual objects.
// You access it using: Employee.totalEmp , not emp1.totalEmp
    static totalEmp=1;

// The # means this is a private field. It can only be accessed from inside the Employee class.
    // #salary
    constructor (salary){
        this.salary=salary
    }
}

const emp1=new Employee(50000)
console.log(Employee.totalEmp)
console.log(emp1.totalEmp)
console.log(emp1.salary)