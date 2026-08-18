const MyArr = [0, 1, 2, 3, 4, 5];
console.log(MyArr[1]);

const MyArr2 = ["Abhi", "Hitesh"];

const MyArr3 = new Array(1, 2, 3);

const MyArr4 = [0, 1, 2, 3, 4, 5];

MyArr.push(6);
MyArr.push(7);
MyArr.pop();
MyArr.unshift(8);
MyArr.shift();
console.log(MyArr);

console.log(MyArr.includes(9));
console.log(MyArr.indexOf(2));

const NewArr = MyArr4.join();
console.log(MyArr4);
console.log(NewArr);
console.log(typeof NewArr);

console.log("A", MyArr4);

const MyArr5 = MyArr4.slice(1, 3);
console.log(MyArr5);

console.log("B", MyArr4);

const MyArr6 = MyArr4.splice(1, 3);

console.log("C", MyArr4);

console.log(MyArr6);