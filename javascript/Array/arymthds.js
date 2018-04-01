/**
 * Created by ithir on 02-12-2017.
 */
/*Array Methods
  1.push
  2.pop
  3shift
  4.unshift
  5.index0f
  6.slice
 */
//use push to add to the end of an array

var colors=["red","green","blue","pink"];
colors.push("brown")
console.log(colors);

//use pop to remove the last item of the array

colors.pop();
console.log(colors);

//use shift to remove the first item in a array

colors.shift();
console.log(colors);

//use unshift to add item in the front of an array

colors.unshift("red","orange");
console.log(colors);

// use indexof() to find the index of the item in an array

console.log(colors.indexOf("green"))


// return -1 if the element is not present in the array

console.log(colors.indexOf("white"))


