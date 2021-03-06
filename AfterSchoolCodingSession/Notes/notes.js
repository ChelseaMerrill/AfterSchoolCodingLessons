//KEY ELEMENTS 8/16/2021

//HTML = HyperText Markup Language:
        //the standard markup language for documents designed to be displayed in a web browser. 
        //It can be assisted by technologies such as CSS and scripting languages (JavaScript).
        //structure
//CSS = Cascading Style Sheets:
        // describes the presentation of the document
        //style

//Script Language = JavaScript(for this example)
        // gives functionality to the website
        //allows us to make the elements on the page operate    


//SKELETON:

// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Title</title>
//         <link rel='stylesheet' href="styles.css"/>
//     </head>
//     <body>
//       
//      <p> content </p>  
//        
//      <script src="script.js"></script>
//     </body>
// </html>


//HTML Elements:
    //  start tag, content, end tag
        // <h1>Heading1</h1>, <p>paragraph</p>, <br/>
    //  <div> tags
    // class names (.)
    // id (#)

//SCRIPT 
    // adding event listeners: attaches an event handler to the specified element. You can add many event handlers to one element
    //Query Selector v Query Selector all

/* -------------------------------------------------------------------------- */
// VARIABLE NOTES 8/23/2021

// What are variables?
// containers for storing data values

// Types of variables
// var: global scope
// let: accessible within the scope
// const: accessible within the scope, cannot be reassigned

/* -------------------------------------------------------------------------- */
// VARIABLE DECLARATION EXAMPLES

// var hello = "helloWorld";
//console.log(hello)

// REASSIGNING VARIABLES

// let x = 8;
// console.log("what is x?", x); // what is x? 8
// x = 1;
// console.log("what is x now?", x); //what is x now? 1

// let y = "hi";
// console.log("y is", y); // y is hi
// y = "hello";
// console.log("y is", y); // y is hello

// YOU CANNOT REASSIGN CONSTANT VARIABLES 
// The console.logs below will not run
// const z = "hi";
// console.log("z", z); // z hi
// z = "hello";
// console.log("what is z?", z);  // THIS WILL NOT RUN 

/* -------------------------------------------------------------------------- */

// console.log()
// is a function in JavaScript which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.

/* -------------------------------------------------------------------------- */

// DATA TYPE NOTES

// What are Data Types?
// The type of data that the variables are assigned to

// what is primitive data type
// All primitives are immutable - they cannot be altered.

// Primitive Data Types:
// string: is used to represent and manipulate a sequence of characters
// number: Hold numeric values, can be integers, decimals, negatives, positives, and so on
// boolean: have two values: true or false
// Null: is "nothing". It is supposed to be something that doesn't exist. The lack of any value
// undefined:a variable without a value, has the value undefined

// what is non-primitive data type
// mutable - can change!

// Non-Primitive/Composite Data Types
// Object {}: Object properties are written as name:value pairs, separated by commas.
// arrays []: high-level, list-like objects
// functions: A JavaScript function is a reusable block of code designed to perform a particular task.

/* -------------------------------------------------------------------------- */

// Undefined vs null vs not defined/undeclared

// UNDEFINED EXAMPLE
// Did not assign the varibale string to anything
// let string;
// console.log(string);

// NULL EXAMPLE
// nothing: the variable nothing is assigned to nothing! 
// You can use null as a placeholder 
// let nothing = null;
// console.log(nothing);

// NOT DEFINED/UNDECLARED EXAMPLE
// throws an error: something is not defined
// console.log(something);

/* -------------------------------------------------------------------------- */

// typeof operator definition: returns a string indicating the type of the data 

// console.log(typeof 6) // 'number'
// console.log(typeof 'hi') // 'string' 
// console.log(typeof {string: 'hi'}) 
// 'object'
// console.log(typeof [1, 2, 3]) // 'object'

// FUNCTION NOTES
// Definition: A JavaScript function is a reusable block of code designed to perform a particular task.
// Note: 'invoking' or 'calling' a function makes it execute its code, this is done by having parenthesis after the function name ( example() )
// Note: A function can be called many times, each time with an output based on arguments that are passed in

// Why even use a function?
    // Reduces amount of code that is required
        // This is helpful for a few reasons:
            // Reduces potential for error
            // Simplifies our programs 
            // Gives potential for upgrades & changes 

// Note: functions dont inherently write to the CLI, we still need to console.log the invocation of the function

/* -------------------------------------------------------------------------- */

// PARAMETERS VS ARGUMENTS

// Parameters:
    // A function can require parameters
    // A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions.
    // The parameters are the values that are between the parenthesis when declaring the function
    // They dont have their own value, they receieve their value from the arguments when the function was called

// Arguments:
    // If a function has parameters, it needs to take in arguments
    // These arguments are passed in the funtion when the function is called/invoked


/* -------------------------------------------------------------------------- */

// TYPES OF FUNCTIONS

// Basic function
// function functionName (parameters){
//     // tell the function what to do
// }
// functionName(args)

// Anonymous function
// let anonymousFunction = function(params){
//     //tell the fucntion what to do
// }
// anonymousFunction(args)

// // Arrow function (ES6)
// let arrowFunction = (params) => {
//     // block of code -> what the function does
// }
// arrowFunction(args)

