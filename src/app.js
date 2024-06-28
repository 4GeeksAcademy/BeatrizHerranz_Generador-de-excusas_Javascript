/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  // variables

  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "my phone", "the car"];
  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  // Funciones

  const getRandomElement = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const generateExcuse = () => {
    let randomWho = getRandomElement(who);
    let randomAction = getRandomElement(action);
    let randomWhat = getRandomElement(what);
    let randomWhen = getRandomElement(when);

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  };

  // function generateExcuse() {
  //   let randomWho = who[Math.floor(Math.random() * who.length)];
  //   let randomAction = action[Math.floor(Math.random() * action.length)];
  //   let randomWhat = what[Math.floor(Math.random() * what.length)];
  //   let randomWhen = when[Math.floor(Math.random() * when.length)];

  //   return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  // }

  //No tocar esta seccion del codigo
  document.querySelector("#excuse").innerHTML = generateExcuse();
};
