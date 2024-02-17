const symbol1 = Symbol();
const symbol2 = Symbol();
console.log(symbol1 === symbol2); // false (Symbols are unique)
const dialogueKey = Symbol("dialogueKey");
const myDialogue = {
  [dialogueKey]: "jalwa hain humara",
};
const globalSymbol = Symbol.for("globalKey");
const anotherGlobalSymbol = Symbol.for("globalKey");
console.log(globalSymbol === anotherGlobalSymbol); //true - reused from global registry
