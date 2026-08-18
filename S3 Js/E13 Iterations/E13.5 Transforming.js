const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const NewNums = MyNums.map((Num) => Num + 10);
console.log(NewNums);

const NewNums2 = MyNums
                        .map((Item) => Item * 10)
                        .map((Item) => Item + 5)
                        .filter((Item) => Item >= 50);
console.log(NewNums2);

const MyNums2 = [1, 2, 3];

const MyTotal = MyNums2.reduce(function (Acc, Currval) 
{
  console.log(`acc - ${Acc}, currval - ${Currval}`);

  return Acc + Currval;
}, 0);
console.log(MyTotal);

const MyTotal2 = MyNums2.reduce((Acc, Curr) => Acc + Curr, 0);
console.log(MyTotal2);

const ShoppingCart = 
[
  {
    ItemName: "Js course",
    Price: 1000,
  },
  {
    ItemName2: "C++ course",
    Price: 1500,
  },
  {
    ItemName3: "Web dev course",
    Price: 2000,
  },
];

const TotalAmt = ShoppingCart.reduce((Acc, Ele) => Acc + Ele.Price, 0);
console.log(`Total amount is ${TotalAmt}`);