let i = 0;
while (i <= 10) 
{
  console.log(`Val of i Is - ${i}`);
  i = i + 2;
}

let myArr = ["Germany", "Finland", "Sydney"];
let j = 0;

while (j < myArr.length) 
{
  console.log(`Val is ${myArr[j]}`);
  j = j + 1;
}

let score = 1;
do 
{
  console.log(`Score is ${score}`);
  score++;
} while (score <= 5);

let score2 = 11;
do 
{
  console.log(`Score2 is ${score2}`);
  score2++;
} while (score2 <= 5);

const arr = [1, 2, 3, 4, 5];
for (const num of arr) 
{
  console.log(num);
}

const greetings = "Hello world";
for (const greet of greetings) 
{
  if (greet == " ") 
  {
    continue;
  }
  console.log(`Each char is ${greet}`);
}

const map = new Map();
map.set("In", "India");
map.set("Usa", "United states of america");
map.set("Fr", "France");
map.set("Fr", "France");

console.log(map);

for (const [key, value] of map) 
{
  console.log(key, "-", value);
}