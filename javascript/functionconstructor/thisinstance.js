/**
 * Created by ithir on 31-01-2018.
 */

// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create 2 Person objects
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

// Add nationality to first object
myFather.nationality = "English";
myMother.nationality ="Tamil";

console.log(myFather)
console.log(myMother.firstName)
console.log(myFather.eyeColor)