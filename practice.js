// ************************************************************************************************************************************************
// take a string input and convert all the letters to lowercase
// ************************************************************************************************************************************************

// function fixString(str) {
// str = str.replace(/\s/g, '').toLowerCase();
// console.log(str)
// }

// es 6
// var fixString = str => str = str.replace(/\s/g, '').toLowerCase();
// console.log(fixString("Yurp and Churp"))

// ************************************************************************************************************************************************
// return a new array with the largest value from each array
// ************************************************************************************************************************************************

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

// es 6
// var largestOfFour = arr => {
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

// var largestOfFour = arr => {
//   var largestNum = [0,0,0,0]

//   for (var i=0; i <arr.length; i++) {
//     for (var j=0; j < arr[i].length; j++) {
//       // if(arr[i][j] > largestNum[i]) {
//       //   largestNum[i] = arr[i][j]
//       // }
//       arr[i][j] > largestNum[i] ? largestNum[i] = arr[i][j] : "error"
//     }
//   }
//   return largestNum
// }

//   console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// function largestOfFour(arr) {
//   var results = [];
//   for (var n = 0; n < arr.length; n++) {
//     var largestNumber = arr[n][0];
//     for (var sb = 1; sb < arr[n].length; sb++) {
//       if (arr[n][sb] > largestNumber) {
//         largestNumber = arr[n][sb];
//       }
//     }
//     results[n] = largestNumber;
//   }
//   return results;
// }

// ************************************************************************************************************************************************
// //  find the last letter in a string and check if it is equal to second parameter (target)
// ************************************************************************************************************************************************

// function confirmEnding(str, target) {
//   var lastLetter;
//   // loop the first argument and return the last letter
//   // compare the last letter to the second argument
//   for (var i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) == str.length - 1) {
//       lastLetter = str[i]
//     }
//   }
//   if (lastLetter == target) {
//     return true
//   }
//   console.log(lastLetter)
//   return str;
// }

// // es 6
// const confirmEnding = (str, target) => {
//   var lastLetter;
//   // loop the first argument and return the last letter
//   // compare the last letter to the second argument
//   for (var i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) == str.length - 1) {
//       lastLetter = str[i]
//     }
//   }
//   if (lastLetter == target) {
//     return true
//   }
//   console.log(lastLetter)
//   return str;
// }

// console.log(confirmEnding("Bastian", "n"));

// ************************************************************************************************************************************************
// //   Check if a string (first argument, str) ends with the given target string (second argument, target).
// ************************************************************************************************************************************************

// function confirmEnding(str, target) {
//     // console.log(target.length)
//     var targetLength = target.length
//     // console.log(targetLength)
//     var str2 = str.slice(-targetLength)
//     // console.log(str2)
//     if (str2 == target){
//         return true
//     } else {
//         return false
//     }
//     return str;
//   }

// es 6
// const confirmEnding = (str, target) => {
//     var targetLength = target.length
//     var str2 = str.slice(-targetLength)
//     console.log("str2 = " + str2)
//     // if (str2 == target){
//     //     return true 
//     // } else {
//     //     return false
//     // }
//     str = str2 == target ? true: false
//     return str;
// }

// console.log(confirmEnding("Bastian", "n"));
// confirmEnding("Bastian", "n")

// ************************************************************************************************************************************
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
// ************************************************************************************************************************************************

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

// es 6
// const repeatStringNumTimes = (str, num) => {
//   var stringArr = []
//   if (num) {
//     for (var i = 0; i < num; i++) {
//       stringArr.push(str)
//     }
//     console.log(stringArr)
//     str = stringArr.join('')
//   }
//   console.log(str)
//   return str;
// }

// repeatStringNumTimes("abc", 3);

// ************************************************************************************************************************************************
//   Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
// ************************************************************************************************************************************************

// function truncateString(str, num) {
//     //  slice the string at index 0 to the num point
//     // log the new string and concatenate ... on the end
//     var newStr = str.slice(0,num)
//      newStr = newStr + "..."
//     console.log(newStr)
//     return str;
//   }

// es 6
// const truncateString = (str, num) => {
//   var newStr = str.slice(0,num)
//   newStr = newStr + "..."
//  console.log(newStr)
//  return str;
// }

