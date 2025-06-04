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



const draw = () => {
  submit.innerText = "its a Draw! Want to play another round?";
  submit.style.backgroundColor = "#6e83d3";
};







const winner = (userwin) => {
  if (userwin) {
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






const game = (userchoice) => {
  let compchoice = gencompchoice();
  console.log("You chose:", userchoice);
  console.log("Computer chose:", compchoice);
  if (userchoice == compchoice) {
    return draw();
  }
  let userwin = true;
  if (userchoice == "rock") {
    userwin = compchoice == "paper" ? false : true;
  } else if (userchoice == "paper") {
    userwin = compchoice == "scissors" ? false : true;
  } else if (userchoice == "scissors") {
    userwin = compchoice == "rock" ? false : true;
  }
  winner(userwin);
};





items.forEach((item) => {
  item.addEventListener("click", () => {
    const userchoice = item.getAttribute("id");
    game(userchoice);
  });
});
