const Buttons = document.querySelectorAll(".button");
const Body = document.querySelector("body");

Buttons.forEach(function (Bu) 
{
  console.log(Bu);
  Bu.addEventListener("click", function (E) 
  {
    console.log(E); 
    console.log(E.target); 
    if(E.target.id === 'beige')
    {
        Body.style.backgroundColor = E.target.id;
    }
    if(E.target.id === 'pink')
    {
        Body.style.backgroundColor = 'thistle';
    }
    if(E.target.id === 'peach')
    {
        Body.style.backgroundColor = 'peachpuff';
    }
    if(E.target.id === 'lavender')
    {
        Body.style.backgroundColor = 'lavenderblush';
    }
  });
});