// truncateString("A Storm of Swords", 8);

// ************************************************************************************************************************************************
// return the sum of all the numbers in an array
// ************************************************************************************************************************************************

// function simpleArraySum(ar) {
//   var sum = 0;
//   for (var i = 0; i < ar.length; i++) {
//     sum = sum += ar[i]
//   }
//   console.log(sum)
//   return sum
// }

// es 6
// const simpleArraySum = ar => {
//   var sum = 0;
//   for (var i = 0; i < ar.length; i++) {
//     sum = sum += ar[i]
//   }
//   console.log(sum)
//   return sum
// }

// simpleArraySum([1,3,4,5,6])

// ************************************************************************************************************************************************
//  compare the triplets and add 1 to each corresponding score if greater thatn its counterpart
// ************************************************************************************************************************************************

// function compareTriplets(a, b) {
//   let scores = [0, 0]

//   for (let i = 0; i < a.length; i++) {
//     console.log("a value: " + a[i])
//     console.log("b value " + b[i])
//     if (a[i] > b[i]) {
//       scores[0]++
//     }
//     else if (b[i] > a[i]) {
//       scores[1]++
//     }
//     else {
//       console.log("error")
//     }
//   }
//   console.log(scores);
//   return scores;
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

// ************************************************************************************************************************************************
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a 
// truth test (second argument). If no element passes the test, return undefined.
// ************************************************************************************************************************************************

// function findElement(arr, func) {
//     let num = 0;
//     // loop thru array
//     for (var i = 0; i < arr.length; i++) {
//         // run each iteration through the function argument 
//         // if function returns true log the number
//         // if (func(arr[i])) {
//         //     num = arr[i];
//         //     // console.log(num)
//         //     // return num;
//         // }
//         func(arr[i]) ? num = arr[i] : "error"
//     }
//     return num;
// }

// function findElement(arr, func) {
//   let num = 0;
//   // loop thru array
//   for (var i = 0; i < arr.length; i++) {
//     // run each iteration through the function argument 
//     // if function returns true log the number
//     func(arr[i]) ? num = arr[i] : "error"
//   }
//   console.log(num);
//   return num;
// }

// // findElement([1, 2, 3, 4], num => num % 2 === 0);
// // console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))
// // findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; })
// findElement([1,3,5,7,9], num => (num - 2) === 3);

// ************************************************************************************************************************************************
// calculate and return the sum of all large integers
// ************************************************************************************************************************************************

// function aVeryBigSum(ar) {

//   var sum = 0
//   for (var i = 0; i < ar.length; i++) {
//     sum += ar[i]
//   }
//   console.log(sum);
//   return sum;
// }

// aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])

// ************************************************************************************************************************************************
// write a javascript function to reverse a number
// ************************************************************************************************************************************************

// var num = 3456;
// var newNumArray = []

// function reverseNumber(num) {
//     // split the number into an array
//     // var numArray = num.split
//     num = num.toString();
//     // console.log(num[0])
//     num = num.split("")
//     console.log(num)
//     // console.log("num.length = " + num.length)
//     // loop thru the number backwards
//     // add numbers to an array starting with the last number in num
//     // console.log(num.length -1)
//     for (var i = num.length -1; i > -1; i--) {
//         // console.log("num[i] = " + num[i])
//         var currentNum = num[i];
//         newNumArray.push(currentNum)
//         console.log(currentNum)
//     }
//     console.log(newNumArray)
// }

// reverseNumber(3456)

// ************************************************************************************************************************************************
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// ************************************************************************************************************************************************

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

// function diagonalDifference(arr) {
//   // split the array into {num} arrays of equal length
//   var length = arr.length
//   // console.log(length)
//   var sqrt = Math.sqrt(length)
//   // console.log(sqrt)
//   // var array = arr.length % sqrt;
//   // console.log(array)
//   var res = [];
//   function split(arr, n) {
//     while (arr.length) {
//       res.push(arr.splice(0, n));
//     }
//     return res;
//   }
//   split(arr, sqrt)
//   console.log(res)
// // write another function that calculates the diagonal difference dependent on number of rows
// // find first and second values of diagonal
// // get the abs difference from the two
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

//   function dD(num, arr) {
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

//   dD(sqrt, arr)
// }

