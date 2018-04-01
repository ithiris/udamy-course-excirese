/**
 * Created by ithir on 04-12-2017.
 */

function palindrome(str) {
    for(var i=str.length-1;i >=0; i--){
        console.log(str[i])
    }
}
palindrome("malayalam");

function reveseString(str) {

    for(var i=str.length-1;i>=0;i--){

        console.log(str[i])

    }

}

reveseString("gopi");

var colors=["red","green","blue","pink"];
colors.reverse()
//console.log(colors);

var str = "Visit Microsoft!";
var res = str.replace("Visit","*");
//console.log(res)

function join(str) {
    for(var i=0;i< str.length;i++){
        if(str[i]===" "){
            str=str.replace(str[i],"+")

        }
if(str[i]==="+"){
    str=str.replace(str[i],"*")

}


    }
    return str;


}


console.log(join("hello world"));