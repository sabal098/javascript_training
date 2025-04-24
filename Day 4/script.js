let Mysymbol = Symbol('abc');
console.log(Mysymbol);
console.log(typeof Mysymbol);
 

//Null (no value)

let MyNullVaraiable = null;
console.log(typeof MyNullVariable);


//Type conversions
 
let myNumber = '10';
console.log(myNumber + 10); 
let MyConvertedNumber = Number(myNumber);
console.log(MyConvertedNumber + 10);

//some tweaks (edge cases ) while cobverting to number type 

// letmytweak = Number(10);
// console.log(myTweak);
// console.log(-true / false );

// let myBoolean1 = Boolean('');
// console.log(myBoolean1);

// let myBoolean = Boolean(0);
// console.log(myBoolean);

// let myNumberBoolean = Boolean(0.1);
// console.log(myNumberBoolean);
// non zero value -> true, zero-> false

// conversion to string type from different other types
let myStringValue = String(Infinity);
console.log(myStringValue);
// all of them are possible bcz of string except bigint

// console.log(true+1);
console.log('100'-20);
console.log('100'+200);