// *************************************************************************************************************************************************************
// *************************************************************************************************************************************************************
// .map() is used to apply a function on every element in an array. A new array is then returned.
// *************************************************************************************************************************************************************
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
var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// be careful: this is a very basic implementation which is nice to understand the deep principle of bubble sort (going through all comparisons) but it can be greatly improved for performances
function bubbleSortBasic(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;

  for(var i = 0; i < array.length; i++) {
    countOuter++;
    console.log('outer', array)
    console.log("###################")
    for(var j = 1; j < array.length; j++) {
      countInner++;
      console.log('inner', array)
      if(array[j - 1] > array[j]) {
        countSwap++;
        swap(array, j - 1, j);
        console.log('swap', array)
      }
    }
  }

  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}

bubbleSortBasic(arrayRandom.slice()); // => outer: 10 inner: 90 swap: 21
// console.log(bubbleSortBasic(arrayRandom.slice()))
// bubbleSortBasic(arrayOrdered.slice()); // => outer: 10 inner: 90 swap: 0
// console.log(bubbleSortBasic(arrayOrdered.slice()))
// bubbleSortBasic(arrayReversed.slice()); // => outer: 10 inner: 90 swap: 45
// console.log(bubbleSortBasic(arrayReversed.slice()))

// correct implementation: this is the usual implementation of the bubble sort algorithm. Some loops execution are avoided if not they are not needed
function bubbleSort(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;

  var swapped;
  do {
    countOuter++;
    swapped = false;
    for(var i = 0; i < array.length; i++) {
      countInner++;
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        countSwap++;
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);

  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}

// bubbleSort(arrayRandom.slice()); // => outer: 9 inner: 90 swap: 21
// bubbleSort(arrayOrdered.slice()); // => outer: 1 inner: 10 swap: 0
// bubbleSort(arrayReversed.slice()); // => outer: 10 inner: 100 swap: 45

