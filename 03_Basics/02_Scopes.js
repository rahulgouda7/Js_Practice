let a =300
if(true){
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

console.log(a);
// console.log(b);
// console.log(c); 

function one(){
    const username = "Rahul"
    function two (){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()



// ++++++++++++++++++++++++++++++++++++++
console.log(addOne(5));
function addOne(num){
    return num + 1
}

console.log(addTwo(5));
const addTwo = function (num1){
    return num1 + 2
}