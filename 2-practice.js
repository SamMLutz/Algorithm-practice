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


const maskify = str => {
    str = str.split('')
    console.log(str)
    let lastFour = str.slice(-4)
    console.log(lastFour)
    const toEncrypt = str.slice(0,-4)
    console.log(toEncrypt)
    const encrypted = toEncrypt.map(item => item = "#")
    console.log(encrypted)
    const newArr = encrypted.concat(lastFour)
    console.log(newArr)
    
}

maskify('1234567')

// const arr = [1,2,3,4]

// const newArr = arr.map(item => item = "#")

// console.log(newArr)

