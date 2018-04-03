/**
 * Created by ithir on 03-04-2018.
 */
var person ={
    firstName:"Elie",
    sayHi:function () {
        return "HI" + this.firstName
    },
    determineContext:function () {
        return this ===person
    }
}

console.log(person.determineContext())