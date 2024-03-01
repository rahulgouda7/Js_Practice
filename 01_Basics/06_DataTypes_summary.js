// Primitive
// 7 types: string, Number, Boolean, null, undefined, Symbol(make a value unique), BigInt
const score= 10
const scoreValue= 100.3
const isLoggedin= false
const outsideTemp= null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id===anotherId);



// Reference Type(Non primitive)
// Array, Objects, Functions
const heros =["shaktiman", "naagraj", "doga"]

let myObj = {
    name:"Rahul",
    age: 22,
}

const myFunction=function (){
    console.log("Hello world");
}
//  +++++++++++++++++++++++++++++++++
// stack (primitive), Heap(Non primitive) 

let myYoutubename = "cricketVisual"
let anothername =myYoutubename
 anothername = "rahulgouda"
console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email="rahulgouda589@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);