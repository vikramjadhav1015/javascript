// types of data types depends on how the data stored in memory and how we can access it
// mainly two data types
// 1. Primitive data types
// 2. Non primitive data types

// Primitive - call by value 
//  7 types: 
//  String
//  Number
//  Boolean
//  null
//  undefined
//  Symbol
//  BigInt
 

// Non primitive type - Reference type
// Array
// Objects
// Functions

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail //undefined

const id1 = Symbol('123')
const id2 = Symbol('123')

console.log(id1 == id2);
console.log(id1);
console.log(id2);

const bigNumber = 34242343243434234n 

// JavaScript is a dynamically typed language. 
// This means that variable types are determined at runtime, 
// and you do not need to explicitly declare the type of a variable before using it.
// You can assign different types of values to a variable during its lifetime.


const heros = ["sachin", "virat"]

let user = {
    name: "vikram",
    age:23
}


let myFunction = function (){
    console.log("vikram");
}

console.log(typeof(myFunction)); // function or object function

console.log(typeof null); //object
console.log(typeof undefined); //undefined


// +++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive) - by Value
// Heap (Non primitive) - by Reference

let myYoutubeName = 'vikram'
let anotherName = myYoutubeName
anotherName = "jadhav"
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    name : "vikram",
    email : "abc@gmail"
}

userTwo =  userOne

userTwo.name = "jadhav"

console.log(userOne.name);
console.log(userTwo.name);





