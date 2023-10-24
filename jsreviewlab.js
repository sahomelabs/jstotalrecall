/* ==================== */ 
// Variables & Datatypes // 

// Question 1 : How do we assign a value to variable 
let questionOne = 5;

// Question2 : How do we assign a value to a variable? 
Question2 = 30;
console.log(Question2); // Output: 30

// Question 3: How do we assign an existing variable to a new variable?
let new_variable_question3 = 40;
console.log(new_variable_question3);

// Question 4 : Remind me, what are declare, assign, and define?
// Answers: 
// Declaring a variable we can use let, or const 
// Assigning a value to a variable is assigning the value using the assignment operator (=)
// Defining a function is creating a block of code that performs a specific task when called

// Question5 : What is pseudocoding and why should you do it?
// Answer: Pseudocoding is writing out in plain English how a computer program would work. It helps us visualize our thought process as well as

// Question6 : What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// Answer: Problem solving and coding depend on the complexity of the the problem. 
// I will say no estimate of how long it will take. Experience matter also an experice programmer can solve issue faster compare to beginner 


// Question LabB=================== // B.Strings
// Strings // 
// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
let firstVariable = "Hello World";
// Change the value of this variable to some number
firstVariable = 789;
// Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
// Change the value of secondVariableto any string.
secondVariable = "I am not a number!";
// What is the value of firstVariable?
console.log(firstVariable);
// Create a variable called yourNameand set it equal to your name as a string. 
let yourName = "Daniel";
// Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
greeting = "Hello, my name is " + yourName;
// ex: Hello, my name is Jean Valjean
console.log(secondVariable);
console.log(greeting);


// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. 
// Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false && false)
console.log(e === 'Kevin');
console.log(a + b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

