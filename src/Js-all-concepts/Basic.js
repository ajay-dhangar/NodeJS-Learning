// importing files

const Addition = require('../../my_modules/operators/Arithmetic/Addition');
const Subtraction = require('../../my_modules/operators/Arithmetic/Subtraction');
const Multiplication = require('../../my_modules/operators/Arithmetic/Multiplication');
const Division = require('../../my_modules/operators/Arithmetic/Division');
const Modulus = require('../../my_modules/operators/Arithmetic/Modulus');
const Exponentiation = require('../../my_modules/operators/Arithmetic/Exponentiation');
const Decrement = require('../../my_modules/operators/Arithmetic/Decrement');
const Increment = require('../../my_modules/operators/Arithmetic/Increment');
const Assignment = require('../../my_modules/operators/Assignment/Assignment');
const PlusAssignment = require('../../my_modules/operators/Assignment/PlusAssignment');
// others import here.....

const Basic = () => {

    console.log('Basic.js is Started...');

    section1();
    section2();
    // section3();
    // section4();
    // section5();
    // section6();
    // section7();
}

const section1 = () => {

    // ==========================================
    // - Variables, data types, and operators
    // ==========================================

    console.log("section1 is started for Variables, data types, and operators");

    //  Variables: var, let, const (keywords of Variable declaration)

    // ====  var ======

    var v1 = 10;
    var v1 = 20; // No Error and output is 20
    v1 = 30; // No Error and output is 30

    console.log(v1); // 30

    console.log(v1);  // 20

    // ====  let ======

    let l1 = 10;
    // let l1 = 20; // SyntaxError: Identifier 'l1' has already been declared
    l1 = 20;
    console.log(l1);  // 20

    // ==== const ====

    const c1 = 10;
    // const c1 = 20; // SyntaxError: Identifier 'c1' has already been declared
    // c1 = 30; // TypeError: Assignment to constant variable.
    console.log(c1);  // 10

    // =============================================

    // ====  data types ======

    // 1. Primitive data types
    // 2. Non-primitive data types

    // 1. Primitive data types
    // - String
    // - Number
    // - Boolean
    // - Undefined
    // - Null
    // - Symbol

    // 2. Non-primitive data types
    // - Object
    // - Array
    // - Function

    // 1. String
    const str = 'Hello World';
    console.log(str); // Hello World
    console.log(typeof str); // string

    // 2. Number

    const num = 10;
    console.log(num); // 10
    console.log(typeof num); // number

    // 3. Boolean

    const bool = true;
    console.log(bool); // true
    console.log(typeof bool); // boolean

    // 4. Undefined

    let und;
    console.log(und); // undefined
    console.log(typeof und); // undefined

    // 5. Null

    const nul = null;
    console.log(nul); // null
    console.log(typeof nul); // object

    // 6. Symbol

    const sym = Symbol();
    console.log(sym); // Symbol()
    console.log(typeof sym); // symbol

    // 7. Object

    const obj = {
        name: 'Ajay',
        age: 23
    }
    console.log(obj); // { name: 'Ajay', age: 23 }
    console.log(typeof obj); // object

    // 8. Array

    const arr = [1, 2, 3, 4, 5];
    console.log(arr); // [ 1, 2, 3, 4, 5 ]
    console.log(typeof arr); // object

    // 9. Function

    const func = () => {
        console.log('Hello World');
    }
    console.log(func); // [Function: func]
    console.log(typeof func); // function

    // =============================================

    // - Operators

    // 1. Arithmetic Operators
    // 2. Assignment Operators
    // 3. Comparison Operators
    // 4. Logical Operators
    // 5. Bitwise Operators
    // 6. String Operators
    // 7. Conditional (ternary) Operator
    // 8. Comma Operator
    // 9. Unary Operators
    // 10. Relational Operators

    // 1. Arithmetic Operators

    // +	Addition    
    // -	Subtraction
    // *	Multiplication
    // **	Exponentiation (ES2016)
    // /	Division
    // %	Modulus (Division Remainder)
    // ++	Increment
    // --	Decrement

    // ===== Coding for Example =====

    const a1 = 10;
    const b1 = 20;

    console.log(Addition(a1, b1)); // 30 👉  ( 10 + 20 )
    console.log(Subtraction(b1, a1)); // 10 👉 ( 20 - 10 )
    console.log(Multiplication(a1, b1)); // 200 👉 ( 10 X 20 )
    console.log(Division(b1, a1)); // 2 👉 ( 20 / 10 )
    console.log(Exponentiation(a1, b1)); // 100000000000000000000 👉 ( 10 ^ 20 OR 10 X 10 X 10 X ..... X 10 ( 20 times))
    console.log(Modulus(b1, a1)); // 0 👉 ( 20 % 10 )
    console.log(Decrement(a1)); // 9 👉 ( 10 - 1 )
    console.log(Increment(b1)); // 11 👉 ( 10 + 1 )

    // 2. Assignment Operators

    // =	x = y	x = y (assignment)
    // +=	x += y	x = x + y (assignment with addition)
    // -=	x -= y	x = x - y (assignment with subtraction)
    // *=	x *= y	x = x * y (assignment with multiplication)
    // /=	x /= y	x = x / y (assignment with division)
    // %=	x %= y	x = x % y (assignment with modulus)
    // **=	x **= y	x = x ** y (assignment with exponentiation)

    // ===== Coding for Example =====

    const a2 = 5;
    const b2 = 10;

    console.log(Assignment(a2, b2)); // 👉 10
    console.log(PlusAssignment(a2, b2)); // 👉 15
    // others here.....

    // 3. Comparison Operators

    // ==	equal to (value) 👉 10 == '10' 👉 true
    // ===	equal value and equal type 👉 10 === '10' 👉 false 
    // !=	not equal 👉 10 != '10' 👉 false
    // !==	not equal value or not equal type 👉 10 !== '10' 👉 true
    // >	greater than 👉 10 > 5 👉 true
    // <	less than 👉 10 < 5 👉 false
    // >=	greater than or equal to 👉 10 >= 5 👉 true
    // <=	less than or equal to 👉 10 <= 5 👉 false
    // ?	ternary operator 👉 var status = (age >= 18) ? 'adult' : 'minor';


    // 4. Logical Operators 

    // &&	logical and 
    // ||	logical or
    // !	logical not 



    // 5. Bitwise Operators

    // &	AND
    // |	OR
    // ~	NOT
    // ^	XOR
    // <<	Zero fill left shift
    // >>	Signed right shift
    // >>>	Zero fill right shift

    // 6. String Operators

    // +	Concatenation

    // 7. Conditional (ternary) Operator

    // condition ? val1 : val2

    // 8. Comma Operator

    // ,

    // 9. Unary Operators

    // delete
    // typeof
    // void
    // +
    // -
    // ~

    // 10. Relational Operators

    // in
    // instanceof
}