// diagonalDifference([11, 2, 4, 4, 5, 6, 10, 8, -12])
// diagonalDifference([-1,1,-7,-8,-10,-8,-5,-2,0,9,7,-1,4,4,-2,1])

// ************************************************************************************************************************************************
// return the longest word in a sentence
// ************************************************************************************************************************************************

// function LongestWord(sen) { 
//   // code goes here
//   sen = sen.replace(/[^a-zA-Z ]/g, "");
//   var biggest = 0;
//   var longest;
//   var senArr = sen.split(" ");
//   console.log(senArr)
//   // loo thru senArr are compare each. store the biggest in a var
//   for (var i = 0; i < senArr.length; i++) {
//     var currentWord = senArr[i]
//     // console.log(currentWord)
//     if (currentWord.length > biggest) {
//       biggest = currentWord.length
//       longest = currentWord
//     }
//     console.log("longest = " + longest)
//   }
//   console.log(longest)
//   return longest; 
// }

// LongestWord("a beautiful sentence^&!");

// *************************************************************************************************************************************************************
// factorialize a a given number
// *************************************************************************************************************************************************************

// function factorialize(num) {
//   var result = num;
//   if (num === 0 || num === 1) 
//     return 1; 
//   while (num > 1) { 
//     num--;
//     result *= num;
//   }
//   console.log(result);

//   return result;
// }

// log(factorialize(5));

// function factorialize(num) {
//   if (num === 0 || num === 1)
//     return 1;
//   for (var i = num - 1; i >= 1; i--) {
//     num *= i;
//   }
//   return num;
// }

// factorialize(5);

// ************************************************RECURSION FUNCTIONS******************************************************************

// DETERMINE FACTORIAL USING RECURSION

// function factorial(x) {
//   if (x < 0) return;
//   if (x === 0) return 1;
//   return x * factorial(x - 1);
// }

// console.log(factorial(3));

// REVERSE A STRING USING RECURSION

// function revStr(str){
//   if (str === '') return '';
//   return revStr(str.substr(1)) + str[0];
// }
// revStr('cat');
// // tac

//  ADDING NUM -1 STARTING FROM NUM AND GOING TO 0

// function SimpleAdding(num) { 
//   if (num === 1) {
//     return 1;
//   }
//   else {
//     return num + SimpleAdding(num -1);
//   }
// }

// **************************************************************************************************************************************************************

// function SimpleAdding(num) { 

//   // code goes here  
//   var answer = 0;

//   // loop from 1 to num
//   for (var i = 1; i <= num; i++) {
//     console.log("i = " + i)
//     console.log("answer = " + answer)
//     console.log("**************")
//     answer += i;
//   } 
//   console.log(answer)
//   return answer;

// }

// SimpleAdding(7)


// function LetterCapitalize(str) { 

//   // code goes here  
//   // split the string into an array of single words
//   // loop thru new array
//   // capitalize the letters at index[0] of each word
//   // join the array back to a string
//   str = str.split(" ")
//   for (var i = 0; i < str.length; i ++) {
//     // console.log(str[i])
//     var currentWord = str[i];
//     // currentWord = currentWord[0].toUpperCase()
//     var currentLetter = currentWord[0]
//     // currentWord = currentWord.split('');
//     // currentWord = currentWord.splice(0, 1, currentLetter.toUpperCase())
//     console.log("currentWord = " + currentWord)
//     console.log("currentLetter = " + currentLetter)
//   }

//   // console.log(str)
//   return str; 

// }

// LetterCapitalize("check me out bruh")

// function LetterCapitalize(str) {
//   var newArr = [];
//   // code goes here  
//   // split the string into an array of single words
//   // capitalize each first letter
//   // push new word with capital first letter to holder array
//   // loop thru new array
//   // capitalize the letters at index[0] of each word
//   // join the array back to a string
//   str = str.split(" ")
//   for (var i = 0; i < str.length; i++) {
//     // console.log(str[i])
//     var currentWord = str[i];
//     // console.log("currentWord = " + currentWord)
//     var currentLetter = currentWord[0];
//     // console.log("currentLetter = " + currentLetter)
//     // console.log("******************")
//     var wordArr = currentWord.split('')
//     console.log("wordArr = " + wordArr)
//     var capLetter = wordArr[0].toUpperCase();
//     wordArr.splice(0, 1, capLetter)
//     var newWord = wordArr.join("")
//     // console.log("capLetter = " + capLetter)
//     // console.log("WordArr = " + wordArr)
//     // console.log("newWord = " + newWord)
//     // console.log("**************")
//     newArr.push(newWord)
//     // console.log("newArr = " + newArr)
//   }
//   newArr = newArr.join(" ");
//   console.log("newArr = " + newArr);
//   str = newArr;
//   // console.log(str)
//   return str;
// }

