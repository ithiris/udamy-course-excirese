/**
 * Created by ithir on 07-12-2017.
 */
// var obj3 = {
//     id: 1,
//     name: "mani",
//     sal: 1200,
//     age: 23
// }
// var obj4 = {
//     id: 1,
//     address: "chennai",
//     mail: "mani@gmail.com"
// };
// var mailValue;
// function map1(inputObj, inputObj2) {
//     for (var objectkey in inputObj) {
//         if (objectkey == 'mail') {
//             mailValue = inputObj[objectkey];
//             inputObj2['mail'] = mailValue;
//         }
//     }
//     return inputObj2;
// }
//
// console.log(map1(obj4, obj3));

var inputArray=["key1","key2","key3"];
var output={}

for(var i=0;i<inputArray.length;i++){
  output[inputArray[i]]  = inputArray[i]

}

console.log(output)

var people = [{
    "id": 1,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "email": "jpenddreth0@census.gov",
    "gender": "Female",
    "ip_address": "26.58.193.2"
}, {
    "id": 2,
    "first_name": "Giavani",
    "last_name": "Frediani",
    "email": "gfrediani1@senate.gov",
    "gender": "Male",
    "ip_address": "229.179.4.212"
}, {
    "id": 3,
    "first_name": "Noell",
    "last_name": "Bea",
    "email": "nbea2@imageshack.us",
    "gender": "Female",
    "ip_address": "180.66.162.255"
}, {
    "id": 4,
    "first_name": "Willard",
    "last_name": "Valek",
    "email": "wvalek3@vk.com",
    "gender": "Male",
    "ip_address": "67.76.188.26"
}];
var resultobj={};
function filterMalePeople(inputarray){
    for(var i=0;i<inputarray.length;i++){

        var names=inputarray[i].first_name
        var first_name=inputarray[i].first_name

        resultobj[names]=inputarray[i]
        //resultobj[first_name]=inputarray[i]['first_name']
    }
return resultobj;
}


console.log((filterMalePeople(people)));


