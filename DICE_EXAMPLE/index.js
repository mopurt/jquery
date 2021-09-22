var randomNumber1 = Math.round(Math.random() * 5 + 1);
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
var randomNumber2 = Math.round(Math.random() * 5 + 1);
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if(randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHmtl = "Draw!";
} else if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHmtl = "Player 1 wins!";
} else {
  document.querySelector("h1").innerHmtl = "Player 2 wins!";
}
