// largest in a array
// const arr = [1,4,5,6,7,9,3]
// let target = 0;

// const biggest = arr.forEach(item => {

//     if (item > target) {
//         target = item;
//     }
//     else {
//         console.log('working')
//     }
//     console.log(target)
//     return target;
// })

const getBiggest = arr => {
    let target = 0;
    arr.forEach(item => {
        if (item > target) {
            target = item;
        }
        else {
            console.log('working')
        }
        console.log(target)
        return target;
    })
}


// console.log(biggest)
getBiggest([10,9,67,54])