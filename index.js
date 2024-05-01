const choices = ["rock", "paper", "scissor"];
const playerC = document.getElementById("playerC");
const aiC = document.getElementById("aiC");
const endR = document.getElementById("endR");

playerChoice;

aiChoice;

if (playerChoice === "rock"){
    aiChoice = "paper";
}

if (playerChoice === "paper"){
    aiChoice = "scissor";
}

if (playerChoice === "scissor"){
    aiChoice = "rock";
}

