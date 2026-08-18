const Arr = ["Finland", "Spain", "Australia"];

const Vals = Arr.forEach((Item) => 
{
  console.log(Item);
  return Item;
});
console.log(Vals);

const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const NewNums = MyNums.filter((Num) => Num > 4);
console.log(NewNums);

const NewNums2 = MyNums.filter((Num2) => 
{
  return Num2 > 4;
});
console.log(NewNums2);

const NewNums3 = [];
MyNums.forEach((Num3) => 
{
  if (Num3 < 6) 
  {
    NewNums3.push(Num3);
  }
});
console.log(NewNums3);

const Books = 
[
  {
    Title: "Book one",
    Genre: "Fiction",
    Publish: 2004,
  },
  {
    Title: "Book two",
    Genre: "Science",
    Publish: 2005,
  },
  {
    Title: "Book three",
    Genre: "Non fiction",
    Publish: 2006,
  },
];

const UserBooks = Books.filter((Bk) => Bk.Genre === "Fiction");
const UserBooks2 = Books.filter((Bk) => {return Bk.Publish > 2000 && Bk.Genre === "Non fiction";});

console.log(UserBooks);
console.log(UserBooks2);