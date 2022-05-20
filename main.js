console.log("main: 0.0.2");

const LC_BASE_URL =
  "https://raw.githubusercontent.com/Bamiot/pokeclick/master/";

const lc_scripts = ["pokeclick"];

const lc_styles = ["style"];

function lc_addCode(filename) {
  fetch(`${LC_BASE_URL}${filename}.js`)
    .then((response) => response.text())
    .then((text) => {
      document.body.appendChild(document.createElement("script")).innerHTML =
        text;
    });
}

function lc_addStyle(filename) {
  fetch(`${LC_BASE_URL}${filename}.css`)
    .then((response) => response.text())
    .then((text) => {
      document.body.appendChild(document.createElement("style")).innerHTML =
        text;
    });
}

function injectClicker() {
  for (const script of lc_scripts) lc_addCode(script);
  for (const style of lc_styles) lc_addStyle(style);
}
