const UserEmail1 = "AbhiDayal.com";
const UserEmail2 = "";

if (UserEmail1) 
{
  console.log("Got user email");
} 
else 
{
  console.log("Don't have user email");
}

if (UserEmail1 === false) 
{
  console.log("UserEmail1 is false");
} 
else if (UserEmail1 === 0) 
{
  console.log("UserEmail1 is 0");
}

if (UserEmail1 === 0) 
{
  console.log("Array is empty");
}

if (UserEmail2 === false) 
{
  console.log("UserEmail2 is false");
}
else if (UserEmail2 === 0) 
{
  console.log("UserEmail2 is 0");
} 
else if (UserEmail2 === -0) 
{
  console.log("UserEmail2 is -0");
} 
else if (UserEmail2 === 0n) 
{
  console.log("UserEmail2 is BigInt 0n");
} 
else if (UserEmail2 === "") 
{
  console.log("UserEmail2 is an empty string");
} 
else if (UserEmail2 === null) 
{
  console.log("UserEmail2 is null");
} 
else if (UserEmail2 === undefined) 
{
  console.log("UserEmail2 is undefined");
} 
else if (Number.isNaN(UserEmail2)) 
{
  console.log("UserEmail2 is NaN");
}

if (UserEmail2 === "0") 
{
  console.log('UserEmail2 is the string "0"');
} 
else if (UserEmail2 === "false") 
{
  console.log('UserEmail2 is the string "false"');
} 
else if (UserEmail2 === " ") 
{
  console.log("UserEmail2 is a string with a space");
} 
else if (Array.isArray(UserEmail2) && UserEmail2.length === 0) 
{
  console.log("UserEmail2 is an empty array");
} 
else if 
(
  typeof UserEmail2 === "object" && UserEmail2 !== null && Object.keys(UserEmail2).length === 0
) 
{
  console.log("UserEmail2 is an empty object");
} 
else if (typeof UserEmail2 === "function") 
{
  console.log("UserEmail2 is a function");
}

if (UserEmail1.length === 0) 
{
  console.log("Array is empty");
}

const EmptyObj = {};
if (Object.keys(EmptyObj).length === 0) 
{
  console.log("Object is empty");
}

let Val1;
Val1 = 5 ?? 10;
console.log(Val1);

let Val2;
Val2 = null ?? 10;
console.log(Val2);

let Val3;
Val3 = undefined ?? 15;
console.log(Val3);

const IceCreamPrice = 100;

IceCreamPrice <= 70 ? console.log("Less than 70") : console.log("Greater than 70");