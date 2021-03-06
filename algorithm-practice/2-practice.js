
// *************************************************************************************************************************************************************
// given a number, find its opposite.
// *************************************************************************************************************************************************************

// function opposite(number) {
//     //your code here
//     return (-number)
// }

// function opposite(number) {
//     //your code here
//     return number * -1
// }


// *************************************************************************************************************************************************************
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is 
// still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// *************************************************************************************************************************************************************

// PSEUDOCODE

//     PARAMETERS
//         str

//     VARIABLES
//         arr = str.split()
//         lastFour;
//         toEncrypt;
//         encrypted;
//         newArr


//     split str into an array 
//     slice the last four items off and store in lastFour
//     store the rest of the array in toEncrypt
//     loop over the toEncrypt array and replace each item with #
//     store new array in encrypted var 
//     join encrypted with lastFour 

//      


// const maskify = str => {
//     str = str.split('')
//     console.log(str)
//     let lastFour = str.slice(-4)
//     console.log(lastFour)
//     const toEncrypt = str.slice(0,-4)
//     console.log(toEncrypt)
//     const encrypted = toEncrypt.map(item => item = "#")
//     console.log(encrypted)
//     const newArr = encrypted.concat(lastFour)
//     console.log(newArr)
// }

// maskify('1234567')


// *************************************************************************************************************************************************************
// get all vowels out of a given string
// *************************************************************************************************************************************************************

// function disemvowel(str) {
//     const vowels = ["a","e","i","o","u"]
//     const vowelHolder = []
//     let newStr = str.toLowerCase()
//     // console.log(newStr)
//     newStr = newStr.split('')
//     console.log(newStr)

// //     newStr.forEach(item => {
// //         console.log(item)
// //         if (item === "a"||"e"||"i"||"o"||"u") {
// //             vowelHolder.push(item)
// //         }
// //     })
// //     console.log("vowelHolder: " +  vowelHolder)
// }

// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');

// }

//   console.log(disemvowel("Yurp and the Churps nurp hard"))


// *************************************************************************************************************************************************************
// Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, 
// assuming the mouse doesn't move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

// You are given "q" queries in the form of 'x','y', and 'z' representing the respective positions for cats A and B, and for mouse C. Complete the function catAndMouse to return the 
// appropriate answer to each query, which will be printed on a new line. 
// If cat A catches the mouse first, print Cat A.
// If cat B catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.
// For example, cat A is at position x=2 and cat B is at y=5. If mouse C is at position z=4, it is 2 units from cat a and 1 unit from cat B. Cat  will catch the mouse.
// *************************************************************************************************************************************************************

// PSUEDOCODE

//   Parameters 
//     catPosA
//     catPosB
//     mousePosC

//   Variables
//     distanceAToC
//     distanceBToC

//   calculate distance from catA and catB to mouseC respectively using abs value
//     catPosA - mousePosC = distanceAToC
//     catPosB - mousePosC = distanceBToC

//   check each distance against each other 
//     if (distanceAToC < distanceBToC)
//       log catA 
//     else if (distanceAToC > distanceBToC)
//       log catB
//     else
//       log mouseC



// function catAndMouse(x, y, z) {
//   const distanceAToC = Math.abs(x - z);
//   const distanceBToC = Math.abs(y - z);
//   console.log(distanceAToC)
//   console.log(distanceBToC)

//   if (distanceAToC < distanceBToC) {
//     console.log("catA")
//   }
//   else if (distanceAToC > distanceBToC) {
//     console.log("catB")
//   }
//   else {
//     console.log("mouseC")
//   }

// }

// catAndMouse(1, 3, 2)

// *************************************************************************************************************************************************************

// *************************************************************************************************************************************************************

// PSEUDOCODE

//     parameters 
//         year 

//     variables
//         leapYear = false;
//         calendar;



