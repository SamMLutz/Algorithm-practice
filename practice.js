// // function fixString(str) {
// // str = str.replace(/\s/g, '').toLowerCase();

// // console.log(str)
// // }

// // fixString("Yurp and Churp")

// function largestOfFour(arr) {
//     // You can do this!
//   // loop the big arry and get the highest number of each
//   // store the highest number in its own array
//   var largestNum = [0,0,0,0]

//   for (var i=0; i <arr.length; i++) {
//     for (var j=0; j < arr[i].length; j++) {
//       if(arr[i][j] > largestNum[i]) {
//         largestNum[i] = arr[i][j]
//       }
//     }

//   }
//   return largestNum
// } 

//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//   function largestOfFour(arr) {
//     var results = [];
//     for (var n = 0; n < arr.length; n++) {
//       var largestNumber = arr[n][0];
//       for (var sb = 1; sb < arr[n].length; sb++) {
//         if (arr[n][sb] > largestNumber) {
//           largestNumber = arr[n][sb];
//         }
//       }

//       results[n] = largestNumber;
//     }

//     return results;
//   }

//   function confirmEnding(str, target) {
//     // "Never give up and good luck will find you."
//     // -- Falcor
//     // loop the first argument and return the last letter
//     // compare the last letter to the second argument
//     var lastLetter;
//     for (var i=0;i <str.length; i++) {
//         var currentLetter = str[i]
//       if (currentLetter.indexOf() == str.length -1) {
//         lastLetter = currentLetter

//       }
//     }

//     console.log(lastLetter)
//     return str;

//   }

//  find the last letter in a string and check if it is equal to second parameter (target)

//   function confirmEnding(str, target) {
//       var lastLetter
//     // "Never give up and good luck will find you."
//     // -- Falcor
//     // loop the first argument and return the last letter
//     // compare the last letter to the second argument
//     for (var i=0;i <str.length; i++) {
//         if (str.indexOf(str[i]) == str.length -1) {
//             lastLetter = str[i]
//         }
//     }
//     if (lastLetter == target) {
//         return true
//     }
//     console.log(lastLetter)
//     return str;

//   }

//   confirmEnding("Bastian", "n");

// //   Check if a string (first argument, str) ends with the given target string (second argument, target).
// function confirmEnding(str, target) {
//     // "Never give up and good luck will find you."
//     // -- Falcor
//     console.log(target.length)
//     var targetLength = target.length
//     console.log(targetLength)
//     var str2 = str.slice(-targetLength)
//     console.log(str2)
//     if (str2 == target){
//         return true
//     } else {
//         return false
//     }
//     return str;
//   }

//   confirmEnding("Bastian", "n");

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

// function repeatStringNumTimes(str, num) {
//     // repeat after me
//     var stringArr = []
//     if (num) {
//       for (var i = 0; i < num; i++) {
//         stringArr.push(str)
//       }
//       console.log(stringArr)
//       str = stringArr.join('')
//     }
//     console.log(str)
//     return str;
//   }

//   repeatStringNumTimes("abc", 3);

//   Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// function truncateString(str, num) {
//     // Clear out that junk in your trunk
//     //  slice the string at index 0 to the num point
//     // log the new string and concatenate ... on the end
//     var newStr = str.slice(0,num)
//      newStr = newStr + "..."
//   console.log(newStr)

//     return str;
//   }

//   truncateString("A-", 1);

// function simpleArraySum(ar) {
//   /*
//    * Write your code here.
//    */var sum = 0;
//   for (var i = 0; i < ar.length; i++) {

//       sum = sum += ar[i]
//   }
//   console.log(sum)
//   return sum
// }

// simpleArraySum([1,3,4,5,6])

//  compare the triplets and add 1 to each corresponding score if greater thatn its counterpart

// function compareTriplets(a, b) {
//     let scores = [0,0]

//     for (let i = 0; i < a.length; i++) {
//         console.log("a value: " + a[i])
//         console.log("b value " + b[i])
//         if (a[i] > b[i]) {
//             scores[0]++

//         }
//         else if (b[i] > a[i]) {
//             scores[1]++
//         }
//         else {
//             console.log("error")
//         }
//     }
//     console.log(scores);
//     return scores;

// }


// compareTriplets([1, 5, 3], [2, 4, 6,]);

// var array1 = ['a', 'b', 'c'];

// array1.forEach(function(element, index) {
//   console.log(element);
//   console.log(index)
// });

// let compareTriplets = (a, b) => {
//     if (!b) {
//         return a.length;
//     }

//     let firstArray = a.length >= b.length ? a : b;
//     let secondArray = b.length < a.length ? b : a;

//     // let scoreA = 0
//     // let scoreB = 0
//     let scores = [0,0]

//     firstArray.forEach((item, index) => {
//         if (!secondArray[index]) {
//             scores[1]++
//         }

//         if (item > secondArray[index]) {
//             scores[0]++
//         }

//         if (secondArray[index] > item) {
//             scores[1]++
//         }
//     })

//     console.log(scores);
//     return scores
// };


// compareTriplets([5 ,6, 7], [3, 6, 10]);

// Create a function that looks through an array (first argument) and returns the first element in the array that passes a 
// truth test (second argument). If no element passes the test, return undefined.

// function findElement(arr, func) {
//     let num = 0;
//     // loop thru array
//     for (var i = 0; i < arr.length; i++) {
//         // run each iteration through the function argument 
//         // if function returns true log the number
//         if (func(arr[i])) {
//             num = arr[i];
//             console.log(num)
//             return num;
//         }
//     }
// }

