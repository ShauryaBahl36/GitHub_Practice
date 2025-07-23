// console.log('Shaurya')
// console.warn('warn')
// console.error('error')
// console.info('info')

// Keywords
// let a=20
// const b=30
// var c=40

// // b=40
// c=50
// console.log(a)
// console.log(b)
// console.log(c)

// Single line comment
/* Multi-Line
Comment */

// let x=15;
// let y=30;
// let z=60;

// console.log(x+y-z);

// console.log(y=='30');
// console.log(y==='30');

// console.log(10<<2);

// let fname='Lucas';
// let lname='Makovich';
// let fullname=fname+lname;
// console.log(fullname);

// let j = true ? 10 : 20;
// console.log(j);
// console.log(typeof fname);

/* var myName = "Shaurya Bahl";, where var is a keyword, which tells us that we are declaring a variable or data container
and that container contains the name of whatever we give it there such as myName, and the value of that variable is string 
"Shaurya Bahl". */

/* var means variable, meaning we can vary the data that we keep inside it, and we can change it later on in the code.
const means constant, meaning we cannot change the data that we keep inside it, it will always remain the same.
let is a block-scoped variable, meaning it can be changed but only within the block it is defined in, and it is not 
hoisted like var. */

/*  var myName = "Shaurya Bahl";
    var yourName = prompt("What is your name?")
    alert("My name is "+ myName +", and Welcome to my birthday party "+ yourName +"!");

Run it in Snippets Tab of DevTools to check the output.
*/

/*
var gameLevel = 1;
gameLevel = 2;
gameLevel = 3;
alert("My current Level is " + gameLevel);
*/

/* Problem 1: Swap the values of two variables a and b.

Solution:
function test() {
  var a = "8";
  var b = "3";

  var c = a;
  a = b;
  b = c;
  
  console.log("a is " + a);
  console.log("b is " + b);
}

test()
*/

/* 
Rules for naming variables:
1. Give Variables a meaningful names so that they are easy to understand and also what's the data that's likely to be stored 
in them.
2. Variable Names cannot begin with a number, but can contain numbers after the first character. eg:- my123 is valid, 
but 123my is not.
3. Variable names can't contain spaces, but can use underscores or camelCase to separate words. eg:- my_name or myName.
4. Variable names can only contain letters, numbers, underscores, and dollar signs.
*/

/* String Concatination:

var message = "Hello";
var name = "Shaurya";
alert(message + " " + name + "!");

Output: Hello Shaurya!
*/

/* String Length and Retrieving no of Characters:-
variable_name.length gives us the length of the string, which is the number of characters in it.

var len = 30;
var message = prompt("Enter the string: ")
alert("You have entered "+ message.length + " characters, you have "+ (len - message.length) + " characters remaining");

*/

/* Slice Method in Strings:
Slice method basically allows us to slice your strings to separate them into individual characters.
variable_name.slice(x,y), here we give tow numbers, the starting position and the ending position.

var message = prompt("Enter the string: ")
var limit = message.slice(0, 20);
alert(limit);
*/

/* ToUpperCase and ToLowerCase Methods:
variable_name.toUpperCase() converts the string to uppercase, and variable_name.toLowerCase() converts the string to
lowercase.

var name = prompt("What is your name?");
name1upper = name.slice(0,1).toUpperCase();
name2lower = name.slice(1,name.length).toLowerCase();
alert("Hello, "+ (name1upper+name2lower));

*/

/*
Basic Arithmetic Operations:
Modulo operator is used to find the remainder of a division operation. it is represented by %.
Note: be careful with the order of operations, as it can affect the result of your calculations.

var dogAge = prompt("Enter the age of the dog.")
var humanAge = (dogAge - 2) * 4 + 21;
alert("Your dog is "+ humanAge + " years old in human years");
*/

/*
Increment and Decrement Operators:
Increment operator (++) increases the value of a variable by 1, and 
Decrement operator (--) decreases the value of a variable by 1. For eg:-

var x = 5;
x++; // x is now 6
x--; // x is now 5 again
x += 2; // x is now 7
x -= 3; // x is now 4

*/

/* Functions:
Functions allow you to create series of instructions, package it into a block 
of code and remember packaging reusable blocks of code that can be called multiple 
times throughout your program. For eg:-
Creating the function looks like this:
function function_name() {
    // code to be executed
}

while, calling the function looks like this:
function_name();

Difference between alert and console.log is that alert is something that the user
can see on the screen, while console.log is something that the developer can see 
in the console to debug the code, to find out if there were any problems, and to
essentially print out parts of the code into the console.

For understanding functions() in a better, go to this link: "https://web.stanford.edu/~cpiech/karel/ide.html"

Eg 1 to try out:- Bring Robot from bottom left corner to top right corner of the screen.
Solution:
function main(){
   goStraight();
   goLeft();
   goStraight();
}

function goStraight() {
   move();
   move();
   move();
   move();
}

function goLeft() {
   turnLeft();
}

Eg 2 to try out: Putting Beepers Diagonally and move robot from bottom left to top right corner.
Solution:
function main(){
   Beepers();
   goLeft();
   Beepers();
   goRight();
   Beepers();
   goLeft();
   Beepers();
   goRight();
   LastBeeper();
}

function Beepers() {
   putBeeper();
   move();
}

function LastBeeper() {
   putBeeper();
}

function goLeft() {
   turnLeft();
   move();
}

function goRight() {
   turnRight();
   move();
}
*/

/* ChessBoard Pattern:

function main(){
   oddBeepers();
   goLeft();
   evenBeepers();
   goRight();
   oddBeepers();
   goLeft();
   evenBeepers();
   goRight();
   oddBeepers();
}

function oddBeepers() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}

function evenBeepers() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}

function LastBeeper() {
   putBeeper();
}

function goLeft() {
   turnLeft();
   move();
   turnLeft();
}

function goRight() {
   turnRight();
   move();
   turnRight();
}

*/

let i='a';
switch(i){
    case 'a':
        console.log('Case 1');
        break;
    case 'b':
        console.log('Case 2');
        break;
    case 'c':
        console.log('Case 3');
        break;
    default:
        console.log('Default');
        break;
};

do{
    console.log('Shaw');
} 
while(0);

for(i=1;i<=10;i++){
    console.log(i);
}

function myName(){
    console.log('Lucas');
}

myName()

function sum(a,b){
    console.log(a+b);
}

let sum1 = (a,b) => {
    console.log(a+b);
}
sum1(11,11)

console.log(new Date().toISOString().slice(0, 19).replace('T', ' '));