// LetterCapitalize("check me out bruh")


// function upperCaseFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// console.log(upperCaseFirstLetter("churp my yurp nurp"))


// function lowerCaseAllButFirst(str) {
//   // split the string into an array of words
//   var newWordString = [];
//   str = str.split(' ')
//   console.log(str)
//   // loop thru the array of words
//   for (var i = 0; i < str.length; i++) {
//     var word = str[i]
//     console.log(word)
//     var wordArr = [];
//     // var word = "CHuRp";
//     var firstLetter = word.slice(0, 1);
//     wordArr.push(firstLetter);
//     console.log("firstLetter = " + firstLetter)
//     word = word.slice(1, word.lenth);
//     console.log("word = " + word);
//     word = word.toLowerCase()
//     console.log("Lowercase word = " + word)
//     wordArr.push(word)
//     console.log("wordArr =" + wordArr)
//     var newWord = wordArr.join('')
//     console.log("newWord = " + newWord)
//     newWordString.push(newWord)
//   }
//   newWordString = newWordString.join(' ');
//   console.log("newWordString = " + newWordString)
//   // slice off character at index[0] and store it
//   // lower case the remaing part of each word
//   // join them back together for the new str
// }

// lowerCaseAllButFirst("MY HeARt HUrts ")

// var wordArr = [];
// var word = "CHuRp";
// var firstLetter = word.slice(0, 1);
// wordArr.push(firstLetter);
// console.log("firstLetter = " + firstLetter)
// word = word.slice(1, word.lenth);
// console.log("word = " + word);
// word = word.toLowerCase()
// console.log("Lowercase word = " + word)
// wordArr.push(word)
// console.log("wordArr =" + wordArr)
// var newWord = wordArr.join('')
// console.log("newWord = " + newWord)

// function LetterCapitalize(str) {
//   var newArr = [];

//   str = str.split(" ")
//   for (var i = 0; i < str.length; i++) {
//     // console.log(str[i])
//     var currentWord = str[i];
//     // console.log("currentWord = " + currentWord)
//     var currentLetter = currentWord[0];
//     // console.log("currentLetter = " + currentLetter)
//     // console.log("******************")
//     var wordArr = currentWord.split('')
//     console.log("wordArr = " + wordArr)
//     var capLetter = wordArr[0].toUpperCase();
//     wordArr.splice(0, 1, capLetter)
//     var newWord = wordArr.join("")
//     // console.log("capLetter = " + capLetter)
//     // console.log("WordArr = " + wordArr)
//     // console.log("newWord = " + newWord)
//     // console.log("**************")
//     newArr.push(newWord)
//     // console.log("newArr = " + newArr)
//   }
//   newArr = newArr.join(" ");
//   console.log("newArr = " + newArr);
//   str = newArr;
//   // console.log(str)
//   var newWordString = [];
//   str = str.split(' ')
//   console.log(str)
//   // loop thru the array of words
//   for (var i = 0; i < str.length; i++) {
//     var word = str[i]
//     console.log(word)
//     var wordArr = [];
//     // var word = "CHuRp";
//     var firstLetter = word.slice(0, 1);
//     wordArr.push(firstLetter);
//     console.log("firstLetter = " + firstLetter)
//     word = word.slice(1, word.lenth);
//     console.log("word = " + word);
//     word = word.toLowerCase()
//     console.log("Lowercase word = " + word)
//     wordArr.push(word)
//     console.log("wordArr =" + wordArr)
//     var newWord = wordArr.join('')
//     console.log("newWord = " + newWord)
//     newWordString.push(newWord)
//   }
//   newWordString = newWordString.join(' ');
//   console.log("newWordString = " + newWordString)
//   // slice off character at index[0] and store it
//   // lower case the remaing part of each word
//   // join them back together for the new str
//   return str;
// }

