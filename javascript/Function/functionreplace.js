/**
 * Created by ithir on 10-01-2018.
 */

function replace(str){
    var newStr=str.replace(/-/g,"_")

    return newStr;
}

console.log(replace("hello-world"));
console.log(replace("hello-india"));
console.log(replace("hello-world-again"));