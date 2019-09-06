// *************************************************************************************************************************************************************
// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// *************************************************************************************************************************************************************

// PSUEDOCODE

//     PARAMETERS 
//         arr = an array of integers

//     VARIABLES

//     sort the array ascending

//     find the sum of the numbers in the given array
//         firstSum = 0;
//         loop the arr and add the numbers together store in firstSum

//     find all the numbers between the two integers
//         create a for loop starting at arr[0] incrementing up to arr[1]
//             add 1 to arr[0] and push that number to a rangeArr


function sumAll(arr) {
    const sumEach = function(arr) {
        let sum = 0;
        arr.forEach(item => sum += item);
        return sum;
    }

    const sortedArr = arr.sort(function(a, b){return a-b});
    console.log("sortedArr: ", sortedArr)

    const absDiff = Math.abs(arr[0] - arr[1])
    console.log("absDiff: ", absDiff)

    let firstSum = sumEach(arr)
    console.log("firstSum: ", firstSum)
    
    let lowNum = sortedArr[0];
    let highNum = sortedArr[1];
    console.log("lowNum before: ", lowNum)
    console.log("highNum before: ", highNum)
    
    let rangeArr = []

    do {
        lowNum += 1;
        rangeArr.push(lowNum)
    }
    while (rangeArr.length < absDiff - 1)

    console.log("lowNum after: ", lowNum)
    console.log("rangeArr: ", rangeArr)

    const secondSum = sumEach(rangeArr)
    console.log("secondSum: ", secondSum)
    
    console.log("answer: ", firstSum + secondSum)
    return firstSum + secondSum;
}
    
// sumAll([4, 1]);
sumAll([10, 5])

// other solutions

// Basic Code Solution:
// function sumAll(arr) {
//     var max = Math.max(arr[0], arr[1]);
//     var min = Math.min(arr[0], arr[1]);
//     var temp = 0;
//     for (var i=min; i <= max; i++){
//         temp += i;
//     }
//   return(temp);
// }

// sumAll([1, 4]);

// Intermediate Code Solution:
// function sumAll(arr) {
//   // Buckle up everything to one!

//   // Using ES6 arrow function (one-liner)
//   var sortedArr = arr.sort((a,b) => a-b);
//   var firstNum = arr[0];
//   var lastNum = arr[1];
//   // Using Arithmetic Progression summing formula

//   var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
//   return sum;
// }

// Advanced Code Solution:
// function sumAll(arr) {
//     var sum = 0;
//     for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
//         sum += i;
//     }
//   return sum;
// }

// sumAll([1, 4]);




