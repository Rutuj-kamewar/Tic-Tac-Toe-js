console.log("welcome");
let audio = new Audio("sounds/music.mp3");
let audioTurn = new Audio("./sounds/ting.mp3");
let gameover = new Audio("sounds/gameover.mp3");
let turn = "X";
let khatam = false;

// background music switch
document.querySelector(".switch").addEventListener("change",function() {
  audio.paused ? audio.play() : audio.pause();
})



// function to change turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
  
};

// function to check for win
const checkWin = () => {
  let boxtexts = document.getElementsByClassName("box-text");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[1]].innerText === boxtexts[e[2]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtexts[e[0]].innerText + " won";
      khatam = true;
      gameover.play();
      document.querySelector(".imgbox").style.width = "200px";
    }
  });
};

// Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".box-text");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!khatam) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// Reset
reset.addEventListener("click", () => {
  boxtexts = document.querySelectorAll(".box-text");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  khatam = false;
//   document.querySelector(".line").style.width = "0vw";
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".imgbox").style.width ="0px";
});
