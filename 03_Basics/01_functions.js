

// function sayMyName(){
//     console.log("R");
//     console.log("A");
//     console.log("H");
//     console.log("U");
//     console.log("L");
// }
// sayMyName

// function addTwoNumbers(number1, number2){
//    console.log( number1+number2);
// }
// addTwoNumbers(3,4)

function addTwoNumbers(number1, number2){
    // let result =  number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3,5)
// console.log("Result: ", result);



function loginUserMessage(username = "sam" ){
    if(!username){
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Rahul"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500,2000));

const user ={
    username: "Rahul",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}  
// handleObject(user)
handleObject({
    username: "Rahul",
    price: 199
})

const myNewArray = [200,400,600]
 function returnSecondValue(getArray){
    return getArray[1]
 }
 console.log(returnSecondValue(myNewArray));