/**
 * Created by ithir on 03-04-2018.
 */
var colt ={
    firstName:"Colt",
    sayHi:function () {
        return "Hi" +this.firstName
    }
}

var elie ={
    firstName:"Elie"
}
console.log(colt.sayHi())
console.log(colt.sayHi.call(elie))