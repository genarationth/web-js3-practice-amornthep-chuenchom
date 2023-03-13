console.log("Challenge 1: Create Arithmetic Functions");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const a = 10,
  b = 5;
console.log(`A: ${a}, B: ${b}`);

console.log(`${a} + ${b} = ${add(a, b)}`);
console.log(`${a} - ${b} = ${subtract(a, b)}`);
console.log(`${a} * ${b} = ${multiply(a, b)}`);
console.log(`${a} / ${b} = ${divide(a, b)}`);

console.log("----------------------------------------");

console.log("Challenge 2: Create an information card");
const fullName = "Eric Cartman";
const country = "South Park";
const hobby =
  "insulting, harassing and ostracizing people, especially ethnic and racial minorities.";

const inform = (firstName, country, hobby) =>
  console.log(
    `Hi, my name is ${fullName}. I live in ${country} and enjoy ${hobby}`
  );

inform(fullName, country, hobby);
console.log("----------------------------------------");
