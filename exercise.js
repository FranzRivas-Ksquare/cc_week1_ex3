/* *Instructions*
    
    There's somethign called falsy values in JavaScript and this exercise will help you in learning them.
    
    You will receive an array with all kinds of values and you need to remove all falsy values from the given array and
    return the array with the remaining values.


*/

// function youShallNotPass input array
// return a allow value

/** DO NOT CHANGE THE FUNCTION NAME **/
const youShallNotPass = (arr) => {
    /* Only make changes below this comment */
    const youShallPass = [];
    for(i in arr) {
        if (typeof (arr[i]) === 'number') {
            if (arr[i] > 0) {
            youShallPass.push(arr[i]);
            };  
        } else if (typeof (arr[i]) === 'string') {
            if (arr[i] != "") {
            youShallPass.push(arr[i]);
            }
        }
    };
    return youShallPass;
  /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.youShallNotPass = youShallNotPass;