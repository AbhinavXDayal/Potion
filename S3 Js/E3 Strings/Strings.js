const Name = "Abhi";
const CodeFiles = 10;

console.log(`Hello my name is ${Name} and my code files is ${CodeFiles}`);

const GameName = new String("Abhi-xd");

console.log(GameName[0]);

console.log(GameName.__proto__);

console.log(GameName.length);

console.log(GameName.toUpperCase());

console.log(GameName.charAt(3));

console.log(GameName.indexOf("X"));

const NewString = GameName.substring(0, 4);
console.log(NewString);

const AnotherString = GameName.slice(-6, 4);
console.log(AnotherString);

const NewStringOne = "    Abhi    ";
console.log(NewStringOne);
console.log(NewStringOne.trim());

const Url = "https://Abhi.com/Abhi%20Dayal";
console.log(Url.replace("%20", "-"));
console.log(Url.includes("Abhi"));

console.log(GameName.split("-"));