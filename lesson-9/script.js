let testNumber = 42;
console.log("The value of our variable is:", testNumber);

// Variables
let firstName = "Saga"; // Kan ändras
const occupation = "Software developer"; // Kan inte ändras

firstName = "Bengt"; // Ger firstName ett nytt värde
// occupation = "Painter"; // Kastar ett fel i konsolen
console.log(firstName, occupation);

// Data types
let text = "Hello"; // string
let number = 42; // number
let isStudent = true; // boolean
let nothing = null; // null
let notDefined; // undefined
console.log(text, number, isStudent, nothing, notDefined);

// Arrays and objects
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
// console.log(fruits[0]); // visar frukten på index 0 (dvs första elementet i arrayen)
// console.log(fruits[1]);  // visar frukten på nästa index

let fruitObjects = [
  { name: "Apple", color: "Green" },
  { name: "Banana", color: "Yellow" },
];

console.log(fruitObjects);
console.log(fruitObjects[0].color); // visar frukten på index 0, logga ut endast det objektets färg

let student = {
  name: "Saga",
  age: 30,
  isEnrolled: true,
};

student.isEnrolled = false;
console.log(student);

// Functions
// Arrow-syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const greet = (parameter) => {
  return `Hello, ${parameter}`;
};

console.log(greet("UXF24"));

// If-statements
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

let isEnrolledStudent = false;

if (isEnrolledStudent) {
  console.log("Student is enrolled");
}

// Loops
let fruitList = ["Apple", "Banana", "Cherry"];

// for...of-loop
for (let fruit of fruitList) {
  console.log(fruit);
}

// for-loop
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}
