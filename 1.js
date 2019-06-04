// This challenge requires you to add up all the numbers from 1 to a given argument. For example,
//  if the parameter num is 4, your program should add up 1 + 2 + 3 + 4 and return 10. This will be 
//  pretty simple to write out as a loop. We'll maintain a variable and keep adding to it as we loop from 1 to num.
// function simpleAdding(num) {
//     var answer = 0;
//     for (var i = 1; i <= num; i++) {
//         answer = answer + i;
//         // console.log(answer);
//     }
//     return answer;
// }
// simpleAdding(8);

// function compareTriplets(a, b) {
//     var scores = [0,0]

//     for (var i = 0; i < a.length; i++) {
//         for (var j =0; j < b.length; j++) {
//             if (a[i] > b[j]) {
//                 scores[0]++
//             }
//             else if (a[i] < b[j]) {
//                 scores[1]++
//             }
//             else {
//                 console.log("no points awarded for this round")
//             }
//         }
//     }
//     console.log(scores)
// }


// compareTriplets([1, 5, 3], [2, 4, 6])

// function titleCase(str) {
//     // split the string into an arr of words
//     var newStr = str.split(" ")
//     var currentWordArr = []

//     // console.log(newStr)
//     for (var i = 0; i < newStr.length; i++) {
//         var currentWord = newStr[i];
//         currentWord = currentWord.split('')
//         //   console.log(currentWordArr)
//         currentWordArr.push(currentWord)

//         //   currentWord = currentWord.charAt(0).toUpperCase()
//     }
    
//     for (var j = 0; j < currentWordArr.length; j++){
//         var wordArr = currentWordArr[j]
//         // console.log(wordArr)
//         wordArr = wordArr[0].charAt(0).toUpperCase();
//         console.log(wordArr)

//     }
//     // console.log(currentWordArr)
//     // 
//     return str;
// }

// titleCase("I'm a little tea pot");


// let compareTriplets = (a, b) => {
//     let scores = [0,0]

//     a.foreach(item, index) => {
//         console.log(item,index)
//     }

// };


// compareTriplets([1, 5, 3], [2, 4, 6, 7]);

// [11, 2,  4];
// [4,  5,  6]
// [10, 8, -12]

function diagonalDifference(arr) {
    // split the array into {num} arrays of equal length
    var length = arr.length
    // console.log(length)
    var sqrt = Math.sqrt(length)
    // console.log(sqrt)
    // var array = arr.length % sqrt;
    // console.log(array)
    // var res = [];
    // function split(arr, n) {
    //   while (arr.length) {
    //     res.push(arr.splice(0, n));
    //   }
    //   return res;
    // }
    // split(arr, sqrt)
    // console.log(res)
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

  diagonalDifference([11, 2, 4, 4, 5, 6, 10, 8, -12])
//   diagonalDifference([-1,1,-7,-8,-10,-8,-5,-2,0,9,7,-1,4,4,-2,1])