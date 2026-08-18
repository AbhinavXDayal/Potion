const RandomColor = function () 
{
  const Hex = "0123456789ABCDEF";
  let Color = "#";
  
  for (let I = 0; I < 6; I++)
  {
    Color += Hex[Math.floor(Math.random() * 16)];
  }
  return Color;
};

let IntervalId;
const StartChangingColor = function () 
{
  if (!IntervalId) 
  {
    IntervalId = setInterval(ChangeBgColor, 1000);
  }

  function ChangeBgColor() 
  {
    document.body.style.backgroundColor = RandomColor();
  }
};

const StopChangingColor = function () 
{
  clearInterval(IntervalId);
  IntervalId = null;
};

document.querySelector("#start").addEventListener("click", StartChangingColor);
document.querySelector("#stop").addEventListener("click", StopChangingColor);