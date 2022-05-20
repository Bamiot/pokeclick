let time = 10;
let enable = false;

let x, y;
let clickListener;

function _click() {
  console.log("click");
  document.elementFromPoint(x, y).click();
}

function _loop() {
  if (enable) _click();
  setTimeout(_loop, time);
}

function _clickListener(e) {
  x = e.clientX;
  y = e.clientY;
  console.log(x, y);
  document.removeEventListener("click", _clickListener);
}

function xy() {
  document.addEventListener("click", _clickListener);
}

function start() {
  enable = true;
  _loop();
}

function stop() {
  enable = false;
}
