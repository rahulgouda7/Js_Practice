// const tinderUser = new Object()
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regulaUser ={
    email:"rahulgouda589@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Rahul",
            lastname:"Gouda"
        }
    }
}
// console.log(regulaUser.fullname.userfullname.firstname);

const obj1 ={1: "a", 2:"b"}
const obj2 ={3:"a", 4:"b"}
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users =[
    {
        id:1,
        email:"e@gmail.com"
    },
    {
        id:2,
        email:"r@gmail.com"
    },
    {
        id:3,
        email:"m@gmail.com"
    },
    
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));