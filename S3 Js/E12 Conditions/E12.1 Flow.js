const Temperature = 41;

if (Temperature < 50) 
{
  console.log("Less than 50");
} 
else 
{
  console.log("Temperature is greater than 50");
}

const Score = 150;

if (Score > 100) 
{
  const Power = "Fly";
  console.log(`User power - ${Power}`);
}

const Score2 = 200;

if (Score2 > 100) 
{
  var Power2 = "Fly 2";
  console.log(`User power - ${Power2}`);
}
console.log(`User power - ${Power2}`);

const Balance = 1000;

if (Balance > 500) console.log("Test");

const Bal = 1000;

if (Bal < 500) 
{
  console.log("Less than 500");
} 
else if (Bal < 750) 
{
  console.log("Less than 750");
} 
else 
{
  console.log("Less than 1500");
}

const UserLoggedIn = true;
const DebitCard = true;
const LoggedInFromGoogle = false;
const LoggedInFromEmail = true;

if (UserLoggedIn && DebitCard)
{
  console.log("Allow to buy course");
}

if (LoggedInFromGoogle || LoggedInFromEmail) 
{
  console.log("User logged in");
}