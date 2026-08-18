const Names = ["Thor", "Ironman", "Spiderman"];
const Names2 = ["Superman", "Flash", "Batman"];

const NewArr2 = [...Names, ...Names2];
console.log(NewArr2);

const AnotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const RealAnotherArray = AnotherArray.flat(Infinity);
console.log(RealAnotherArray);

console.log(Array.isArray("Abhi"));
console.log(Array.from("Abhi"));
console.log(Array.from({name: "Abhi"}));

let Score1 = 100;
let Score2 = 200;
let Score3 = 300;

console.log(Array.of(Score1, Score2, Score3));