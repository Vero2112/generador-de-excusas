/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let numeroaleatorio = Math.random() * 10;
  document.querySelector("#Btn").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = generadordeexcusas();
  });
  console.log("Hello Rigo from the console!");
};

let generadordeexcusas = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoindex = Math.floor(Math.random() * who.length);
  let whatindex = Math.floor(Math.random() * what.length);
  let whenindex = Math.floor(Math.random() * when.length);
  return who[whoindex] + " " + what[whatindex] + " " + when[whenindex];
};
