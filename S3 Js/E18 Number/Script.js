let RandomNum = parseInt(Math.random() * 10 + 1);
console.log(RandomNum);

const Submit = document.querySelector("#subt");
const UserInput = document.querySelector("#guessField");
const GuessSlot = document.querySelector(".guesses");
const Remaining = document.querySelector(".lastResult");
const LoOrHi = document.querySelector(".lowOrHi");
const StartOver = document.querySelector(".resultParas");

const P = document.createElement("p");

let PrevGuess = [];
let NumGuess = 1;
let PlayGame = true;

if (PlayGame) {
  Submit.addEventListener("click", function (e) {
    e.preventDefault();
    const Guess = parseInt(UserInput.value);
    ValidateGuess(Guess);
  });
}

function ValidateGuess(Guess) {
  if (isNaN(Guess)) {
    alert("Enter valid num");
  } else if (Guess < 1) {
    alert("Enter num greater than 0");
  } else if (Guess > 10) {
    alert("Enter num lower than 10");
  } else {
    PrevGuess.push(Guess);
    if (Guess === RandomNum) {
      DisplayGuess(Guess);
      DisplayMsg(`Guessed it right : ${Guess}`);
      EndGame();
    } else {
      if (NumGuess === 3) {
        DisplayGuess(Guess);
        DisplayMsg(`Game over, random num was ${RandomNum}`);
        EndGame();
      } else {
        DisplayGuess(Guess);
        CheckGuess(Guess);
      }
    }
  }
}

function CheckGuess(Guess) {
  if (Guess === RandomNum) {
    DisplayMsg("Guessed it right!");
    EndGame();
  } else if (Guess < RandomNum) {
    DisplayMsg("Number is too low.");
  } else if (Guess > RandomNum) {
    DisplayMsg("Number is too high.");
  }
}

function DisplayGuess(Guess) {
  UserInput.value = "";
  GuessSlot.innerHTML += `${Guess}, `;
  NumGuess++;
  Remaining.innerHTML = `${4 - NumGuess}`;
}

function DisplayMsg(Message) {
  LoOrHi.innerHTML = `<h2>${Message}</h2>`;
}

function EndGame() {
  UserInput.value = "";
  UserInput.setAttribute("disabled", "");
  P.classList.add("button");
  P.innerHTML = `<h2 id="NewGame">Start new game</h2>`;
  StartOver.appendChild(P);
  PlayGame = false;
  NewGame();
}

function NewGame() {
  const NewGameButton = document.querySelector("#NewGame");
  NewGameButton.addEventListener("click", function (e) {
    RandomNum = parseInt(Math.random() * 10 + 1);
    console.log(RandomNum);

    PrevGuess = [];
    NumGuess = 1;
    GuessSlot.innerHTML = "";
    Remaining.innerHTML = `${4 - NumGuess}`;
    UserInput.removeAttribute("disabled");
    StartOver.removeChild(P);
    PlayGame = true;
  });
}