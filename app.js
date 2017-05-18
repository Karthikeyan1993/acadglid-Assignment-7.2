/**
 * Created by USER on 13/05/2017.
 */

/**
 *
 * @returns {number}
 */
function findSum() {
    var sum = 0;
    //check argument length is greater than zero
    if (arguments.length > 0) {
        for (var i = 0; i < arguments.length; i++) {
            //calculate sum of arguments if argument tpe is number
            typeof arguments[i] === "number" ? sum = sum + arguments[i] : sum = sum;
        }
        return sum;
    }
}

var sum = findSum(1, 2, 3);
console.log(sum);

sum = findSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sum);