/**
 * Created by ithir on 10-01-2018.
 */

var result=sample("gopi")// function hoisting supported in function declaration and variable outside and inside.
console.log(result)

function sample(mesg) {
return mesg
}


var obj={
    name:'gopi',
    fun:function(name){
        return name
    }

    
}
var res=obj.fun("gopi")// obj hoisting function not supported outside the function
console.log(res)

