/**
 * Created by ithir on 10-01-2018.
 */

/**write a function isEven() which takes a single numeric argument and return true if the number is even,
and false otherwise.*/

function isEven(n){
    if (n == 0)
        return true;
    else if (n == 1)
        return false;
    else if (n < 0)
        return isEven(-n);
    else
        return isEven(n - 2);

}

console.log(isEven(4))
console.log(isEven(68))
console.log(isEven(333))
console.log(isEven(21))
