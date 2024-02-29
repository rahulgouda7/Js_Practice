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