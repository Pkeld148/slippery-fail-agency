console.log("Hello World!");

var skillButton = document.getElementById("skill-button");
var attackButton = document.getElementById("attack-button");
var featureButton = document.getElementById("feature-button");
var equipmentButton = document.getElementById("equipment-button");
var gameButton = document.getElementById("game-button");

skillButton.addEventListener("click", skillButtonPress);
attackButton.addEventListener("click", attackButtonPress);
featureButton.addEventListener("click", featureButtonPress);
equipmentButton.addEventListener("click", equipmentButtonPress);
gameButton.addEventListener("click", gameButtonPress);

function skillButtonPress() {
  console.log("You pressed the Skills button!");
}
function attackButtonPress() {
  console.log("You pressed the Attack button!");
}
function featureButtonPress() {
  console.log("You pressed the Feature button!");
}
function equipmentButtonPress() {
  console.log("You pressed the Equipment button!");
}
function gameButtonPress() {
  console.log("You pressed the Game button!");
}
