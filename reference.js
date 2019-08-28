// console.log(months[0].days)
// var sum = 0;
// var leapYear = true;

// if (leapYear) {
//     months[1].days = 29;
//     months.forEach(item => {
//         sum += item.days
    
//     })
// }
// else {
//    months.forEach(item => {
//         sum += item.days
    
//     })
// }


// console.log(sum)


// var str = 'To be, or not to be, that is the question.';

// console.log(str.includes('To be')); 


// function mutation(arr) {
    
//     console.log(arr[0].includes(arr[1]))
//   }
  
//   mutation(["hello", "hey"]);

// *************************************************************************************************************************************************************
// swap helper function
// *************************************************************************************************************************************************************

// function swap(array, i, j) {
//   var temp = array[i];
//   console.log(temp, array[i], array[j]);
//   array[i] = array[j];
//   // console.log(temp)
//   console.log(temp, array[i], array[j]);
//   array[j] = temp;
//   // console.log(temp)
//   console.log(temp, array[i], array[j]);
// }

// swap([1,3,6,5,3], 0, 1)

// var result = "";
// var i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// console.log(result);

// var finalArr = []
// var arr = [1,2,3,4,5,6,7,8,9]

// do {
//   let newArr = arr.splice(0,2);
//   finalArr.push(newArr)
// } while (arr.length >= 2)

// finalArr.push(arr);

// console.log("finalArr: ", finalArr)

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + dog.numLegs + " legs."
  }
};

dog.sayLegs();

