const name ="Rahul"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//  Alternative way to create a string
const gameName = new String('Rahul-Gouda-com')
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));
const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   Rahul   "
console.log(newStringOne)
console.log(newStringOne.trim());


const url = "https://rahul.com/rahul%20gouda"
console.log(url.replace('%20', '-'))
console.log(gameName.split('-'))
