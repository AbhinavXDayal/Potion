const User = 
{
  Username: "Abhi",
  Price: 10,

  WelcomeMessage: function () 
  {
    console.log(`${this.Username}, welcome to website`);
    console.log(this);
  },
};
User.WelcomeMessage();
User.Username = "Alex";
User.WelcomeMessage();
console.log(this);

function One() 
{
  console.log(this);
}
One();

function Two() 
{
  let Username = "Abhi";
  console.log(this.Username);
}
Two();

const Hi = function () 
{
  let Username = "Abhi";
  console.log(this.Username);
};
Hi();

const Hey = () => 
{
  let Username = "Abhi";
  console.log(this);
  console.log(this.Username);
};
Hey();

const AddTwo = (Num1, Num2) => 
{
  return Num1 + Num2;
};
console.log(AddTwo(5, 5));

const AddThree = (Num1, Num2, Num3) => Num1 + Num2 + Num3;
console.log(AddThree(5, 5, 5));

const AddFour = (Num1, Num2, Num3, Num4) => ({ Username: "Abhi" });
console.log(AddFour(5, 5, 5, 5));