let score = "33abc";
console.log(typeof score);
console.log(typeof score); //method
let scoreInNumber = Number(score);
console.log(typeof scoreInNumber);
console.log(scoreInNumber); //NaN

let temp = null;
console.log(typeof null); //object
let tempInNumber = Number(temp);
console.log(typeof tempInNumber); //number
console.log(tempInNumber); //0

let gender = undefined;
console.log(typeof gender); //undefined
let genderInNumber = Number(gender);
console.log(typeof gender); //undefined
console.log(genderInNumber); //NaN

//******************OPeration**********
console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 1 + "2");
console.log("1" + 1 + 2);
