//! How to create /initialize an Array
//! Using square brackets, Using an Array Constructure, Using Array fill, Using Array.of, using Array.from, Using spread operator



// Using constructure method
// We use this method for dynamic value when we don't have any idea that from where value will come and we need to store value in array
let ArrayConstructure = new Array();

ArrayConstructure[0] = "Ujjawal"
ArrayConstructure[1] = "Suhana"
ArrayConstructure[2] = "Anshika"

// console.log(ArrayConstructure)

let ArrayConstructure1 = new Array("Ujjawal", "Suhana", "Anshika");
// console.log(ArrayConstructure1)


// Fill Array
let fillArray = new Array(5).fill(2)
// console.log(fillArray)

// Array.of
let ofArray = Array.of("Ujjawal", "Suhana", "Anshika")
// console.log(ofArray)

// Array.from
let fromArray = Array.from("Ujjawal")
// console.log(fromArray)


// Destructuring Assignment

let fruits = ["apple","banana","papaya"]

let f1= fruits[0]
let f2= fruits[1]
let f3= fruits[2]
// console.log(f1,f2,f3)

let [f11,f22,f333] = fruits;
// console.log(f1,f2,f3)

// Iteating
// for(let i=0; i<3; i++) {
//     console.log("for", fruits[i])
// }

// for(let fruit of fruits) {
//     console.log("for of",fruit)
// }

// fruits.forEach((fruit) => console.log(fruit))

// ! push-> add last element
// ! pop -> remove last element
// ! shift -> remove the first element
// ! unshift -> add one to the start of an array
// ! map -> apply all function to all element

let nums = [2,3,4,5,6]
let numSquare = nums.map((num) => num*num)
console.log(numSquare)


// Multi-dimensional Array -> Array inside Array