// LetterCapitalize("chEck mE ouT brUh")

// ************************************************************************************************************************************************
// You are given two arrays and an index. Use the array methods slice and splice to copy each element of the first array into the second array, in order. 
// Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.
// ************************************************************************************************************************************************

// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   // splice arr 2 at given at "n" index
//   let newArr2 = arr2.slice(n)
//   console.log("newArr2: " + newArr2)
//   // let newArr = 
//   // console.log("newArr: " + newArr)
//   let anotherArr2 = arr2.splice(n, 0, arr1)
//   console.log("anotherArr2: " + anotherArr2)
//   console.log("arr2 after splice: " + arr2)
//   console.log("arr1: " + arr1)

//   return arr2;
// }

// // frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
// frankenSplice([1, 2], ["a", "b"], 1)

// function frankenSplice(arr1, arr2, n) {
//   // It's alive. It's alive!
//   let localArray = arr2.slice();
//   for (let i = 0; i < arr1.length; i++) {
//     localArray.splice(n, 0, arr1[i]);
//     n++;
//   }
//   return localArray;
// }

// ****************************************
// Remove all falsy values from an array.
// ****************************************

// function bouncer(arr) {
//   // Don't show a false ID to this bouncer.
//   // convert all items in the array to booleans
//   // if boolean value === true push to newArr
//   let newArr = [];

//   arr.forEach(function(item){
//     if (item) {
//       newArr.push(item)
//     }
//   })

//   console.log(newArr)
//   return newArr;
// }

// bouncer([7, "ate", "", false, 9]);

// ************************************************************************************************************************************************
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// ************************************************************************************************************************************************

// function getIndexToIns(arr, num) {
//     var newArr = arr.filter()
//   }

//   getIndexToIns([40, 60], 50);

// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a-b});
// log(points)



// *************************************************************************************************************************************************************
// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
// *************************************************************************************************************************************************************

// function plusMinus(arr) {
//   // create variables to store num of positive/neg and zero from the array
//   let pos = 0;
//   let neg = 0;
//   let zero = 0;
//   // loop through the array and add 1 to each respective value for each in the array
//   arr.forEach(function (item) {
//     if (item === 0) {
//       zero++
//     }
//     else if (item > 0) {
//       pos++
//     }
//     else if (item < 0) {
//       neg++
//     }
//     else {
//       console.log("error");
//     }
//   })

// console.log(`pos: ${pos}`);
// console.log(`neg: ${neg}`);
// console.log(`zero: ${zero}`);

// // make variables to store a decimal representing of the fraction of each previous variables compared to size of the array
// let posFrac = pos / arr.length
// console.log(`posFrac = ${posFrac}`);

// let negFrac = neg / arr.length
// console.log(`negFrac = ${negFrac}`);

// let zeroFrac = zero / arr.length
// console.log(`zeroFrac = ${zeroFrac}`);

// }

// plusMinus([-4, 3, -9, 0, 4, 1])


// *************************************************************************************************************************************************************
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and 
// maximum values as a single line of two space-separated long integers.
// *************************************************************************************************************************************************************

// function miniMaxSum(arr) {
//   // create placeholder variables for minsum and maxsum
//   let minSum = 0;
//   let maxSum = 0;

//   // sort the array in ascending order
//   arr.sort(function(a, b){return a-b});
//   console.log(`arr = ${arr}`);

//   // calculate minSum value by slicing off our smallest number then adding the remaining items in the array together
//   let maxSumArray = arr.slice(1, arr.length)
//   // console.log(`arr: ${arr}`);
//   console.log("maxSumArray: " + maxSumArray);
//   maxSumArray.forEach(function(item){
//     maxSum += item
//   })

//   console.log(maxSum);

//   // calculate the maxSum value by slicing off our biggest number in the array
//   let minSumArray = arr.slice(0 ,arr.length -1)
//   console.log(`minSumArray: ${minSumArray}`);
//   minSumArray.forEach(function(item){
//     minSum += item
//   })

//   console.log(minSum);
// }

// miniMaxSum([1, 5, 3, 7, 2])


// *************************************************************************************************************************************************************
// You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, 
// she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.
// *************************************************************************************************************************************************************

