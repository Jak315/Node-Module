var date = new Date()

// function myFunction(day) {
//     var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//     return weekday[day];
// }
// var currentDate = new Date().getDay();
// var week = [0, 1, 2, 3, 4, 5, 6];
// var a = week.splice(currentDate);
// var loopWeek = a.concat(week);
// var freshWeek = [];
// for (var i = 0; i < loopWeek.length; i++) {
//     freshWeek.push(myFunction(loopWeek[i]))
// }
// console.log(freshWeek);

date.getDate();

var week = ['mon', 'tue', 'wed', 'thrs', 'fri', 'sat', 'sun']

var time = date.getHours()

var day = date.getDay()

var min = date.getMinutes()

var second = date.getSeconds()


console.log(`today is ${week[day - 1]} day and now time is ${date.getHours()} hour ${min} min  ${second} second`);