//   findElement([1, 2, 3, 4], num => num % 2 === 0);
// findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; })

// calculate and pring the sum of all large integers
// var ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

// function aVeryBigSum(ar) {
//     var sum = 0
//     for (var i = 0; i < ar.length; i++) {
//         sum += ar[i]
//     }
//     console.log(sum);
//     return sum;

// }

// aVeryBigSum(ar)

// write a javascript function to reverse a number

// var num = 3456;
// var newNumArray = []

// function reverseNumber(num) {
//     // split the number into an array
//     // var numArray = num.split
//     num = num.toString();
//     // console.log(num[0])
//     num = num.split("")
//     // console.log(num)
//     // console.log("num.length = " + num.length)
//     // loop thru the number backwards
//     // add numbers to an array starting with the last number in num
//     // console.log(num.length -1)
//     for (var i = num.length -1; i < num.length; i--) {
//         // console.log("num[i] = " + num[i])
//         var currentNum = num[i];
//         newNumArray.push(currentNum)
//         console.log(currentNum)
//     }
//     console.log(newNumArray)
// }

// reverseNumber(3456)


// Given a square matrix, calculate the absolute difference between the sums of its diagonals.



// function diagonalDifference(arr) {
//     console.log(arr[0][0])
//     var value1;
//     var value2;
//     value1 = arr[0][0] + arr[1][1] + arr[2][2]
//     console.log("val1: " + value1)
//     value2 = arr[0][2] + arr[1][1] + arr[2][0]
//     console.log("val2: " + value2)
//     console.log("absolute val: " + Math.abs(value1 - value2))
//     return Math.abs(value1 - value2)

// }

// diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]])

// function diagonalDifference(arr) {
//     // split the array into 3 arrays of equal length
//     var arr1 = arr.slice(0,3);
//     console.log("arr1 = " + arr1);
//     var arr2 = arr.slice(3,6);
//     console.log("arr2 = " + arr2)
//     var arr3 = arr.slice(6,9);
//     console.log("arr3 = " + arr3)
//     var value1 = arr1[0] + arr2[1] + arr3[2];
//     console.log("value 1 = " + value1)
//     var value2 = arr1[2] + arr2[1] + arr3[0];
//     console.log("value 2 = " + value2)
//     console.log("absolute val: " + Math.abs(value1 - value2))
//     return Math.abs(value1 - value2)
// }

// diagonalDifference([11,2,4,4,5,6,10,8,-12])

// function diagonalDifference(num, arr) {
//     // split the array into {num} arrays of equal length

//     var arr1 = arr.slice(0, num);
//     console.log("arr1 = " + arr1);
//     var arr2 = arr.slice(num, num * 2);
//     console.log("arr2 = " + arr2)
//     var arr3 = arr.slice(num * 2, num * 3);
//     console.log("arr3 = " + arr3)
//     var value1 = arr1[0] + arr2[1] + arr3[2];
//     console.log("value 1 = " + value1)
//     var value2 = arr1[2] + arr2[1] + arr3[0];
//     console.log("value 2 = " + value2)
//     console.log("absolute val: " + Math.abs(value1 - value2))
//     return Math.abs(value1 - value2)
// }

// diagonalDifference(3, [11,2,4,4,5,6,10,8,-12])

function diagonalDifference(arr) {
  // split the array into {num} arrays of equal length
  var length = arr.length
  // console.log(length)
  var sqrt = Math.sqrt(length)
  // console.log(sqrt)
  // var array = arr.length % sqrt;
  // console.log(array)
  var res = [];
  function split(arr, n) {
    while (arr.length) {
      res.push(arr.splice(0, n));
    }
    return res;
  }
  split(arr, sqrt)
  console.log(res)
  // write another function that calculates the diagonal difference dependent on number of rows
  // find first and second values of diagonal
  // get the abs difference from the two
  // function dD(array, rows) {
  //   var val1Total;
  //   var val2Total;
  //   var val1 = array[rows -rows][rows -rows];
  //   var val2 = array[rows - (rows -1)][rows - (rows -1)]
  //   var val3 = array[rows - (rows -2)][rows - (rows -2)]
  //   console.log("val1 = " + val1);
  //   console.log("val2 = " + val2)
  //   console.log("val3 = " + val3)


  //   for (var i = 0; i < array.length; i++) {
  //     var yurp = array[i]
  //     console.log(yurp)
  //     var value1;
  //   }
  // //  console.log(yurp) 
  // }

  function dD(num, arr) {
    // split the array into {num} arrays of equal length

    var arr1 = arr.slice(0, num);
    console.log("arr1 = " + arr1);
    var arr2 = arr.slice(num, num * 2);
    console.log("arr2 = " + arr2)
    var arr3 = arr.slice(num * 2, num * 3);
    console.log("arr3 = " + arr3)
    var value1 = arr1[0] + arr2[1] + arr3[2];
    console.log("value 1 = " + value1)
    var value2 = arr1[2] + arr2[1] + arr3[0];
    console.log("value 2 = " + value2)
    console.log("absolute val: " + Math.abs(value1 - value2))
    return Math.abs(value1 - value2)
}


  dD(sqrt, arr)

}

// diagonalDifference([11, 2, 4, 4, 5, 6, 10, 8, -12])
diagonalDifference([-1,1,-7,-8,-10,-8,-5,-2,0,9,7,-1,4,4,-2,1])

