console.log("main: 0.0.1");

const BASE_URL = "https://raw.githubusercontent.com/Bamiot/pokeclick/master/";

const scripts = ["pokeclick"];

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

for (const script in scripts) addCode(script);
for (const style in styles) addStyle(style);
