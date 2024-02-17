let undefinedVar;
let booleanVar = true;
let numberVar = 42;
let stringVar = "Hello";
let symbolVar = Symbol("symbol");

console.log(typeof undefinedVar); // "undefined"
console.log(typeof booleanVar); // "boolean"
console.log(typeof numberVar); // "number"
console.log(typeof stringVar); // "string"
console.log(typeof symbolVar); // "symbol"

let nullVar = null;
console.log(typeof nullVar); // "object" (unexpected behavior)
/*to accurately test for null, 
you should use the strict equality operator (===) or the strict 
inequality operator (!==).*/
nullVar = null;

console.log(nullVar === null); // true (preferred way to test for null)
console.log(nullVar == null); // true (loose equality, also works but not recommended)
console.log(nullVar === undefined); // false (strict equality differentiates between null and undefined)
//console.log(nullVar.length); //type error

//******************Chaining Operator***** */
let maybeNull = null;

// Using optional chaining to safely access a property
let length = maybeNull?.length;

console.log(length); // Outputs: undefined, without throwing an error
