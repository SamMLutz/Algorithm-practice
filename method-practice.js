// *************************************************************************************************************************************************************
// .map() is used to apply a function on every element in an array. A new array is then returned.
// *************************************************************************************************************************************************************

// syntax example
// let newArr = oldArr.map((val, index, arr) => {
//     // return element to new Array
//   });

// *************************************************************************************************************************************************************

// example function 1 
// *************************************************************************************************************************************************************

// let arr = [1,2,3,4];

// let plus5 = arr.map((val, i, arr) => {
//     return val + 5;
//   });

// *************************************************************************************************************************************************************

//   example function 2: 
//   In this example we’ll utilize both the value and index arguments. We’ll start with the same basic array as last time:

// let arr = [1,2,3,4];

// let newArr = arr.map((val, i, arr) => {
//     return {
//       value: val,
//       index: i
//     };
//   });

// console.log(newArr);

// *************************************************************************************************************************************************************

// example map function #3
// Up to this point, all of our examples have transformed all of the values in the old array. What if we only want to transform some of the values in our array? 
// There are a number of ways we could tackle this problem, here’s one possible solution.
// *************************************************************************************************************************************************************

// let arr = [1,2,3,4];

// let newArr = arr.map((v,i,a) => {
//     return v % 2 === 0 ? v * 2 : v;
//   });

// console.log(newArr);

// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************
// .filter()
// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************

// var ages = [32, 33, 16, 40];

// function checkAdult(age) {
//   return age >= 18;
// }

// var oldPeople = ages.filter(checkAdult)
// console.log(oldPeople);

// var newArr = ages.filter(item => item < 33)
// console.log(`newArr = ${newArr}`);

// *************************************************************************************************************************************************************
// REDUCE EXAMPLES
// *************************************************************************************************************************************************************

// const myArray = [100, 200, 300];

// // Function which is going to sum all numbers in an array
// const sumCallbackFunction = function (accumulator, currentElement) {
//     // For each element, create a new sum which is the previous sum + the current element
//     const newSum = currentElement + accumulator;
//     // Return the new sum for the next element
//     return newSum;
// };

// const sum = myArray.reduce(
//     sumCallbackFunction,
//     0 /* The initial value */
// );

// console.log(sum); // Prints 600

// *************************************************************************************************************************************************************

// Initial array of people with wrong first names
// const people = [
//     { firstName: 'michael', lastName: 'Scott' },
//     { firstName: 'jim', lastName: 'Halpert' },
//     { firstName: 'dwight', lastName: 'Schrute' }
// ];

// // Callback function which will fix the first name of each person
// const fixFirstNameCallbackFunction = function (accumulator, currentElement) {
//     // Generate a correct person object by changing the first letter of the first name
//     const fixedPerson = {
//         ...currentElement,
//         firstName:
//             currentElement.firstName.charAt(0).toUpperCase() +
//             currentElement.firstName.slice(1)
//     };

//     // Return the value for the next step by using the array from the previous step and
//     // add the new fixed person
//     return [...accumulator, fixedPerson];
// };

// // Use the callback function in the reduce function
// const fixedPeople = people.reduce(
//     fixFirstNameCallbackFunction,
//     [] // Initial value is an empty array which will be filled with the corrected people
// );

// console.dir(fixedPeople);

// *************************************************************************************************************************************************************
// map function built with reduce()
// *************************************************************************************************************************************************************

// const people = ['Andy', 'Terry', 'Amy'];

// // A generic map function which will apply a function to each element
// const mapFunction = function(array, mapFn) {
//     // The reduce function should generate an array with the same amount of elements
//     return array.reduce(function(accumulator, currentValue) {
//         // The entering map function will be applied to each element
//         const mappedValue = mapFn(currentValue);

//         // The new mapped value will be added to the ever growing array
//         return [...accumulator, mappedValue];
//     }, []);
// };

// // A simple function which will be applied to each element
// const addTheGreat = function(element) {
//     return `The great ${element}`;
// };

// const theGreatPeople = mapFunction(people, addTheGreat);