//     determine by year which calendar system we are using 
//         if (year < 1918)
//             calendar = julian
//         else if (year > 1917)
//             calendar = gregorian

//     determine by the calendar and year if we are in a leap year
//         if (calendar === julian)
//             if (year % 4 === 0)
//                 leapYear = true;
//             else 
//                 leapYear = false

//         else if (calendar === gregorian)
//             if (year % 400 === 0)
//                 leapYear = true;
//             else if (year % 4 === 0 && year % 100 !== 0) 
//                 leapYear = true;
//             else    
//                 leapYear = false

//     determine num of days in first 8 months based on calendar and leapyear status
//         if (calendar === julian && leapYear)
//             feb++


// const months = [
//     {
//         name: "jan",
//         days: 31
//     },
//     {
//         name: "feb",
//         days: 28
//     },
//     {
//         name: "march",
//         days: 31
//     },
//     {
//         name: "april",
//         days: 30
//     },
//     {
//         name: "may",
//         days: 31
//     },
//     {
//         name: "june",
//         days: 30
//     },
//     {
//         name: "july",
//         days: 31
//     },
//     {
//         name: "august",
//         days: 31
//     },
// ]

// function dayOfProgrammer(year) {
//     let leapYear = false;
//     let calendar;
//     let daysOfMonthSum = 0;
//     let programmerDay = 256;

//     if (year < 1918) {
//         calendar = "julian"
//     }
//     else if (year > 1917) {
//         calendar = "gregorian"
//     }
//     console.log(`calendar: ${calendar}`)

//     if (calendar === "julian") {
//         if (year % 4 === 0) {
//             leapYear = true;
//         }
//         else {
//             leapYear = false;
//         }
//     }
//     console.log(leapYear)

//     if (calendar === "julian" && leapYear === false) {
//         months.forEach(item => {
//             daysOfMonthSum += item.days

//         })
//         console.log(daysOfMonthSum)
//         const septDate = programmerDay - daysOfMonthSum
//         console.log(`day of the programmer: ${septDate}.09.${year}`)
//     }
//     else if (calendar === "julian" && leapYear === true) {
//         months[1].days = 29;
//         months.forEach(item => {
//             daysOfMonthSum += item.days

//         })
//         console.log(daysOfMonthSum)
//         const septDate = programmerDay - daysOfMonthSum
//         console.log(`day of the programmer: ${septDate}.09.${year}`)
//     }
// }

// dayOfProgrammer(1927)

// *************************************************************************************************************************************************************
// Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally. Brian wants to order something that Anna is allergic to though, 
// and they agree that Anna won't pay for that item. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.
// For example, assume the bill has the following prices: bill = [2,4,6]. Anna declines to eat item K  which costs 6. If Brian calculates the bill correctly, Anna will pay (2+4)/2 =3. 
// If he includes the cost of bill[2], he will calculate (2 + 4 + 6)/2 = 6. In the second case, he should refund 3 to Anna.
// *************************************************************************************************************************************************************

// PSEUDOCODE

//     parameters 
//         bill = an array of integers representing food items;
//         k = an integer representing the zero-based index of the item Anna doesn't eat
//         a = the amount of money that Anna contributed to the bill

//     variables
//         billTotal = sum of bill integers
//         refund = how much anna needs to be refunded
//         newTotal = total minus item k

//     calculate bill totalBill
//         totalBill;

//     calculate totalBill without item k
//         newTotal = totalBill - k

//     calculate splitBill from newTotal
//         splitBill = newTotal / 2

//     compare splitBill to b  
//         if (splitBill === b) 
//             log "correct"
//         else if (splitBill !== b)
//             refund = b - splitBill
//             log "you owe anna (refund)"


// function bonAppetit(bill, k, b) {
//     let billTotal = 0;
//     let refund;
//     let newTotal;
//     const itemNotShared = bill[k]
//     let splitBill;

//     bill.forEach(item => {
//         billTotal += item
//     });

