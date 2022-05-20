console.log("main: 0.0.2");

const BASE_URL = "https://raw.githubusercontent.com/Bamiot/pokeclick/master/";

const lc_scripts = ["pokeclick"];

const lc_styles = ["style"];

function addCode(filename) {
  fetch(`${BASE_URL}${filename}.js`)
    .then((response) => response.text())
    .then((text) => {
      document.body.appendChild(document.createElement("script")).innerHTML =
        text;
    });
}

function addStyle(filename) {
  fetch(`${BASE_URL}${filename}.css`)
    .then((response) => response.text())
    .then((text) => {
      document.body.appendChild(document.createElement("style")).innerHTML =
        text;
    });
}

function injectClicker() {
  for (const script in lc_scripts) addCode(script);
  for (const style in lc_styles) addStyle(style);
}
