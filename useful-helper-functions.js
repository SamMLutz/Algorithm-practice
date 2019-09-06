// sort in ascending order 
// *************************************************************************************************************************************************************

// function alphabeticalOrder(arr) {
//     // Add your code below this line
//     return arr.sort(function (a, b) {
//         return a > b;
//     });
//     // Add your code above this line
// }
// alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

// // solution for chrome browser
// function reverseAlpha(arr) {
//     return arr.sort(function (a, b) {
//         return a > b ? 1 : -1;
//     });
// }

// console.log(reverseAlpha(['b', 'n', 'a', 'j']));

// //  example with nonMutating function
// function nonMutatingSort(arr) {
//     // Add your code below this line
//     return [].concat(arr).sort(function (a, b) {
//         return a - b;
//     });
//     // Add your code above this line
// }

// *************************************************************************************************************************************************************

// find the median

// function median(numbers) {
//     // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
//     var median = 0, numsLen = numbers.length;
//     numbers.sort();
 
//     if (
//         numsLen % 2 === 0 // is even
//     ) {
//         // average of two middle numbers
//         median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
//     } else { // is odd
//         // middle number only
//         median = numbers[(numsLen - 1) / 2];
//     }
 
//     return median;
// }

// *************************************************************************************************************************************************************
// check if value is in given array
// *************************************************************************************************************************************************************


// function isInArray(value, array) {
//     return array.indexOf(value) > -1;
//   }