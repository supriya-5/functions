// Create one function with zero parameter having a console statement;

function sayHi(){
    console.log("Hi");
}
sayHi();

// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function add(a,b){
    let sum = a+b;
    console.log(sum);
}
add(3,4);

// Create one arrow function

const sub = (c,d) =>{
   let minus = c - d;
   console.log(minus);
}
sub(5,2);

// "Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl (); //undefined

// "Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
}; //21

// "Print output

// var x = 21;
// a();
// b();
// console.log(a); // a is not defined
// a = function() {
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };

// Write a function that accepts parameter n and returns factorial of n

function factorial(n){
   let e = 1;
   for(let i=1; i<=n ; i++)
   {
     e= e*i;
   }
   console.log(e);
}
factorial(3);