const section2 = () => {

    // =============================================
    // - Arrays, objects, and functions
    // =============================================

    console.log("section2 is started for Arrays, objects, and functions ");

    // Array 

    const array = [1, 2, 3, 4, 5];
    console.log(array);

    let sumArray = 0;    

    for(let i=0; i<5; i++){
        sumArray += array[i];
    }

    console.log(sumArray);


    // objects

    const obj = {
        name: "Shiava",
        age: 25,
    }

    console.log(obj.name); // Shiva

    // functions

    // normal

    function info(name, age){
        return `My name is ${name}, and age is ${age}.`;
    }

    console.log(info(obj.name, obj.age)); // My name is Shiava, and age is 25.

    const data = function (){
        console.log("Success...");
    }

    data()

    const arrowFunction = () => {
        console.log('Arrow Function...');
    }

    arrowFunction()
    
}

const section3 = () => {

    // =============================================
    // - Control flow and loops
    // =============================================

    console.log("section3 is started for Control flow and loops ");
}

const section4 = () => {

    // =============================================
    // - Functions, closures, and scope
    // =============================================

    console.log("section4 is started for Functions, closures, and scope");
}

const section5 = () => {

    // =============================================
    // - Objects, prototypes, and classes
    // =============================================

    console.log("section5 is started for Objects, prototypes, and classes");
}

const section6 = () => {

    // =============================================
    // - Asynchronous JavaScript and Promises
    // =============================================

    console.log("section6 is started for Asynchronous JavaScript and Promises");
}

const section7 = () => {

    // =============================================
    // - Error handling and debugging techniques
    // =============================================

    console.log("section7 is started for Error handling and debugging techniques");
}


module.exports = Basic; //