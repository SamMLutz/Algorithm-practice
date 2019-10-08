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


// function sumAll(arr) {
//     const sumEach = function(arr) {
//         let sum = 0;
//         arr.forEach(item => sum += item);
//         return sum;
//     }

//     const sortedArr = arr.sort(function(a, b){return a-b});
//     console.log("sortedArr: ", sortedArr)

//     const absDiff = Math.abs(arr[0] - arr[1])
//     console.log("absDiff: ", absDiff)

//     let firstSum = sumEach(arr)
//     console.log("firstSum: ", firstSum)

//     let lowNum = sortedArr[0];
//     let highNum = sortedArr[1];
//     console.log("lowNum before: ", lowNum)
//     console.log("highNum before: ", highNum)

//     let rangeArr = []

//     do {
//         lowNum += 1;
//         rangeArr.push(lowNum)
//     }
//     while (rangeArr.length < absDiff - 1)

//     console.log("lowNum after: ", lowNum)
//     console.log("rangeArr: ", rangeArr)

//     const secondSum = sumEach(rangeArr)
//     console.log("secondSum: ", secondSum)

//     console.log("answer: ", firstSum + secondSum)
//     return firstSum + secondSum;
// }

// sumAll([4, 1]);
// sumAll([10, 5])

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


// *************************************************************************************************************************************************************
// Intermediate Algorithm Scripting: Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// *************************************************************************************************************************************************************

// PSEUDOCODE

//     PARAMETERS 
//         arr1 = first given array 
//         arr2 = second given array 

//     VARIABLES   
//         newArr = result to return 

//     check the length of each array and loop over the larger of the two first

//     loop over arr 1 
//         if (item === inddex of arr 2)
//             log "in arr2"
//         else 
//             push item to newArr

// IMPERATIVE SOLUTIONS
// *************************************************************************************************************************************************************

// function diffArray(arr1, arr2) {
//     let newArr = []
//     const checkArr = (arrOne, arrTwo) => {

//         arrOne.forEach(item => {
//             if (arrTwo.indexOf(item) > -1) {
//                 console.log("already in arr")
//             }
//             else {
//                 newArr.push(item)
//             }
//         })
//         return newArr;
//     }

//     if (arr1.length > arr2.length) {
//         checkArr(arr1, arr2)
//         checkArr(arr2, arr1)
//     }
//     else {
//         checkArr(arr1, arr2)
//         checkArr(arr2, arr1)
//     }
//     return newArr;
// }

// function diffArray(arr1, arr2) {
//     var newArr = [];
    
//     const checkArr = (arrOne, arrTwo) => {
//         arrOne.forEach(item => {
//             if (arrTwo.indexOf(item) === -1) {
//                 newArr.push(item)
//             }
//         })
//         return newArr;
//     }
//     checkArr(arr1, arr2);
//     checkArr(arr2, arr1);

//     return newArr;
// }

// DECLARATVIE SOLUTIONS
// *************************************************************************************************************************************************************

// function diffArray(arr1, arr2) {
//     return arr1
//         .concat(arr2)
//         .filter(
//             item => !arr1.includes(item) || !arr2.includes(item)
//         )
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
// const answer = diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
// console.log(answer)

// *************************************************************************************************************************************************************
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.
// *************************************************************************************************************************************************************

// function destroyer(arr) {
//     // Remove all the values

//     const args = [...arguments];
//     // console.log(args)
//     const neededArgs = args.slice(1);
//     console.log("neededArgs: ", neededArgs)
//     const firstArr = arguments[0];
//     console.log("firstArr: ", firstArr)
//     // const matchedNums = []

//     // neededArgs.forEach((item, index) => {
//     //   if (firstArr.includes(item)) {
//     //     console.log("item: ", item);
//     //     console.log("index: ", index)
//     //     firstArr.splice(item, index+1)
//     //     // matchedNums.push(item);
//     //   }
//     //   else {
//     //     console.log("u confused boi")
//     //   }
//     // })

