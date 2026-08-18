const MyObj = 
{
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
};

for (const Key in MyObj) 
{
  console.log(`${Key} shortcut is for ${MyObj[Key]}`);
}

const Arr = ["Js", "Cpp", "Py", "Rb"];

for (const Key in Arr) 
{
  console.log(Arr[Key]);
}

const Arr2 = ["Germany", "Italy", "France", "Spain"];

Arr2.forEach(function (Val) 
{
  console.log(Val);
});

const Arr3 = ["Germany", "Italy", "France", "Spain"];

Arr3.forEach((Item) => 
{
  console.log(Item);
});

function PrintMe(Item2) 
{
  console.log(Item2);
}

Arr.forEach(PrintMe);

const Arr4 = ["Alice", "Alex", "Apex"];

Arr4.forEach((Item3, Index, Arr) => 
{
  console.log(Item3, Index, Arr);
});

const Arr5 = 
[
  {
    LangName: "Javascript",
    LangFileName: "Js",
  },
  {
    LangName: "Cpp",
    LangFileName: "C++",
  },
  {
    LangName: "Python",
    LangFileName: "Py",
  },
];

Arr5.forEach((Val2) => 
{
  console.log(Val2.LangName);
});