// // The output of these logs should be the same:
// // [ 'The great Andy', 'The great Terry', 'The great Amy' ]
// console.log(theGreatPeople);
// console.log(people.map(addTheGreat));
// *************************************************************************************************************************************************************

// const data = [115, 26, 99];

// const callbackFunction = function(
//     accumulator,
//     currentElement,
//     currentIndex,
//     array
// ) {
//     // Get the maximum by checking first if there is a maximum from the previous step
//     const maximum = accumulator.maximum
//         ? // If there is, then check if the current element is higher than the previous maximum
//           accumulator.maximum < currentElement
//             ? currentElement
//             : accumulator.maximum
//         : // If there isn't, use the current element right away
//           currentElement;

//     // Get the minimum by checking first if there is a minimum from the previous step
//     const minimum = accumulator.minimum
//         ? // If there is, then check if the current element is lower than the previous maximum
//           accumulator.minimum > currentElement
//             ? currentElement
//             : accumulator.minimum
//         : // If there isn't, use the current element right away
//           currentElement;

//     // Get the average by checking if we're at the last step (where it we can finally calculate the average)
//     const average =
//         currentIndex === array.length - 1
//             ? (accumulator.average + currentElement) / array.length
//             : // If we're not at the last step, check if there even is a value from the previous step
//             accumulator.average
//                 ? accumulator.average + currentElement
//                 : currentElement;

//     // Return the value for the next element
//     return {
//         maximum,
//         minimum,
//         average
//     };
// };

// const result = data.reduce(callbackFunction, {});
// console.log(result); // Returns { maximum: 115, minimum: 26, average: 80 }


// *************************************************************************************************************************************************************
// Math.ceil()
// *************************************************************************************************************************************************************

// function round5(x)
// {
//     return Math.ceil(x/5)*5;
// }

// console.log(round5(3));

// function round10(x)
// {
//     return Math.ceil(x/10)*10;
// }

// console.log(round10(3));

// *************************************************************************************************************************************************************
// function to return an array of numbers of the range between start and end
// *************************************************************************************************************************************************************

// function range(start, end) {
//     var ans = [];
//     for (let i = start; i <= end; i++) {
//         ans.push(i);
//     }
//     return ans;
//   }

// function countPairs(n, arr) {
//     let pairs = 0;
//     const results = []
//     let sortedArr = arr.slice().sort()
//     console.log(sortedArr);

//     for (var i = 0; i < sortedArr.length -1; i++) {
//       if (sortedArr[i +1] == sortedArr[i]) {
//         results.push(sortedArr[i])
//       }
//     }
//     console.log(results)
//   }

//   countPairs(7, [1,2,1,2,1,3,2])

// *************************************************************************************************************************************************************
// .concat() example
// *************************************************************************************************************************************************************

// function nonMutatingConcat(original, attach) {
//     // Add your code below this line
//     return original.concat(attach)
    
//     // Add your code above this line
//   }
//   var first = [1, 2, 3];
//   var second = [4, 5];
//   nonMutatingConcat(first, second);

// *************************************************************************************************************************************************************
// functional programming approach to splice (better to use slice and not mutate)
// *************************************************************************************************************************************************************
// function nonMutatingSplice(cities) {
//     // Add your code below this line
//     const newArr = cities.slice(0, 3);
//     return newArr
//     // return cities.splice(3);
    
//     // Add your code above this line
//   }
  
//   var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
 
//   console.log(nonMutatingSplice(inputCities));

// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************
// SPREAD AND REST OPERATOR EXAMPLES
// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************
//              spread
// const numbers1 = [ 3, 4, 5];
// const numbers2 = [ 1, 2, ...numbers1, 6,7,8];

// console.log(numbers2)

//              rest
// function sum(...numbers) {
//     return numbers.reduce((accumulator, current) => {
//         return accumulator += current;
//     });
// };

// sum(1, 2) // 3
// sum(1, 2, 3, 4, 5) // 15



// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************
// Bubble sort algorithm examples
// Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted,
// compares each pair of adjacent items and swaps them if they are in the wrong order.
// The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.
// *************************************************************************************************************************************************************

