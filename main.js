console.log("main");

const BASE_URL = "https://raw.githubusercontent.com/Bamiot/pokeclick/master/";

const scripts = ["layer"];

const styles = ["style"];

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

scripts.forEach((filename) => addCode(filename));
styles.forEach((filename) => addStyle(filename));
