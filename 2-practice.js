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

