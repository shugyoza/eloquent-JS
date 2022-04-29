'use strict'

/* The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function min
that takes two arguments and returns their minimum.
*/

const returnMin = (numA, numB) => {
    return numA < numB ? numA : numB;
}

console.log(returnMin(0, 10));
console.log(returnMin(0, -10));
