let MyDate = new Date();
console.log(MyDate.toString());
console.log(MyDate.toDateString());
console.log(MyDate.toLocaleString());

console.log(typeof MyDate);

let MyCreatedDate = new Date(2024, 0, 5);
console.log(MyCreatedDate.toDateString());

let MyCreatedDateSecond = new Date("01-14-2024");
console.log(MyCreatedDateSecond.toLocaleString());

let MyTimeStamp = Date.now();
console.log(MyTimeStamp);
console.log(MyCreatedDateSecond.getTime());

console.log(Math.floor(Date.now() / 1000));

let NewDate = new Date();
console.log(NewDate);
console.log(NewDate.getDay());

NewDate.toLocaleString("Default", {Weekday: "long"});