const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  lose: 0,
  tie: 0,
};

updatescoreelements();

function compsmove() {
  let computermove = Math.random();
  if (computermove >= 0 && computermove < 1 / 3) {
    computermove = "rock";
  } else if (computermove >= 1 / 3 && computermove < 2 / 3) {
    computermove = "paper";
  } else {
    computermove = "scissors";
  }
  return computermove;
}
function playgame(playersmove) {
  let computer = compsmove();
  let result = "";
  if (playersmove === "rock") {
    if (computer === "rock") {
      result = "tie";
    } else if (computer === "paper") {
      result = "you win";
    } else if (computer === "scissors") {
      result = "you lose";
    }
  }
  if (playersmove === "paper") {
    if (computer === "rock") {
      result = "you win";
    } else if (computer === "paper") {
      result = "tie";
    } else if (computer === "scissors") {
      result = "you lose";
    }
  }
  if (playersmove === "scissors") {
    if (computer === "rock") {
      result = "you lose";
    } else if (computer === "paper") {
      result = "you win";
    } else if (computer === "scissors") {
      result = "tie";
    }
  }
  if (result === "you win") {
    score.wins++;
  } else if (result === "you lose") {
    score.lose++;
  } else if (result === "tie") {
    score.tie++;
  }
  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".sentance1").innerHTML = result;
  document.querySelector(".sentance1").classList.add("stpara");
  document.querySelector(
    ".sentance2"
  ).innerHTML = `you chosed ${playersmove} and computer chosed ${computer}`;
  document.querySelector(".sentance2").classList.add("secpara");

  updatescoreelements();
}
function updatescoreelements() {
  document.querySelector(".updatescore").innerHTML = `Wins: ${score.wins}
     
        lose:${score.lose} tie:${score.tie}`;
  document.querySelector(".updatescore").classList.add("para");
}
