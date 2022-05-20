console.log("main: 0.0.3");

const LC_BASE_URL =
  "https://raw.githubusercontent.com/Bamiot/pokeclick/master/";

const lc_scripts = ["pokeclick"];

const lc_styles = ["style"];

function lc_addCode(filename) {
  fetch(`${LC_BASE_URL}${filename}.js`)
    .then((response) => response.text())
    .then((text) => {
      const sc = document.createElement("script");
      sc.className = `lc_script`;
      sc.innerHTML = text;
      document.body.appendChild(sc);
    });
}

function lc_addStyle(filename) {
  fetch(`${LC_BASE_URL}${filename}.css`)
    .then((response) => response.text())
    .then((text) => {
      const st = document.createElement("style");
      st.className = `lc_style`;
      st.innerHTML = text;
      document.body.appendChild(st);
    });
}

function injectClicker() {
  for (const script of lc_scripts) lc_addCode(script);
  for (const style of lc_styles) lc_addStyle(style);
}

function removeInjected() {
  const scripts = document.getElementsByClassName("lc_script");
  for (const script of scripts) script.remove();
  const styles = document.getElementsByClassName("lc_style");
  for (const style of styles) style.remove();
}