// array to sort
// var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// // swap function helper
// function swap(array, i, j) {
//   var temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }

// // be careful: this is a very basic implementation which is nice to understand the deep principle of bubble sort (going through all comparisons) but it can be greatly improved for performances
// function bubbleSortBasic(array) {
//   for(var i = 0; i < array.length; i++) {
//     for(var j = 1; j < array.length; j++) {
//       if(array[j - 1] > array[j]) {
//         swap(array, j - 1, j);
//       }
//     }
//   }
//   return array;
// }

// console.log(bubbleSortBasic(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// // correct implementation: this is the usual implementation of the bubble sort algorithm. Some loops execution are avoided if not they are not needed

// function bubbleSort(array) {
//   var swapped;
//   do {
//     swapped = false;
//     for(var i = 0; i < array.length; i++) {
//       if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
//         swap(array, i, i + 1);
//         swapped = true;
//       }
//     }
//   } while(swapped);
//   return array;
// }

// console.log(bubbleSort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// *************************************************************************************************************************************************************
// example with counters

// sample of arrays to sort
// var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
// var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// // swap function helper
// function swap(array, i, j) {
//   var temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }

// // be careful: this is a very basic implementation which is nice to understand the deep principle of bubble sort (going through all comparisons) but it can be greatly improved for performances
// function bubbleSortBasic(array) {
//   var countOuter = 0;
//   var countInner = 0;
//   var countSwap = 0;

//   for(var i = 0; i < array.length; i++) {
//     countOuter++;
//     console.log('outer', array)
//     console.log("###################")
//     for(var j = 1; j < array.length; j++) {
//       countInner++;
//       console.log('inner', array)
//       if(array[j - 1] > array[j]) {
//         countSwap++;
//         swap(array, j - 1, j);
//         console.log('swap', array)
//       }
//     }
//   }

//   console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
//   return array;
// }

// bubbleSortBasic(arrayRandom.slice()); // => outer: 10 inner: 90 swap: 21
// console.log(bubbleSortBasic(arrayRandom.slice()))
// bubbleSortBasic(arrayOrdered.slice()); // => outer: 10 inner: 90 swap: 0
// console.log(bubbleSortBasic(arrayOrdered.slice()))
// bubbleSortBasic(arrayReversed.slice()); // => outer: 10 inner: 90 swap: 45
// console.log(bubbleSortBasic(arrayReversed.slice()))

// correct implementation: this is the usual implementation of the bubble sort algorithm. Some loops execution are avoided if not they are not needed
// function bubbleSort(array) {
//   var countOuter = 0;
//   var countInner = 0;
//   var countSwap = 0;

//   var swapped;
//   do {
//     countOuter++;
//     swapped = false;
//     for(var i = 0; i < array.length; i++) {
//       countInner++;
//       if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
//         countSwap++;
//         swap(array, i, i + 1);
//         swapped = true;
//       }
//     }
//   } while(swapped);

//   console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
//   return array;
// }

// bubbleSort(arrayRandom.slice()); // => outer: 9 inner: 90 swap: 21
// bubbleSort(arrayOrdered.slice()); // => outer: 1 inner: 10 swap: 0
// bubbleSort(arrayReversed.slice()); // => outer: 10 inner: 100 swap: 45


// *************************************************************************************************************************************************************
// THE ARGUMENTS OBJECT
// *************************************************************************************************************************************************************

// arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

// function func1(a, b, c) {
//     console.log(arguments[0]);
//     // expected output: 1
  
//     console.log(arguments[1]);
//     // expected output: 2
  
//     console.log(arguments[2]);
//     // expected output: 3
//   }
  
//   func1(1, 2, 3);


//   The arguments object is a local variable available within all non-arrow functions. You can refer to a function's arguments inside that function by using its arguments object. 
//   It has entries for each argument the function was called with, with the first entry's index at 0.

//   For example, if a function is passed 3 arguments, you can access them as follows:
  
//   arguments[0] // first argument
//   arguments[1] // second argument
//   arguments[2] // third argument
  
