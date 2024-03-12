
// data types in javascript are divided into two categories: primitive and non-primitive data types.
// premitive and non premitive datatypes
// Primitive data structure is the data structure that allows you to store only single data type values. 
// Non-primitive data structure is the data structure that allows you to store multiple data type values.
// 7 types of primitive data types in javascript: string, number, boolean, null, undefined, symbol, bigint
// 1. string: any sequence of characters enclosed in single or double quotes
// 2. number: any numerical value
// 3. boolean: true or false
// 4. null: represents the intentional absence of any object value
// 5. undefined: represents the value that is not assigned
// 6. symbol: represents a unique identifier
// 7. bigint: represents a large number

// non-primitive data types in javascript are: object, array, function	
// 1. object: collection of key-value pairs
// 2. array: collection of elements
// 3. function: a block of code that can be executed



const score=100;

console.log(typeof score);

const  ScoreValue=100.3;
console.log(typeof ScoreValue);

const isTrue=true;
console.log(typeof isTrue);

const outSideTemp=null;
console.log(typeof outSideTemp);

const name=undefined;
console.log(typeof name);

const sym=Symbol();
console.log(typeof sym);


const id=Symbol('symbol1');
const symbolId=Symbol('symbol1');

console.log(id===symbolId);

const bigInt=1234567890123456789012345678901234567890n;
console.log(typeof bigInt);

// non-primitive data types
const person=["Pakistan","Karachi","Lahore"];
console.log( person.length.toString());
console.log(person[1]);
console.log(person.indexOf("Karachi"));