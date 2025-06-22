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