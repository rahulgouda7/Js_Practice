const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc : ${acc} amd currval: ${currval}`);
//     return acc + currval
// }, 3)
const myTotal = myNums.reduce( (acc, curval) => acc + curval,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Python",
        price: 4999
    },
    {
        itemName: "Data Science",
        price: 12999
    }
]
const priceToPay= shoppingCart.reduce ( (acc, item) => acc + item.price, 0)
console.log(priceToPay);