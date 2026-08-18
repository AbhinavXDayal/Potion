function SayMyName() 
{
  console.log("Abhi");
}
SayMyName();

function AddTwoNo(Num1, Num2) 
{
  console.log(Num1 + Num2);
}
AddTwoNo(5, 5);

function AddThreeNo(Num1, Num2, Num3) 
{
  console.log(Num1 + Num2 + Num3);
}
const Res = AddThreeNo(5, 5, 5);
console.log("Result:", Res);

function AddFourNo(Num1, Num2, Num3, Num4) 
{
  return Num1 + Num2 + Num3 + Num4;
}
const Ress = AddFourNo(5, 5, 5, 5);
console.log("Result:", Ress);

function LoginUserMsg(Username) 
{
  if (Username == undefined) 
  {
    console.log("Please enter a username");
  }
  return `${Username} just logged in`;
}
console.log(LoginUserMsg("Abhinav"));
console.log(LoginUserMsg());

function LoginUserMsg2(Username = "Abhi") 
{
  return `${Username} just logged in`;
}
console.log(LoginUserMsg2());
console.log(LoginUserMsg2("Abhinav"));