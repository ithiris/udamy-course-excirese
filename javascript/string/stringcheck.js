/**
 * Created by ithir on 04-12-2017.
 */

//2.	Write a function to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

function string_check(str1) {
    if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py')
    {
        return str1;
    }
    return "Py"+str1;
}

console.log(string_check("thon"));
console.log(string_check("thon"));

//string concatation.

var str1 = "Hello ";
var str2 = "world!";
var str3 = " Have a nice day!";
var res = str1.concat(str2, str3);
console.log(res)

// write a function to print the given string letters in reverse.

function printReverse(arr){
    for(var i = arr.length-1; i >=0; i--){
        console.log(arr[i]);
    }
}


printReverse([1,2,3,4]);
//Write a function to remove a character at the specified position of a given string and return the new string.

function remove_character(str, char_pos)
{
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    return(part1 + part2);
}

console.log(remove_character("Python",0));
console.log(remove_character("Pythq",3));
console.log(remove_character("Python",5));

// isUniform() --> returns true if the array elements are identical

 function isUniform(arr){
     var first=arr[0];
     for(var i=0;i<arr.length;i++){
       if(arr[i]!== first) {
           return false;
       }
     }
     return true;
 }

console.log(isUniform([1,2,3]));
console.log(isUniform([2,2,2]));


//sumArray

function sumArray(arr) {
    var total = 0;
    arr.forEach(function (element) {
        total = total + element;
    });
    return total;
}
console.log(sumArray([2,3,4]));


// *** max() ***





function palindrome(str) {
    for(var i=str.length-1;i >=0; i--){
        console.log(str[i])
    }
}
palindrome("malayalam");

var str="gopi";
str2=str+"mi";

console.log(str2)

function add(str) {
    if(str==="ithiris"){
        str=str+"m";
    }
    return str
}
console.log(add("ithiris"))