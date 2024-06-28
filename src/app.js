/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  // variables

  const who = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
  const action = ["comió", "orinó", "aplastó", "rompió"];
  const what = ["mi tarea", "mi teléfono", "el coche"];
  const when = [
    "antes de la clase",
    "cuando estaba durmiendo",
    "mientras hacía ejercicio",
    "durante mi almuerzo",
    "mientras estaba rezando"
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