//     newTotal = billTotal - itemNotShared;

//     splitBill = newTotal / 2;

//     refund = b - splitBill;

//     console.log(billTotal)
//     console.log(`newTotal: ${newTotal}`)
//     console.log(`splitBill: ${splitBill}`)
//     console.log(`refund: ${refund}`)

//     if (refund === 0) {
//         console.log("correctly calculated")
//     }
//     else {
//         console.log(`Brian owes Anna $${refund}`)
//     }
// }

// bonAppetit([3, 10, 2, 9], 1, 7)

// *************************************************************************************************************************************************************
// Brie’s Drawing teacher asks her class to open their books to a page number. Brie can either start turning pages from the front of the book or from the back of the book. 
// She always turns pages one at a time. When she opens the book, page 1 is always on the right side:
// When she flips page 1, she sees pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, 
// given the length of the book. If the book is N pages long, and she wants to turn to page P, what is the minimum number of pages she will turn? 
// She can start at the beginning or the end of the book. Given N and P, find and print the minimum number of pages Brie must turn in order to arrive at page P
// *************************************************************************************************************************************************************

// PSUEDOCODE

//     parameters 
//         n = number of total pages in book;
//         p = the page brie wants to turn to

//     variables
//         pagesToTurn;
//         turnFromFront = true;

//     calculate if p is closer to 1 or n  
//         diffToOne = abs(1 - p)
//         diffToEnd = abs(p -n)

//     determine if we will turn pages from front or back
//         if (diffToOne > diffToEnd)
//             turnFromFront = false;
//         else if (diffToOne < diffToEnd)
//             turnFromFront = true;

//     once we know which way we are turning. determine how many pages need be turned 
//         if (diff < 2 )
//             pagesToTurn = 1;
//         else if (diff > 2)
//             loop diff
//                 if (i % 2 === 0)
//                     pagesToTurn +=1


// function pageCount(n, p) {
//     let turnFromFront;
//     let pagesToTurn = 0;

//     const diffToOne = Math.abs(1 - p)
//     console.log(`diffToOne: ${diffToOne}`)

//     const diffToEnd = Math.abs(n - p)
//     console.log(`diffToEnd: ${diffToEnd}`)

//     if (diffToOne > diffToEnd) {
//         turnFromFront = false;
//     }
//     else {
//         turnFromFront = true;
//     }

//     if (turnFromFront) {
//         console.log("yurp")
//         if (diffToOne <= 2) {
//             pagesToTurn = 1;
//         }
//         else {
//             for (var i = 0; i < diffToOne; i++) {
//                 // console.log(i)
//                 if (i % 2 === 0) {
//                     pagesToTurn += 1
//                 }
//             }
//         }
//         console.log(`pagesToTurn: ${pagesToTurn}`)
//     }
//     else {
//         if (!turnFromFront) {
//             console.log("churp")
//             if (diffToEnd <= 2) {
//                 pagesToTurn = 1;
//             }
//             else {
//                 for (var i = 0; i < diffToEnd; i++) {
//                     // console.log(i)
//                     if (i % 2 === 0) {
//                         pagesToTurn += 1
//                     }
//                 } 
//             }
//         }
//         console.log(`pagesToTurn: ${pagesToTurn}`)
//     }
// }

// pageCount(24, 16)


// *************************************************************************************************************************************************************
// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly N steps. 
// For every step he took, he noted if it was an uphill, U, or a downhill, D step. Gary's hikes start and end at sea level and each step up or down represents a 1 unit change in altitude.
// We define the following terms:
// -A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// -A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.
// *************************************************************************************************************************************************************

// PSUEDOCODE

//     PARAMETERS  
//         n = number of steps gary takes 
//         s = string describing garys path 

//     VARIABLES
//         seaLevel = 0;
//         step = 1;
//         pathArr;
//         valleys = 0;