//   Each argument can also be set or reassigned:
  
//   arguments[1] = 'new value';


// The arguments object is not an Array. It is similar, but does not have any Array properties except length. For example, it does not have the pop() method. However, it can be converted to a real Array:
// *************************************************************************************************************************************************************

// var args = Array.prototype.slice.call(arguments);
// // Using an array literal is shorter than above but allocates an empty array
// var args = [].slice.call(arguments);

// // As you can do with any Array-like object, you can use ES2015's Array.from() method or spread syntax to convert arguments to a real Array:

// var args = Array.from(arguments);
// var args = [...arguments];


// The arguments object is useful for functions called with more arguments than they are formally declared to accept. 
// This technique is useful for functions that can be passed a variable number of arguments, such as Math.min(). 
// This example function accepts any number of string arguments and returns the longest one:

// function longestString() {
//   var longest = '';
//   for (var i=0; i < arguments.length; i++) {
//     if (arguments[i].length > longest.length) {
//       longest = arguments[i];
//     }
//   }
//   return longest;
// }

// const longestString = longestString("churp", "yurpydurp", "scuuuuuuuuuuuurp")
// console.log(longestString)

// You can use arguments.length to count how many arguments the function was called with. 
// If you instead want to count how many parameters a function is declared to accept, inspect that function's length property.

// The typeof operator returns 'object' when used with arguments

// console.log(typeof arguments); // 'object'
// The type of individual arguments can be determined by indexing arguments:

// console.log(typeof arguments[0]); // returns the type of the first argument

// *************************************************************************************************************************************************************

// Defining a function that concatenates several strings
// This example defines a function that concatenates several strings. The function's only formal argument is a string containing the characters that separate the items to concatenate.

// function myConcat(sep) {
//   var args = Array.prototype.slice.call(arguments, 1);
//   console.log(args.join(sep))
//   return args.join(sep);
// }

// // You can pass as many arguments as you like to this function. It returns a string list using each argument in the list:

// // returns "red, orange, blue"
// myConcat(', ', 'red', 'orange', 'blue');

// // returns "elephant; giraffe; lion; cheetah"
// myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');

// // returns "sage. basil. oregano. pepper. parsley"
// myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');

// *************************************************************************************************************************************************************

// Defining a function that creates HTML lists
// *************************************************************************************************************************************************************
// This example defines a function that creates a string containing HTML for a list. 
// The only formal argument for the function is a string that is "u" if the list is to be unordered (bulleted), or "o" if the list is to be ordered (numbered). The function is defined as follows:

// function list(type) {
//   var html = '<' + type + 'l><li>';
//   var args = Array.prototype.slice.call(arguments, 1);
//   html += args.join('</li><li>');
//   html += '</li></' + type + 'l>'; // end list

//   return html;
// }

// // You can pass any number of arguments to this function, and it adds each argument as a list item to a list of the type indicated. For example:

// var listHTML = list('u', 'One', 'Two', 'Three');
// console.log(listHTML)
// /* listHTML is:
// "<ul><li>One</li><li>Two</li><li>Three</li></ul>"
// */

// Rest, default, and destructured parameters
// *************************************************************************************************************************************************************
// The arguments object can be used in conjunction with rest, default, and destructured parameters.

// function foo(...args) {
//   return args;
// }
// foo(1, 2, 3); // [1,2,3]
// While the presence of rest, default, or destructured parameters does not alter the behavior of the arguments object in strict mode code, 
// there is a subtle difference for non-strict code.

// If a non-strict function does not contain rest, default, or destructured parameters, then the values in the arguments object do change in sync with the values of the argument variables. 
// See the code below:
// // *************************************************************************************************************************************************************

// Difference between rest parameters and the arguments objectSection
// *************************************************************************************************************************************************************
// There are three main differences between rest parameters and the arguments object:

// 1. rest parameters are only the ones that haven't been given a separate name (i.e. formally defined in function expression), while the arguments object contains all arguments passed to the function;
// 2. the arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly;
// 3. the arguments object has additional functionality specific to itself (like the callee property).