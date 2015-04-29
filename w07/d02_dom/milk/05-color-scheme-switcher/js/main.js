/*
var redButton = document.querySelector(".one");
redButton.addEventListener("click", changeRed);

function changeRed(){
  document.body.style.backgroundColor = "red"
  document.body.style.color = "black"
};

var yellowButton = document.querySelector(".four");
yellowButton.addEventListener("click", changeYellow);

function changeYellow(){
  document.body.style.backgroundColor = "yellow"
  document.body.style.color = "black"
};


var whiteButton = document.querySelector(".two");
whiteButton.addEventListener("click", changeWhite);

function changeWhite(){
  document.body.style.backgroundColor = "white"
  document.body.style.color = "black"
};


var blueButton = document.querySelector(".three");
blueButton.addEventListener("click", changeBlue);

function changeBlue(){
  document.body.style.backgroundColor = "blue"
  document.body.style.color = "black"
};

*/
document.querySelector("#switcher").addEventListener("click", function(event) {
  document.body.className = event.target.className
})
