// largest in a array
const arr = [1,4,5,6,7,9,3]
const biggest = arr.forEach(item => {
    let target = 0;

    if (item > target) {
        target = item;
    }
    else {
        console.log('error yoooo')
    }
    console.log(target)
    return target;
})

console.log(biggest)