//     neededArgs.forEach((item, index) => {
//       firstArr.forEach((element, index2) => {
//         if (firstArr.includes(item)) {
//           let newArr = [].concat(firstArr)
//           console.log("newArr: ", newArr)

//           console.log("item: ", item);
//           console.log("index: ", index);
//           console.log("element: ", element)
//           console.log("index2: ", index2)
//           console.log("############")
//           newArr.splice(element, index2)
//           console.log(firstArr)
//           console.log("**********")
//       }
//     })
//     })

//     // console.log("matchedNums: ", matchedNums)
//     // console.log("answer: ", firstArr)
    
//     return arr;
//   }

// const remove = (arr, toRemove) => {
//   const result = arr.filter(item => {
//     return item !== toRemove
//   })
//   console.log("result: ", result)
//   return result
// }


// function destroyer(arr) {
//   // Remove all the values

//   const args = [...arguments];
//   // console.log(args)

//   const neededArgs = args.slice(1);
//   console.log("neededArgs: ", neededArgs)

//   const firstArr = arguments[0];
//   console.log("firstArr: ", firstArr)
 
//   neededArgs.forEach(item => {
//     console.log("item: ", item)
    
//     remove(arr, item)
//     console.log("########")
//   })


//   return arr;
// }

const getResult = (arr, toRemove) => {
  const result = arr.filter(item => {
    return item !== toRemove
 })
  console.log("result: ", result)
  return result
}

// function destroyer(arr) {
//   // Remove all the values

//   const args = [...arguments];
//   // console.log(args)

//   const neededArgs = args.slice(1);
//   console.log("neededArgs: ", neededArgs)

//   const firstArr = arguments[0];
//   console.log("firstArr: ", firstArr)

//   // const result = firstArr.reduce(item => {
    
//   // })
//   neededArgs.forEach(item => {
//     getResult(firstArr, item)
//   })

//   return arr;
// }
  
//   destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// const remove = (arr, toRemove) => {
//   const removed = []

//   arr.forEach(item => {
//   if (item === toRemove) {
//     removed.push(item)
//   }
// })
//   console.log(removed)
//   console.log(arr)
// }


// remove([1,2,3,1,2,3], 2)

// let arr = [1,2,3,1,2,3,4]

// const toRemove = [2,4]

// const result = arr.filter(item => {
//    return item !== toRemove;
// })



// getResult([1,2,3,4,5,6,6], 6)

// console.log(result)

// const arrDestroyer = function (acc, curElement) {
//   // create a new array without curElement
//   const arg = 
//   console.log("acc: ", acc)
//   console.log("curElement: ", curElement)
//   const newArr = acc.filter(item => {
//     console.log("item: ", item)
//     return item !== acc.indexOf(curElement)
//   })
//   return newArr;
// }

// const answer = arr.reduce(arrDestroyer, arr)

// console.log(answer)

// function destroyer(arr) {
//   var args = Array.from(arguments).slice(1);
//   console.log("args: ", args)
//   console.log("arr: ", arr)
//   return arr.filter(function(item) {
//     return !args.includes(item);
//   });
// }

// function destroyer(arr) {
//   var args = Array.prototype.slice.call(arguments);

//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < args.length; j++) {
//       if (arr[i] === args[j]) {
//         delete arr[i];
//       }
//     }
//   }
//   return arr.filter(Boolean);
// }

// const destroyer = (arr, ...args) =>  {
//    console.log("args: ", ...args)
//    return arr.filter(i => !args.includes(i))
// };

// const churp = destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// console.log(churp)

// *************************************************************************************************************************************************************
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). 
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
// *************************************************************************************************************************************************************


// function whatIsInAName(collection, source) {
//   console.log("collection: ", collection)
//   console.log("###########")
//   console.log(collection[0].first)
//   // What's in a name?
//   var arr = [];
//   // Only change code below this line
  
  
//   // Only change code above this line
//   return arr;
// }

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });