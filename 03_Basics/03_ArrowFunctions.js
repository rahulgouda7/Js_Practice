const user ={
    username: "Rahul",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
console.log(this);

// function chai(){
//     let username = "Rahul"
//     console.log(this.username);
// }
// chai()

// const chai = () =>{
//     let username = "Rahul"
//     console.log(this.username);
// }
// chai()

// Basic arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log( addTwo(3, 4))



// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) =>  ({username:" Rahul"})
console.log( addTwo(3, 4))



const myArray =[2,4,6,8]
// myArray.forEach()