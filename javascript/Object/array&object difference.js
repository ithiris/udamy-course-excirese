/**
 * Created by ithir on 07-12-2017.
 */

/// arrray
    ///key always pair

var dog =["rustty","lukky","bubba"];
dog[1]="red"
console.log(dog)
console.log(dog[1])//particuler element print
console.log(dog.push("wyatt")) //one element added

console.log(dog)


//Object
// key always number
var dog={
    name:"bubba",
    breed:"Lab"
}
dog.breed="Black Lab"//update and replace
dog["age"]=6;/// new key and value added in obj
dog.sex="male";
console.log(dog)
console.log(dog["name"])//particular key print
console.log(dog.breed)// this is another way
console.log(dog)




console.log(a);
console.log(b);


function filterMalePeople(inputarray){
    //for(var i=0;i<inputarray.length;i++){
    var id=inputarray[i].id
    var names=inputarray[i].first_name
    var lastnames=inputarray[i].last_name
    var email=inputarray[i].email
    var gender=inputarray[i].gender
    var genderkey=['email']

    resultobj[names]=inputarray[i]['first_name']
    resultobj[id]=inputarray[i]['id']
    resultobj[lastnames]=inputarray[i]['last_name']
    resultobj[email]=inputarray[i]['email']
    resultobj[gender]=inputarray[i]['gender']
    resultobj[genderkey]='email'

    //}
    return resultobj;
}


console.log((filterMalePeople(people)));