/* -------------------------------------------------------------------------- */
// Indexes

// let cities = ['New York City', 'Amsterdam', 'Miami', 'Chicago', 'Madrid', 'London']

// console.log(favCities(cities[0])) // My favorite city is New York City
// console.log(favCities(cities[1])) // My favorite city is Amsterdam
// console.log(favCities(cities[2])) // My favorite city is Miami
// console.log(favCities(cities[3])) // My favorite city is Chicago
// console.log(favCities(cities[4])) // My favorite city is Madrid
// console.log(favCities(cities[5])) // My favorite city is London


/* -------------------------------------------------------------------------- */

// LOOPING THROUGH AN ARRAY

// let stringArray = ['Apple', 'Orange', 'Banana', 'Blueberry', 'Lemon']

// function iterateArrays (array){
//     for (let i = 0; i < array.length; i++){
//         // first iteration -> i = 0; 0 < 5: true; i++ 
//         // second iteration -> i = 1; 1 < 5: true; i++
//         // third iteration -> i = 2; 2 < 5: true; i++
//         // fourth iteration -> i = 3; 3 < 5: true; i++
//         // fifth iteration -> i = 4; 4 < 5: true; i++
//         // sixth iteration -> i = 5; 5 < 5: false

//         console.log(array[i]) // array[0] -> Apple array[1] -> Orange array[2] -> Blueberry array[3] -> Daja array[5] -> Lemon
//     }
//     return 'We done!!'
// }

// console.log(iterateArrays(stringArray))

/* -------------------------------------------------------------------------- */
 
// NUMBER NOTES 8/30/2021

// Number Definition:
//  JS numbers are the same as numbers we traditionally use in math 

/* -------------------------------------------------------------------------- */

// // Add (+)
console.log(5+5)
//10

// // Substract (-)
console.log(10-2)
//8

// // Divide (/)
console.log(60/3)
//20

// // Multiply (*)
console.log(3 * 7)
//21

// // Compare: <, >, >=, <=
console.log(4 > 7) 
//false
console.log(5 < 15) 
//true
console.log(7 >= 7) 
//true
console.log(8 <= 9 ) 
//true

/* -------------------------------------------------------------------------- */

// Modular % definition: operator (%) returns the division remainder

console.log(12 % 5)
//2

console.log(15 % 3) 
//0

console.log(10 % 3)
// 

/* -------------------------------------------------------------------------- */

// MATH METHODS

// Math.sqrt() definition: Return the square root of a number

console.log(Math.sqrt(8)) 
//2.8284271247461903

console.log(Math.sqrt(16))
//4

console.log(Math.sqrt(25)) 
//5

/* -------------------------------------------------------------------------- */

// Math.pow(base, exponent) 

console.log(Math.pow(2, 3))
//8

console.log(Math.pow(7, 20)) 
//79792266297612000

/* -------------------------------------------------------------------------- */

// Math.round() definition: returns the value of a number rounded to the nearest integer

console.log(Math.round(3.14)) 
//3

console.log(87/15) 
console.log(Math.round(87/15)) 
//6

// console.log(Math.round(1.5)) 

/* -------------------------------------------------------------------------- */

// Math.ceil() definition: rounding up no matter what

console.log(Math.ceil(1.1)) 
//2

// console.log(Math.ceil(19.01247502)) 

/* -------------------------------------------------------------------------- */

// Math.floor() definition: rounding down no matter what 

console.log(Math.floor(3.14))
//3

// console.log(Math.floor(15/7))
// console.log(Math.floor(3.9)) 


let num = Math.floor(15/7)
let remainder = 15 % 7

console.log('15/7 is ' + num + ' with a remainder of ' + remainder ) 
// 15/7 is 2 with a remainder of 1

/* -------------------------------------------------------------------------- */

// Math.abs() definition: returns the absolute number. Will return positive numbers only 

// console.log(Math.abs(15-6)) 
// console.log(6-15) 
console.log(Math.abs(6-15))
//9

/* -------------------------------------------------------------------------- */

// Math.min() difinition: returns the minimum number 

console.log(Math.min(7, 20, 4, 1, 25, 7, 3, 3.14, 24, -1, -100, -7))
//-100

/* -------------------------------------------------------------------------- */

// Math.max() definition: returns the maximum number 

console.log(Math.max(7, 20, 4, 1, 25, 7, 3, 3.14, 24, -1, -100, -7)) 
//25

/* -------------------------------------------------------------------------- */

// Math.random()

// console.log(Math.random()) //random numbers between 0-1 in decimals 
// console.log(Math.random() * 100) // random numbers between 0-100 in decimals 
// console.log(Math.floor(Math.random() * 100)) //random whole numbers between 0-100 rounded down to the nearest whole number
// console.log(Math.ceil(Math.random() * 100)) //random whole numbers between 0-100 rounded up to the nearest whole number


/* -------------------------------------------------------------------------- */

// Increasing and decreasing variables

let i = 7
// console.log(i)
//7 

i = i + 1
// console.log(i) 
//8

i += 1
// console.log(i)
//9

i++
// console.log(i) 
//10

// i = i - 1
// console.log(i) 

// i -= 1
// console.log(i) 

// i--
// console.log(i) 



/* -------------------------------------------------------------------------- */

