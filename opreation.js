console.log('opreation.js')

// we are assign - value to variable and then we are doing some operation on it
const value=10;
const result=-value;
console.log(result);


const add=2+2;
const sub=2-2;
const mul=2*2;
const div=2/2;
const mod=2%2;
const power=2**2;
console.table({add,sub,mul,power,div,mod});

// join this stirng with + operator

const firstName='Nouman';
const lastName='Amanat';
const age=23;
const fullName=firstName+' '+lastName+' '+ age +' year old';
console.log(fullName);


const num1=10;
const num2="20";
console.log(num1+num2); // 1020



const num3=10;
const num4=20;
const num5=30;
const sum=num3+num4+"num5";
console.log(sum);


console.log("10"+20+30); // 102030
console.log(10+20+"30"); // 3030
console.log(10+20+"30"+40); // 303040

console.log(10+20-30*40/50); // 30304050
console.log((10+20)-(30*40)/(50+60)); // 19.090909090909093 use parenthesis to change the order of operation and set priority

// console.log(ture); // true
// console.log(+ture); // 1       // +ture is equal to 1


// prefix and postfix operator prefix operator is executed first and then the value is returned and postfix operator is executed after the value is returned
// const gameCounter=10;
// ++gameCounter; // 11 prefix operator
// gameCounter++; // 10 postfix operator
// console.log(gameCounter); // 10