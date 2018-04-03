/**
 * Created by ithir on 03-04-2018.
 */
var person ={
    firstName:"Colt",
    sayHi:function () {
        return "Hi" +this.firstName;
    },
    determineContext: function () {
        return this ===person;
    },
    dog:{
        firstName:"meyaw",
        sayHello:function () {
            return "Hello" +this.firstName;
        },
        determineContext:function () {
            return this ===person;
        }
    }
}
console.log(person.sayHi());
console.log(person.determineContext());
console.log(person.dog.sayHello());
console.log(person.dog.determineContext());