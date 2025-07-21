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
/*



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