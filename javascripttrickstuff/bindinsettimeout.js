/**
 * Created by ithir on 03-04-2018.
 */
var colt ={
    firstName:"Colt",
    sayHi:function () {
        setTimeout (function () {
            console.log("Hi" + this.firstName)
        }.bind(this),1000)
    }
}

console.log(colt.sayHi())