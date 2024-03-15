// for of

// ["", "", " "]

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
// }

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

const map = new Map()
map.set('IN', "INDIA")
map.set('US',"USA")
map.set('Fr', "France")
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}