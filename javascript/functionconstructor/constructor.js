/**
 * Created by ithir on 31-01-2018.
 */

function Employee (name,age){

this.name=name;
this.age=age;

}
Employee.prototype.salary = 999

var employee = new Employee("mohamed",28)


var employee1 = new Employee("umar", 22)

var employee2= new Employee("gopi",22)

console.log(employee.salary)

console.log(employee)
console.log(employee1.salary)
console.log(employee2.salary)