// psuedocode
// candles = [3,2,1,3]
// tallestCandle = 0;
// tallestCandleArr = []
// age = input 

// loop over candles Array 

// if (currentItem > tallestCandle) {
//   currentItem = tallestCandle
// }
// end if 

// push tallestCandle to tallestCandleArr

// loop over array again 

// if (currentItem === tallestCandle) {
//   push currentItem into tallestCandleArr
// }
// end if 

// return tallestCandleArr

// birthdayCakeCandles = arr => {
//   let tallestCandle = 0;
//   let tallestCandleArr = [];

//   arr.forEach(item => {
//     if (item > tallestCandle) {
//       tallestCandle = item
//     }
//   })
//   // console.log(tallestCandle);
//   // console.log(`arr = ${arr}`);
//   arr.forEach(item => {
//     if (item === tallestCandle) {
//       tallestCandleArr.push(item)
//     }
//   })
//   // console.log(tallestCandleArr);
//   let numCandles = tallestCandleArr.length
//   // console.log(numCandles);
//   return numCandles
// }

// birthdayCakeCandles([3, 2, 1, 3])

// *************************************************************************************************************************************************************
// rounding grades up
// *************************************************************************************************************************************************************

// psuedocode

// grades = gradeArr
// grade = index of gradeArr
// gradesToBeRounded = []
// roundedGrades = []

// loop thru grades

// if (grade > 40) {
//   push grade to gradesToBeRounded
// }
// end if

// loop over gradesToBeRounded

// run rounding function for each item

// return new array of rounded grades


// function gradingStudents(grades) {
//   let gradesToBeRounded = [];
//   let roundedGrades = [];
//   let failingGrades = []
//   function round5(x)
// {
//     return Math.ceil(x/5)*5;
// }

//   grades.forEach(item => {
//     if (item > 40) {
//       gradesToBeRounded.push(item)
//     }
//     else {
//       failingGrades.push(item)
//     }
//   })
//   console.log(`gradesToBeRounded: ${gradesToBeRounded}`);

//   roundedGrades = gradesToBeRounded.map(round5)

//   roundedGrades.push(failingGrades)
//   console.log(`roundedGrades: ${roundedGrades}`);
// }

// gradingStudents([33,38,67,73])



// *************************************************************************************************************************************************************
// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. In the diagram below, the red region denotes his house, where s is the start point, 
// and t is the endpoint. The apple tree is to the left of his house, and the orange tree is to its right. 
// You can assume the trees are located on a single point, where the apple tree is at point A, and the orange tree is at point B.
// *************************************************************************************************************************************************************

// psudocode
//  parameters
//    houseStartingPoint = 7
//    houseEndingPoint = 10
//    appleTree = 4
//    orangeTree = 12
//    appleDistance = [2,3,-4]
//    orangeDistance = [3,-2,-4]

// functions
  // function range(start, end) {
  //   var ans = [];
  //   for (let i = start; i <= end; i++) {
  //     ans.push(i);
  //   }
  //   // console.log(ans);
  //   return ans;
  // }

// variables
//  samsHouseRange = [7,8,9,10]
//  apples = 3
//  oranges = 3
//  orangesLand = []
//  applesLand = []
//  houseLandedApples = []
//  houseLandedOranges = []

// calculate samshouse range
// samsHouseRange = [7,8,9,10]

// calculate where applesLand and where orangesLand
// add tree locations to each respesctive  integer in the distance arrays

// loop appleDistance 
//   for each item add appleTree
//   push item to applesLand

// loop orangeDistance 
//   for each item add orangeTree
//   push item to orangesLand

// loop orangesLanded and applesLanded and compare against sameHouseRange
// if (item === samsHouseRange) {
//   push item to houseLandedApples
// }

// yield houseLandedApples

// function countApplesAndOranges(houseStartingPoint, houseEndingPoint, appleTree, orangeTree, appleDistance, orangeDistance) {

//   var orangesLanded = [];
//   var applesLanded = [];
//   var houseLandedApples = [];
//   var houseLandedOranges = [];
//   var samsHouseRange = range(houseStartingPoint, houseEndingPoint)

