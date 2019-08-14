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


function bonAppetit(bill, k, b) {
    let billTotal = 0;
    let refund;
    let newTotal;
    const itemNotShared = bill[k]
    let splitBill;

    bill.forEach(item => {
        billTotal += item
    });

    newTotal = billTotal - itemNotShared;

    splitBill = newTotal / 2;

    refund = b - splitBill;

    console.log(billTotal)
    console.log(`newTotal: ${newTotal}`)
    console.log(`splitBill: ${splitBill}`)
    console.log(`refund: ${refund}`)

    if (refund === 0) {
        console.log("correctly calculated")
    }
    else {
        console.log(`Brian owes Anna $${refund}`)
    }
}

bonAppetit([3, 10, 2, 9], 1, 7)