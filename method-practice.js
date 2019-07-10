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

function round5(x)
{
    return Math.ceil(x/5)*5;
}

console.log(round5(3));

function round10(x)
{
    return Math.ceil(x/10)*10;
}

console.log(round10(3));

function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
  }