//   appleDistance.forEach(item => {
//     // item + appleTree
//     applesLanded.push(item + appleTree)
//   })
//   console.log(applesLanded);

//   orangeDistance.forEach(item => {
//     // item + appleTree
//     orangesLanded.push(item + orangeTree)
//   })
//   console.log(orangesLanded);

//   for (var i = 0; i < applesLanded.length; i++) {
//     if (samsHouseRange.indexOf(applesLanded[i]) > -1) {
//       houseLandedApples.push(applesLanded[i]);
//     }
//   }
//   console.log(`houseLandedApples: ${houseLandedApples}`);

//   for (var i = 0; i < orangesLanded.length; i++) {
//     if (samsHouseRange.indexOf(orangesLanded[i]) > -1) {
//       houseLandedOranges.push(orangesLanded[i]);
//     }
//   }

//   console.log(`houseLandedOranges: ${houseLandedOranges}`);
//   return (houseLandedApples, houseLandedOranges)
// }

// // countApplesAndOranges(7, 10, 4, 12, [2,3,-4], [3,-2,-4])
// console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));


// *************************************************************************************************************************************************************
// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock,  
// determine how many pairs of socks with matching colors there are.  For example, there are N = 7 socks with colors ar = [1,2,1,2,1,3,2]. There is one pair of color 1 and one of color 2. 
// There are three odd socks left, one of each color. The number of pairs is 2.
// *************************************************************************************************************************************************************

// PSEUDOCODE

//  parameters
//    n = number of socks
//    arr = the colors of each sock

//  variables
//    pairs = 0
//    results
//    sortedArr = []

// sort the given array in ascending order
// loop the sortedArr
//  if (previous value = current value)
//    push current value to results arr
//  END IF





// function countPairs(n, arr) {
//   let pairs = 0;
//   const results = []
//   let sortedArr = arr.slice().sort()
//   console.log(sortedArr);

//   for (var i = 0; i < sortedArr.length -1; i++) {
//     if (sortedArr[i +1] == sortedArr[i]) {
//       results.push(sortedArr[i])
//     }
//   }
//   console.log(results)
// }

// countPairs(7, [1,2,1,2,1,3,2])



// *************************************************************************************************************************************************************
// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season 
// record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.
// *************************************************************************************************************************************************************

// psudeocode 

//   parameters 
//     scores = [12,24,10,24]

//   variables
//     records = [0,0]
//     min = records[0]
//     max = records[1]

//   functions


//   min = scores[0]
//   max = scores[0]

//   loop scores Array 
//     for each item check item against min and max
//       if (item > max) {
//         max = item
//       }
//       else if (item < min) {
//         min = item
//       }
//       return records
//       END IF  


// function breakingRecords(scores) {
//     let records = [0,0]
//     let min = records[0]
//     let max = records[1]    
//     let minRecord = 0
//     let maxRecord = 0

//     min = scores[0]
//     max = scores[0]

//     scores.forEach(item => {
//       if (item > max) {
//         maxRecord++
//       }
//       else if (item < min) {
//         minRecord++
//       }
//     })
//     console.log(minRecord, maxRecord)

// }

//  breakingRecords([12,24,10,24])



// *************************************************************************************************************************************************************
// Lily has a chocolate bar that she wants to share it with Ron for his birthday. Each of the squares has an integer on it. 
// She decides to share a contiguous segment of the bar selected such that the length of the segment matches Ron's birth month 
// and the sum of the integers on the squares is equal to his birth day. You must determine how many ways she can divide the chocolate.
// *************************************************************************************************************************************************************

// pseudoCode

//   parameters 
//     squares = [2,2,1,3,2];
//     ronsBDay = 4;
//     ronsBMonth = 2;

//   variables 
//     waysToDivide = 0;

//   functions


//   loop through squares Array 
//     for each item   
//       if (item + ronsBMonth === ronsBday) {
//         waysToDivide++
//       }
//       else {
//         error
//       }
//       END IF  

//     return waysToDivide


function birthday(squares, ronsBDay, ronsBMonth) {
  let waysToDivide = 0;

  squares.forEach(item => {
    if (item + ronsBMonth === ronsBDay) {
      waysToDivide++
    }
  })
  console.log(waysToDivide);
  return waysToDivide
}

birthday([2,2,1,3,2], 4, 2)