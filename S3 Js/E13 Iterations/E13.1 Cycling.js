for (let Index = 0; Index <= 10; Index++) 
{
  const Element = Index;
  console.log("Values are - ", Element);
}
  
for (let I = 0; I <= 3; I++) 
{
  console.log(`Outer loop val - ${I}`);
  for (let J = 0; J <= 3; J++) 
  {
    console.log(`Inner loop val - ${J} & Outer loop val - ${I}`);
  }
}
  
for (let X = 1; X <= 3; X++) 
{
  console.log(`Outer loop val - ${X}`);
  for (let Y = 1; Y <= 3; Y++) 
  {
    console.log(X + "*" + Y + "=" + X * Y);
  }
}
  
let MyArr = ["Germany", "Finland", "Sydeny"];
console.log(MyArr.length);
  
for (let Z = 0; Z < MyArr.length; Z++) 
{
  const Element = MyArr[Z];
  console.log(Element);
}
  
for (let A = 1; A <= 10; A++) 
{
  if (A == 5) 
  {
    console.log(`Detected 5`);
    break;
  }
  console.log(`Val of A is - ${A}`);
}
  
for (let B = 1; B <= 10; B++) 
{
  if (B == 5) 
  {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Val of B is - ${B}`);
}  