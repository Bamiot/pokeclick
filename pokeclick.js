console.log("pokeclick: 0.0.4");

let time = 10;
let enable = false;

let x, y;
let clickListener;

function _click() {
  if (!x || !y) return;
  console.log("click", x, y);
  document.elementFromPoint(x, y).click();
}

function _loop() {
  if (enable) _click();
  setTimeout(_loop, time);
}

function _clickListener(e) {
  e.preventDefault();
  x = e.clientX;
  y = e.clientY;
  console.log(x, y);
  showTarget(x, y);
  document.removeEventListener("click", _clickListener);
}

function _toggleButton() {
  document.getElementById("lc_start").classList.toggle("hide");
  document.getElementById("lc_stop").classList.toggle("hide");
}

function xy() {
  setTimeout(() => {
    document.addEventListener("click", _clickListener);
  }, 10);
}

function start_loop() {
  enable = true;
  _toggleButton();
  _loop();
}

function stop_loop() {
  enable = false;
  _toggleButton();
}

function colapse() {
  document.getElementById("lc_container").classList.toggle("lc_colapse_flag");
}

function showTarget(x, y) {
  const a = 25;
  x -= a;
  y -= a;

  let atRemove = document.getElementsByClassName("lc_target");
  for (let i = 0; i < atRemove.length; i++) atRemove[i].remove();

  const target = document.createElement("div");
  target.style.top = y + "px";
  target.style.left = x + "px";
  target.classList.add("lc_target");
  document.body.appendChild(target);
}

const htmlString = `
  <div id="lc_container">
    <div class="lc_button" id="lc_start">Start</div>
    <div class="lc_button hide" id="lc_stop">Stop</div>
    <div class="lc_button" id="lc_xy">XY</div>
  </div>
  <div  id="lc_colapse">-</div>
`;

(() => {
  // root
  const root = document.createElement("div");
  root.classList.add("lc_root");
  root.innerHTML = htmlString;
  document.body.appendChild(root);

  // listener
  document.getElementById("lc_start").addEventListener("click", start_loop);
  document.getElementById("lc_stop").addEventListener("click", stop_loop);
  document.getElementById("lc_xy").addEventListener("click", xy);
  document.getElementById("lc_colapse").addEventListener("click", colapse);
})();