//     first split the s string into an Array
//         loop the array and add or subtract a step based on letter of each index 
//             if (letter = 'd')
//                 subtract 1 step from seaLevel
//             else if (letter = 'u')
//                 add 1 step to seaLevel
//             END if

// if (seaLevel === 0 && letter[i] -1 === 'U')
//     add 1 to valleys;


// function countingValleys(n, s) {
//     let seaLevel = 0;
//     const step = 1;
//     let valleys = 0;
//     let pathArr = s.split('')
//     console.log(pathArr)

//     pathArr.forEach((item, index) => {
//         if (item === 'U') {
//             seaLevel += 1;
//         }
//         else {
//             seaLevel -= 1;
//         }
//         console.log(`seaLevel: ${seaLevel}`)
//         console.log(`index: ${index}`)

//         if (index > 1 && seaLevel === 0) {
//             console.log(`index back to seaLeval: ${index}`)
//         }
//     })

//     for (var i = 0; i < pathArr.length; i++) {
//         let currentValue = pathArr[i]
//         console.log(`currentValue: ${currentValue}`)
//         if (currentValue === 'U') {
//             seaLevel += 1;
//         }
//         else {
//             seaLevel -= 1;
//         }
//         console.log(`seaLevel: ${seaLevel}`)

//         if (seaLevel === 0 && currentValue === 'U') {
//             // if (pathArr[i -1]) {
//             // console.log(`pathArr[i-1]: ${pathArr[i -1]}`)
//             // console.log(`currentValue when seaLevel = 0: ${currentValue}`)
//             // }
//             valleys += 1
//         }
//     }
//     console.log(`Valleys: ${valleys}`)
// }

// countingValleys(12, 'UDDUDDUUDDUU')


// *************************************************************************************************************************************************************
// Monica wants to buy a keyboard and a USB drive from her favorite electronics store. The store has several models of each. 
// Monica wants to spend as much as possible for the 2 items, given her budget. Given the price lists for the store's keyboards and USB drives, and Monica's budget, 
// find and print the amount of money Monica will spend.
// If she doesn't have enough money to both a keyboard and a USB drive, print -1 instead. She will buy only the two required items.
// *************************************************************************************************************************************************************

// COME BACK TO SOLVE IF KEYBOARDS AND DRIVES ARE A SINGLE VALUE AND NOT AN ARRAY!!!!!!!!!!!!!!!!!!!!!!!!

// PSUEDOCODE

//     PARAMETERS 
//         b = units of currency in monicas budget
//         keyBoards = an array of keyboard prices
//         drives = array of drive prices

//     VARIABLES   
//         combinations = an array representing to all possible totals of 1 kb and 1 dr

//     first calculate the total price of all possible combinations of keyBoards and drives
//         loop over keyBoards array and create a new array for each item 
//             loop over drives and add each to the first loops current value and push to the combinations array

//     compare each index of the combinations array to b and pinpoint which is < b with the lowest abs difference


// function getMoneySpent(b, keyBoards, drives) {
//     let combinations = [];
//     let total;
//     let bestCaseTotal = 0;
//     keyBoards.forEach(item => {

//         drives.forEach(drive => {
//             console.log(`item: ${item}`)
//             console.log(`drive: ${drive}`)
//             total = item + drive;
//             console.log(`total: ${total}`)
//             console.log('################')
//             combinations.push(total)
//         })
//     })
//     console.log(`combinations: ${combinations}`)
//     const possibleTotals = combinations.filter(item => item < b)
//     console.log(`possibleTotals: ${possibleTotals}`)
//     possibleTotals.forEach(item => {
//         if (item > bestCaseTotal) {
//             bestCaseTotal = item;
//         }
//     })
//     console.log(`bestCaseTotal: ${bestCaseTotal}`)
//    }

// getMoneySpent(10, [3,1],[5,2,8])
// // getMoneySpent(5, 4, 5)


