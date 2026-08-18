let MyName = "Abhi";

let AnotherName = MyName;
AnotherName = "Dayal";

console.log(MyName);
console.log(AnotherName);

let UserOne = 
{
  Email: "user@google.com",
  Upi: "user@ybl",
};

console.log(UserOne.Email);

let UserTwo = UserOne;

UserTwo.Email = "Abhi@google.com";

console.log(UserOne.Email);
console.log(UserTwo.Email);