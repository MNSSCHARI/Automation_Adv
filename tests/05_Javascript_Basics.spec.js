import {test} from '@playwright/test';

test.describe('Javascript Basics', () => { 
    test('Arthimetic Operators', async ({}) => {
        // Arithmetic Operators
        // Addition
        add();
        console.log("*******************************************");
        // Subtraction
        subtract();
        console.log("*******************************************");
        // Multiplication
        multiply();
        console.log("*******************************************");
        // Division
        divide();
        console.log("*******************************************");
        // Modulus
        modulus();
        console.log("*******************************************");
        // Increment
        increment();
        console.log("*******************************************");
        // Decrement
        decrement();
        console.log("*******************************************");
// Arithmetic Operators
// Addition, 
function add(){
let x = 5;
let y = 2;
let z = x + y;
console.log("addition of two values" + z);
    }
// Subtraction, 
function subtract(){
let x = 5;
let y = 2;
let z = x - y;
console.log("Subtraction  of two values" +z);
}
// Multiplication, 
function multiply(){
    let a = 3;
let b = (100 + 50) * a;
console.log("multiplication of two values" +b); 
}
// Division,
function divide(){
let x = 5;
let y = 2;
let z = x / y;  
console.log("Division  of two values" +z);
}
// Modulus, 
function modulus(){
let x = 5;  
let y = 2;
let z = x % y;
console.log("Mod Division of two values" +z);
}
// Increment, 
function increment(){
let x = 5;
x++;
console.log("increment of value" +x);
}
// Decrement
function decrement(){
let x = 5;
x--;
console.log("Decrement of value" +x);
}
});

// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators




















// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];
// Change an element:
cars[0] = "Toyota";
// Add an element:
cars.push("Audi");
console.log(cars);


console.log("*******************************************");

// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
// Change a property:
car.color = "red";
// Add a property:
car.owner = "Johnson";
console.log(car);
let Audi_car = car;
console.log(Audi_car);

console.log("*******************************************");

});