/**
 * Created by ithir on 10-01-2018.
 */

function factorial(number){

    var result =1;

    for(var i=1;i<=number;i++){
        result *=i;
    }

 return result
}


console.log(factorial(4));