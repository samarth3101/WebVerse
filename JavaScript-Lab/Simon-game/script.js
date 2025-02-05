let gameSeq = [];
let userSeq = [];
const btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let highestScore = 0; // Variable to track highest score

const h2CurrentLevel = document.querySelector("#current-level");
const h2HighestScore = document.querySelector("#highest-score");

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("GAME STARTED!!!");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  if (btn) {
    btn.classList.add("flash");
    setTimeout(function () {
      btn.classList.remove("flash");
    }, 250);
  }
}

function userFlash(btn) {
  if (btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
      btn.classList.remove("userflash");
    }, 250);
  }
}

function levelUp() {
  userSeq = [];
  level++;
  h2CurrentLevel.innerText = level; // Update current level display

  // Select a random button from all available buttons
  let randIdx = Math.floor(Math.random() * btns.length);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);
  console.log(gameSeq);

  gameFlash(randBtn); // Pass randBtn to the gameFlash function
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2CurrentLevel.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start`;

    // Check and update highest score
    if (level > highestScore) {
      highestScore = level; // Update highest score
      h2HighestScore.innerText = highestScore; // Update display
    }

    document.querySelector("body").style.backgroundColor = "red"; // Fixed typo

    // Flash red background and then reset
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = ""; // Reset to original color
    }, 150);

    setTimeout(reset, 1500); // Delay before resetting the game
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

const allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
  h2CurrentLevel.innerHTML = "0"; // Reset current level display
  h2HighestScore.innerHTML = highestScore; // Maintain highest score display
}
