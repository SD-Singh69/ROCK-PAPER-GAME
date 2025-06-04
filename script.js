let userscore = 0;
let computerscore = 0;

// selecting elements //

let user = document.querySelector("#you");

let computer = document.querySelector("#comp");

let submit = document.querySelector(".submit");

const items = document.querySelectorAll(".items button");

// genrating random no. //
const gencompchoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

const Draw = () => {
  submit.innerText = "its a Draw! Want to play another round?";
  submit.style.backgroundColor = "#6e83d3";
};

const winner = (UserWin) => {
  if (UserWin) {
    userscore++;
    user.innerText = userscore;
    submit.innerText = "You won! Want to play another round?";
    submit.style.backgroundColor = "green";
  } else {
    computerscore++;
    computer.innerText = computerscore;
    submit.innerText = "You lost! Want to play another round?";
    submit.style.backgroundColor = "red";
  }
};

const game = (UserChoice) => {
  let compchoice = gencompchoice();
  console.log("You chose:", UserChoice);
  console.log("Computer chose:", compchoice);
  if (UserChoice == compchoice) {
    return Draw();
  }
  let UserWin = true;
  if (UserChoice == "rock") {
    UserWin = compchoice == "paper" ? false : true;
  } else if (UserChoice == "paper") {
    UserWin = compchoice == "scissors" ? false : true;
  } else if (UserChoice == "scissors") {
    UserWin = compchoice == "rock" ? false : true;
  }
  winner(UserWin);
};

items.forEach((item) => {
  item.addEventListener("click", () => {
    const UserChoice = item.getAttribute("id");
    game(UserWin);
  });
});
