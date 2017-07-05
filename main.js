// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
let givenName;
// A: It is 'undefined'. The variable has been created, but not assigned a value.


// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A: "Tim"


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A: true


// 4.
// What is `greeting` set to?
let greeting = "Hello, how are you? " + givenName;
// A: "Hello, how are you? " + givenName


// 5.
// What is `math` set to?
let high = 50;
let low  = 10;
let math = high - low;
// A: high - low;


// 6.
// What is `math` set to?
math = high - "5";
// A: high - "5"


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.

var born = 1984;
var today = 2017;
var givenName = "Tim";

var answer = givenName + "is" + (today - born) + "years old";
console.log(answer);

// 8.
// Adjust this code. Store some information in the following variables.
// A:
let yourName;
let instructorName;

let yourName = "Kelly";
let instructorName = "Doug";


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:


// This statement should read correctly
let yourName = "Kelly";
let instructorName = "Doug";

let statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;

console.log(statement);


// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
let myNumber = 7;
let myString = "Hello";
let myBoolean = false;
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined;
// A:

let myNumber = 7;
let myString = "Hello";
let myBoolean = false;
let myUndefined;


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
let x = (false == 0);
TRUE
// A.


// 12.
let y = (false == "");
console.log(y);
TRUE
// A.


// 13.
let z = (0 == "");
TRUE
// A.


// 14.
let a = (null == null);
TRUE
// A.


// 25.
let b = (undefined == undefined);
TRUE
// A.


// 16.
let c = (undefined == null);
A. FALSE


// 17.
let d = (null == false);
console.log(d);
FALSE
// A.


// 18.
let e = (NaN == null);
FALSE


// 19.
let f = (NaN == NaN);
console.log(f);
FALSE
// A.


// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
let thirsty = true;

if (true == thirsty){
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
let x;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
 FALSE


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
FALSE


// 23.
// this expression will set x to NaN
let x = 1 * undefined;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
FALSE


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
FALSE


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
FALSE


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
FALSE

// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
FALSE

// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
FALSE

// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
FALSE

// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.
