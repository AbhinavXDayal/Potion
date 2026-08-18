const Score = 100;
console.log(Score);

const Balance = new Number(200);
console.log(Balance);

console.log(Balance.toString());
console.log(Balance.toString().length);

console.log(Balance.toFixed(1));

const OtherNumber = 123.8966;
console.log(OtherNumber.toPrecision(3));

const Hundreds = 1000000;
console.log(Hundreds.toLocaleString("en-IN"));

console.log(Math.abs(-4));
console.log(Math.round(5.3));
console.log(Math.ceil(5.2));
console.log(Math.floor(5.2));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());

console.log(Math.random() * 10 + 1);

const Min = 10;
const Max = 20;

console.log(Math.random() * (Max - Min + 1));

console.log(Math.floor(Math.random() * (Max - Min + 1)) + Min);