// *************************************************************************************************************************************************************
// Given an array of integers, find and print the maximum number of integers you can select from the array 
// such that the absolute difference between any two of the chosen integers is less than or equal to 1. 
// For example, if your array is A = [1,1,2,2,4,4,5,5,5], you can create two subarrays meeting the criterion: [1,1,2,2] and [4,4,5,5,5]. The maximum length subarray has  elements.
// *************************************************************************************************************************************************************

// PSUEDOCODE

//     PARAMETERS 
//         a = an array of integers

//     VARIABLES
//         newArrayOne = first new array made of integers that meet our criteria

//     loop the a array and compare the currentValue with the nextValue
//         if (abs(currentValue - nextValue <= 1))
//             push currentValue to newArrayOne




// function pickingNumbers(a) {
//     let newArrayOne = []

//     for (let i = 0; i < a.length; i++) {
//         let previousValue = a[i-1]
//         let currentValue = a[i];
//         let nextValue = a[i + 1]
//         if (Math.abs(currentValue - nextValue <= 1) || Math.abs(currentValue - previousValue <= 1)) {

//             if (currentValue - previousValue > 1) {
//                 console.log(`currentValue: ${currentValue}`)
//                 break;
//             }
//             newArrayOne.push(currentValue)
//         }
//     }
//     console.log(`newArrayOne: ${newArrayOne}`)    
// }

// pickingNumbers([1,1,2,2,4,4,5,5,5])

// function pickingNumbers(a) {

// }


// *************************************************************************************************************************************************************
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
// The returned value should be a number.
// *************************************************************************************************************************************************************

// PSEUDOCODE

//     PARAMETERS 
//         arr = an array of numbers 
//         num = num to be placed in arr

//     sort the array  
//         arr.sort()

//     loop thru the arr   
//         if (previousValue < num && nextValue > num) {

//         }


//     VARIABLES 
//         previousValue = arr[i-1];
//         nextvalue = arr[i+1];


// function getIndexToIns(arr, num) {
//     arr.sort(function(a,b){
//         return a -b;
//     })
//     console.log(arr)

//     if (arr.length === 0) {
//         console.log(`answer: 0`)
//         return 0;
//     }

//     for (let i = 0; i <arr.length; i++) {
//         let previousValue = arr[i-1];
//         let currentValue = arr[i]
//         let nextValue = arr[i+1];
//         let lastNum = arr[arr.length -1]
//         console.log(`previousValue: ${previousValue}`)
//         console.log(`currentValue: ${ currentValue}`)
//         console.log(`lastNum: ${lastNum}`)
//         console.log("############")



//         if (num <= arr[0]) {
//             console.log(`answer: 0`)
//             return 0;
//         }

//         if (previousValue < num && currentValue >= num) {

//             let indexToIns = arr.indexOf(currentValue)
//             console.log(`Insert at: ${indexToIns}`)
//             return indexToIns
//         }

//         if (num > lastNum) {
//             console.log(`insert at: ${arr.indexOf(lastNum) + 1}`)
//             return arr.indexOf(lastNum) + 1
//         }
//     }
// }

// getIndexToIns([10,20,30,40,50], 35)
// getIndexToIns([3, 10, 5], 3)
// getIndexToIns([2, 5, 10], 15)
// getIndexToIns([], 1)


// *************************************************************************************************************************************************************
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// *************************************************************************************************************************************************************

// PSEUDOCODE

//     PARAMETERS 
//         strOne = a string of letters
//         strTwo = a second string of letters

//     split strOne and strTwo into arrays and make them all lowercase
//         starting with index[0] of strTwo compare against each index of strOne
// loop strTwoArr 
//     if (string includes item) 
//         log true
//     else 
//         isTrue = false;


// function mutation(arr) {
//     let isTrue = true;
//     const strOneArr = arr[0].toLowerCase().split('');
//     console.log(`strOneArr: ${strOneArr}`)
//     const strTwoArr = arr[1].toLowerCase().split('');
//     console.log(`strTwoArr: ${strTwoArr}`)

