// selecting random number between 1-6
var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

// images/dice1.png --- dice6.png
var randomImageSource = "images/" + randomDiceImage;

// selecting the first img tag out of the two img
// tags present in the dicee.html
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource); //setting the src attr to random dice image between 1-6

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}else if ( randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩Player 2 wins!";
}else {
  document.querySelector("h1").innerHTML = "Draw!"
}
