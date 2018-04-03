/**
 * Created by ithir on 03-04-2018.
 */
var colt = {
    firstName:"colt",
    sayHi:function () {
        return "Hi" + this.firstName
    },
    addnumber:function (a,b,c,d) {

        return this.firstName + "just calculated" + (a+b+c+d);

    }
}
var elie = {
    firstName: "Elie"
}

var elieCalc =colt.addnumber.bind(elie,1,2,3,4)
console.log(elieCalc())

var  elieCalc2 =colt.addnumber.bind(elie,3,4)
console.log(elieCalc2(1,2))