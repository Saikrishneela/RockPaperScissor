let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const message = document.querySelector("#msg");

const playerScore = document.querySelector("#user-score");

const compScore = document.querySelector("#comp-score");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randId = Math.floor(Math.random() * options.length);
  return options[randId];
};

const drawGame = () => {
  message.innerText = "Game Was Draw. Play again";
  message.style.backgroundColor = "blue";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin === true) {
    message.innerText = `You Win! ${userChoice} Beats ${computerChoice}`;
    message.style.backgroundColor = "green";
    playerScore.innerText = ++userScore;
  } else {
    message.innerText = `You Lose! ${computerChoice} Beats ${userChoice}`;
    message.style.backgroundColor = "red";
    compScore.innerText = ++computerScore;
  }
};

const playGame = (userChoice) => {
  const computerChoice = genComputerChoice();
  console.log(`compChoice = ${computerChoice}`);

  if (userChoice === computerChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "scissor" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id").toLowerCase();
    playGame(userChoice);
  });
});
