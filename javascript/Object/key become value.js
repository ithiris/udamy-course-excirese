/**
 * Created by ithir on 31-01-2018.
 */

var obj=
{
    "id": 1,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "email": "jpenddreth0@census.gov",
    "gender": "Female",
    "ip_address": "26.58.193.2"
}

object={}
function keyBecomeValue(obj) {


    for (var key in obj) {
        var keys = [obj[key]]
        object[keys] = key// value key: key value.
        var keysvalues= object[keys]
        object [keysvalues]=obj[key] //key :value

    }
    return object;
}
console.log(keyBecomeValue(obj))
