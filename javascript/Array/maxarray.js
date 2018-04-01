/**
 * Created by ithir on 04-12-2017.
 */
function max(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(max([6,4,3]));

// function min(arr){
//     var min=arr[0];
//     for (var i =0;i<arr.length;i++){
//         if(arr[i]<min){
//              min =arr[i];
//         }
//         return min;
//
//     }
//
// }
// console.log(min([2,3,4,5,10]));