var C = 300;

if (true) 
{
  let A = 10;
  const B = 20;
  var C = 30;
}
console.log(C);

let X = 100;

if (true) 
{
  let X = 10;
  const Y = 20;
  console.log("Inner:", X);
}
console.log(X);

function One() 
{
  const Username = "Abhi";

  function Two() 
  {
    const Website = "Insta";
    console.log(Username);
  }
  Two();
}
One();

if (true) 
{
  const Username = "Abhi";
  if (Username == "Abhi") 
  {
    const Website = " Insta";
    console.log(Username + Website);
  }
}
console.log(AddOne(5));

function AddOne(Num) 
{
  return Num + 1;
}

const AddTwo = function (Num) 
{
  return Num + 2;
};