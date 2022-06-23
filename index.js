
const textHeader = document.querySelector(".status");
const button = document.querySelector("button");
var firstThrow = true;
let point;

textHeader.innerText= " Roll  dice!";

function checkRoll(dice){
if(firstThrow){
if(dice === 2 ||dice === 3 ||dice === 12){
textHeader.innerText = "You rolled a "+dice+". Craps. You lose! Refresh to restart.";
disableButton();
}else if(dice === 7 ||dice === 11){
textHeader.innerText = "You rolled "+dice+". Goodjob. You win! Refresh to restart.";
disableButton();
}else{
point = dice;
textHeader.innerText = "You rolled "+dice+". Point!";
}
firstThrow = false;
}else{

if(dice === point){
textHeader.innerText = "You rolled  "+dice+". Point rolled again! You Win! Refresh to restart.";
disableButton();
}else if(dice === 7)
{
textHeader.innerText = "You rolled "+dice+". You Lose! Refresh to restart.";
disableButton();
}else{
textHeader.innerText = "You rolled  "+dice+". Keep rolling!";
}
}
}

function rollDice()
{
var dice = Math.ceil(Math.random()*11)+1;
checkRoll(dice);
}

function disableButton(){
button.removeEventListener("click",rollDice);
}

button.addEventListener("click",rollDice);