//     strTwoArr.forEach(item => {
//         if (strOneArr.includes(item)) {
//             console.log(true)

//         }
//         else {
//             isTrue = false
//             console.log(false)
//         }
//     })
//     return isTrue;
//   }


// mutation(["Hello", "Hey"]); 
// console.log(mutation(["Hello", "Hey"]))


// *************************************************************************************************************************************************************
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
// *************************************************************************************************************************************************************

// PSEUDOCODE

//     parameters 
//         arr = array to be split 
//         size = integer to represent the size of each new array


// function chunkArrayInGroups(arr, size) {
//     // Break it up.
//     let newArr = arr.slice(0, size)
//     console.log(newArr)
//     console.log(`arr: ${arr}`)
//     let thirdArr = arr.slice(size, size * 2)
//     console.log("thirdArr: ", thirdArr)
//     return arr;
// }

// function chunkArrayInGroups(arr, size) {
//     // Break it up.
//     let finalArr = [];
//     let firstArr = arr.splice(0, size)
//     console.log("firstArr: ", firstArr)
//     finalArr.push(firstArr)
//     console.log("arr: ", arr)
    
//     if (arr.length > size) {
//         let secondArr = arr.splice(0, size);
//         finalArr.push(secondArr)
//     }
    
//     finalArr.push(arr);
//     console.log("finalArr: ", finalArr)
//     return finalArr
// }

// function chunkArrayInGroups(arr, size) {
//     const finalArr = [];
  
//     do {
//       let newArr = arr.splice(0, size)
//       finalArr.push(newArr)
//     } while (arr.length >= size)
  
//     if (arr.length > 0) {
//     finalArr.push(arr)
    
//     }
//     console.log("finalArr: ", finalArr)
//     return finalArr;
// }

// chunkArrayInGroups(["a", "b", "c", "d"], 2);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)


// *************************************************************************************************************************************************************
// check to see if a string is a pangram (containing every letter in the alpha at least once)
// *************************************************************************************************************************************************************

// var test1 = "The quick brown fox jumps over the lazy dog.";

// var isPangram = function(string) {

//   // If the string contains less than 26 letters, it couldn't have all 26 letters of the alphabet
//   if (string.length < 26) {
//     return false;
//   }
//   else {

//     // Holder for the unique letters found in the sentence
//     var letterHolder = [];

//     // Make the string lowercase, remove anything that isn't the letters a through z, then split them into an array
//     var letters = string.toLowerCase().replace(/[^a-z]+/g, "").split("");
//     console.log("letters: ", letters)
//     // loop over the letters, if a letter is not found in the letterHolder array, push it in
//     for (var i = 0; i < letters.length; i++) {
//       if (letterHolder.indexOf(letters[i]) === -1) {
//         letterHolder.push(letters[i]);
//       }
//     }

//     // Check to see if letterHolder.length contains the 26 letters of the alphabet.
//     if (letterHolder.length === 26) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
// };

// const answer = isPangram("The quick brown fox jumps over the lazy dog.")
// console.log(answer)

// *************************************************************************************************************************************************************

// Prime Checker: SOLUTION
// =======================

// Declare our primeCheck function
// function primeCheck(number) {

//     // Loop to check to see if a number has divisors other than one and itself.
//     // Note: Loops from two to one less than the number we're checking.
//     for (var i = 2; i < number; i++) {
  
//       // If the number is evenly divisible
//       // by a number between two and one less than itself,
//       // then it is not prime.
//       if (number % i === 0) {
  
//         // So return false.
//         console.log("false")
//         return false;
//       }
//     }
  
//     // A prime number has to be greater than one,
//     // even if it has a divisor other than one and itself.
//     return number > 1;
//   }

// const answer = primeCheck(15);
// console.log(answer)

// *************************************************************************************************************************************************************