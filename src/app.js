/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//♦ ♥ ♠ ♣
window.onload = function() {
  generateCard();
};
document.querySelector("button").addEventListener("click", generateCard);
function generateCard() {
  let card = document.querySelector(".card");
  let top = document.querySelector(".topSymbol");
  let bottom = document.querySelector(".bottomSymbol");
  let n = Math.floor(Math.random() * 4);
  switch (n) {
    case 0:
      card.classList.add("heart");
      top.style.color = "red";
      bottom.style.color = "red";
      top.innerHTML = "♥";
      bottom.innerHTML = "♥";
      break;
    case 1:
      card.classList.add("diamond");
      top.style.color = "red";
      bottom.style.color = "red";
      top.innerHTML = "♦";
      bottom.innerHTML = "♦";
      break;
    case 2:
      card.classList.add("spade");
      top.style.color = "black";
      bottom.style.color = "black";
      top.innerHTML = "♠";
      bottom.innerHTML = "♠";
      break;
    case 3:
      card.classList.add("club");
      top.style.color = "black";
      bottom.style.color = "black";
      top.innerHTML = "♣";
      bottom.innerHTML = "♣";
  }
  document.querySelector(".number").innerHTML = rndmNumber();
}
function rndmNumber() {
  let i = Math.floor(Math.random() * 13) + 1;
  switch (i) {
    case 1:
      i = "A";
      break;
    case 11:
      i = "J";
      break;
    case 12:
      i = "Q";
      break;
    case 13:
      i = "K";
  }
  return i;
}
