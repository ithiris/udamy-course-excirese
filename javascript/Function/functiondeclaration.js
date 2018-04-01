/**
 * Created by ithir on 08-01-2018.
 */

// function let us wrap bits of code up into Reusable packages. they are one of the building blocks of js.

// Declare a function it.

function dosomething(){
    console.log("Hello World");

}
//Then call it

dosomething()


// Suppose i want to  write code to sing " Twinkle  Twinkle little star"

console.log("twinkle twinkl little star");

// to sing it again, i have rewrite all the code. this is not dry.

// we can write a function to help us out

function singsong(){
    console.log("twinkle twinkl little star");
}
// To sing the entire song 4 times
singsong()
singsong()
singsong()
singsong()

//function declaration
var city="eral"
var capital=capitalize(city)
function capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}

console.log(capital)


function test(x,y){
    return y-x;
}
console.log(test(10,40));

