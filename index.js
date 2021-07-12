"use strict";

//VARIABLES
const number = document.querySelector(".number");
const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
const input = document.querySelector(".guess");
const secret = document.querySelector(".secret");
const message = document.querySelector(".message");
const attempt = document.querySelector(".attempt");
const body = document.querySelector("body");

const secretValue = Math.ceil(Math.random() * 10);
let turns = 9;
attempt.textContent = turns;

//FUNCTION
const checkNumber = () => {
  if (turns > 1) {
    turns--;

    //IF NUMBER MATCH
    if (Number(input.value) === secretValue) {
      message.textContent = "🎉 You won the game";
      secret.textContent = secretValue;
      checkBtn.setAttribute("disabled", "");
      input.setAttribute("disabled", "");
      body.style.backgroundColor = "#60b347";
    }
    //IF YOUR NUMBER IS HEIGHER
    else if (Number(input.value) > secretValue) {
      message.textContent = "❌ Your number is too high";
    }
    //IF YOUR NUMBER IS LOWER
    else if (Number(input.value) < secretValue && Number(input.value) > 0) {
      message.textContent = "❌ Your number is too low";
    }
    //IF YOU DON'T PUT ANY NUMBER
    else {
      message.textContent = "❌ Input a valid Number";
    }
    attempt.textContent = turns;
  } else {
    console.log("sorry you lost your all turns");
    message.textContent = "😢 Oops you lost!";
    attempt.textContent = 0;
    checkBtn.setAttribute("disabled", "");
    input.setAttribute("disabled", "");
  }
};

//EVENTS
againBtn.addEventListener("click", () => window.location.reload());
checkBtn.addEventListener("click", () => checkNumber());
