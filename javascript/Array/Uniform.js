/**
 * Created by ithir on 22-03-2018.
 */

function isUniform(arr){
   var first =arr[0];
    for(var i=1;i<arr.length; i++){
       if(arr[i]==first){
           return false
       }
    }
 return true;
}

console.log(isUniform(1,1,2))