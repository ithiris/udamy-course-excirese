
 /* Created by ithir on 03-12-2017.
 */

//print Reverse()

 // write a function printReverse() that takes an array as an argument and print out the element in the array in reverse order
 //don't actually reverse the  array itself.

 function printReverse(arr){
     for(var i = arr.length-1; i >=0; i--){
         console.log(arr[i]);
     }
 }


 printReverse([1,2,3,4]);
 printReverse(["a","b","c","d","e","f","g","h"]);

 //write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical.
 //isUniform([0, 0, 0]);// true
 //isUniform([2,2,2,2]);// false
 //isUniform(["a","b","b","a"]);// false
 //isUniform(["b","b","b","b"]);// true

 

