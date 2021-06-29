console.log("Hello World!");

var skillButton = document.getElementById("skill-button");
var attackButton = document.getElementById("attack-button");
var featureButton = document.getElementById("feature-button");
var equipmentButton = document.getElementById("equipment-button");
var gameButton = document.getElementById("game-button");
var dynamicArea = document.getElementById("dynamic-area");

skillButton.addEventListener("click", skillButtonPress);
attackButton.addEventListener("click", attackButtonPress);
featureButton.addEventListener("click", featureButtonPress);
equipmentButton.addEventListener("click", equipmentButtonPress);
gameButton.addEventListener("click", gameButtonPress);

function skillButtonPress() {
  console.log("You pressed the Skills button!");
  dynamicArea.innerHTML =
    "You clicked the Skills button!  All of your skills will now be displayed in this area!";
}
function attackButtonPress() {
  console.log("You pressed the Attack button!");
  dynamicArea.innerHTML =
  "You clicked the Attacks button!  All of your Attacks will now be displayed in this area!";
}
function featureButtonPress() {
  console.log("You pressed the Feature button!");
  dynamicArea.innerHTML =
  "You clicked the Features button!  All of your Features will now be displayed in this area!";
}
function equipmentButtonPress() {
  console.log("You pressed the Equipment button!");
  dynamicArea.innerHTML =
  "You clicked the Equipment button!  All of your Equipment will now be displayed in this area!";
}
function gameButtonPress() {
  console.log("You pressed the Game button!");
  dynamicArea.innerHTML =
  "You clicked the Game button!  A player reference will now be displayed in this area!";
}
