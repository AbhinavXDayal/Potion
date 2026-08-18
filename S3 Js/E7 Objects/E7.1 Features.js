const MySymbol = Symbol("Key1");
const MySymbol2 = Symbol("Key2");

const JsUser = 
{
  Name: "Abhi",
  "Full name": "Abhinav Dayal",
  MySymbol: "MyKey1",
  [MySymbol2]: "MyKey2",
  Age: 19,
  Location: "Lucknow",
  Email: "Abhi@google.com",
  IsLoggedIn: false,
  LastLogInDays: ["Monday", "Tuesday"],
};

const AnotherJsUser = 
{
  Name: "Abhi",
  Age: 19,
  Location: "Lucknow",
};

console.log(JsUser.Email);
console.log(JsUser["Email"]);
console.log(JsUser["Full name"]);

console.log(JsUser.MySymbol);

console.log(JsUser[MySymbol2]);

JsUser.Location = "Mumbai";
console.log(JsUser.Location);

Object.freeze(AnotherJsUser);

AnotherJsUser.Location = "Goa";
console.log(AnotherJsUser);

JsUser.Greeting = function () 
{
  console.log("Hello Js User");
};

JsUser.GreetingTwo = function () 
{
  console.log(`Hello js User, ${this.Name}`);
};

console.log(JsUser.Greeting());
console.log(JsUser.GreetingTwo());