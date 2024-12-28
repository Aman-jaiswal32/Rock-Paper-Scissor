const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-con");
let ngame = document.querySelector(".btn")

const upoint = document.querySelector(".u-score");
const cpoint = document.querySelector(".c-score");
let uwin = 0;
let cwin = 0;

const genchoice = () =>{
  let arr = ["stone", "paper", "scissors"];
  let cindx = Math.floor(Math.random() * 3);
  return arr[cindx];
}

const newgame = () => {
  uwin = 0;
  cwin = 0;
  upoint.innerText ="0";
  cpoint.innerText = "0";
  msg.innerText = "Play Game";
}

const drawgame = () => {
  msg.innerText = "IT Was a Draw";
  msg.style.backgroundColor = "blue";
}

const showwinner = (userwin,userchoice,compchoice) => {
  if(userwin === true){
    uwin++;
    upoint.innerText = uwin;
    msg.innerText = `you won! your ${userchoice} beats computer's ${compchoice}`;
    msg.style.backgroundColor = "green";
  }else{
    cwin++;
    cpoint.innerText = cwin;
    msg.innerText = `you loose! computer's ${compchoice} beats your's ${userchoice}`;
    msg.style.backgroundColor = "red";
    msgContainer.classList.remove("pas");
    msg.style.padding = "1rem";
  }
}

const playgame = (userchoice) => {
  const compchoice = genchoice();

  if(userchoice === compchoice){
    drawgame();
  }else{
    let userwin = true;
    if(userchoice === "rock"){
      //paper,scissors
      userwin = compchoice === "paper" ? false : true;
    }else if(userchoice === "paper"){
      //rock, scissor
      userwin = compchoice === "scissors" ? false : true;
    }else{
      //rock,paper
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin,userchoice,compchoice);
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  })
})

ngame.addEventListener("click", newgame);