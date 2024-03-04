//  objects decleration
// singleton
// Object.create
// Object literals
const mySym = Symbol("key1")
const JsUser ={
    name: "Rahul",
    "Full name":"Rahul Gouda",
    [mySym]:"mykey1",
    age:22,
    location:"BLR",
    email: "rahulgouda589@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]

}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);
console.log(JsUser["Full name"]);
JsUser.email="rahul@cognizant.com"
console.log(JsUser);
//Object.freeze(JsUser)
JsUser.email="roshan@google.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JsUser");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}




console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());