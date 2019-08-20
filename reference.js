console.log(months[0].days)
var sum = 0;
var leapYear = true;

if (leapYear) {
    months[1].days = 29;
    months.forEach(item => {
        sum += item.days
    
    })
}
else {
   months.forEach(item => {
        sum += item.days
    
    })
}


console.log(sum)