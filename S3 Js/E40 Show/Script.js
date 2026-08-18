let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function () 
{
  if (password.type == "password") 
  {
    password.type = "text";
    eyeicon.src = "E44_5.png";
  } 
  else 
  {
    password.type = "password";
    eyeicon.src = "E44_4.png";
  }
}