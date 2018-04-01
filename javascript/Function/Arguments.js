/**
 * Created by ithir on 08-01-2018.
 */

// Often we  want to  write  functions that take inputs

function square (num){
    console.log(num *num);

}
 // Now when  we call square we need to pass in value

square(10);
square(3);
square(4);


//function can have as many argument as needed.
function area (length,width){
    console.log(length *width);

}
    
area(9,2); // 18

function  greet (person1,person2,person3) {
    console.log("hi" + person1);
    console.log("hi" + person2);
    console.log("hi" + person3);
}
greet("harry","Ron","Hermione");

    
