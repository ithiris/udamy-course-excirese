/**
 * Created by ithir on 06-12-2017.
 */
// objectives
// use a for loop to iterate over an array.
// Use forEach ro iterate over an array.
// compare and contrast for loops and forEach.


function hello(a,b) {
    console.log(10*20)


}


setTimeout(hello,5000,10,20)


var colors =["red","green","yellow","blue"];
for(var i=0;i <colors.length;i++){
    console.log(colors[i])
    console.log(colors[0])
}
// for Each
//javascript provide an easy built-in way of  iterating over an array: forEach
//arr.forEach(somefunction)


var fruits =["apple","orange","banana","pinapple"];

fruits.forEach(function (ilovefruits,index) {
    //fruits is placeholder, call it whatever you want
    console.log("INSIDE"+ilovefruits,index)

})
//different of forEach and forloop
var colors1=["white","yellow","red"];
console.log("inside"+colors1)