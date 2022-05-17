const array = [
    { id: 1, name: 'ram', },
    { id: 2, name: 'shyam', },
    { id: 3, name: 'ramesh', },
]

array.forEach((item) => {
    const { id, name } = item;
    document.write(id + '  ');
    document.write(name + '<br/>');
})
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];

//concat()
// const children = arr1.concat(arr2);
const children = arr1.concat(arr2, array);
// console.log(children);


const ages = [32, 33, 16, 40];

function checkAge(age) {
    return age === 32;
}

//filter()
const result = ages.filter(checkAge);
// console.log(result);

//includes()
console.log(ages.includes(16));

//find()
// console.log(ages.find(checkAge));

//findIndex
// console.log(ages.findIndex(checkAge));

//length
let length = array.length;
// console.log(length);

//map()
const numbers = [4, 9, 16, 25, 36];
const newArr = numbers.map(Math.sqrt)
// console.log(newArr);

//pop()
// console.log(numbers.pop(), numbers);

//push()
// console.log(numbers.push(49), numbers);

//unshift()
numbers.unshift(1, 2);
// console.log(numbers);

//slice()

const fruits4 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits4.slice(1, 3);
// console.log(citrus);

//sort
// console.log(fruits4.sort());
// console.log(fruits4.reverse());

//splice()
// fruits4.splice(2, 0, "Lemon", "Kiwi")
fruits4.splice(2, 2);
// console.log(fruits4);

//every

ages.every(checkAge)
// console.log(ages.every(checkAge));

//Constructor
let text = arr1.constructor;
let text2 = array.constructor;
// console.log(text, text2);

//copywithin
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
// console.log(fruits);

//entries()
const f = fruits.entries();

for (let x of f) {
    document.getElementById("demo").innerText += x;
}

//fill()
fruits.fill("Kiwi");
// fruits.fill("Kiwi", 2, 4);
// console.log(fruits);

//from()
// console.log(Array.from("ABCDEFG"));

//tostring
let Array1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
let text5 = Array1.toString();
// console.log(text5);

//indexOf()
const fruit = ["Banana", "Orange", "Apple", "Mango"];
let index = fruit.indexOf("Mango");
// console.log(index);

//lastIndxOf()
let index1 = fruit.lastIndexOf("Apple");
// console.log(index1);

//isArray()
let result1 = Array.isArray(fruit);
// console.log(result1);

//join()
let text1 = fruit.join();
// console.log(text1);

//keys()
const keys = fruits.keys();

let text3 = "";
for (let x of keys) {
    // console.log(text3 += x);
}

const key = Object.keys(fruits);

let text4 = "";
for (let x of key) {
    // console.log(text4 += x);
}