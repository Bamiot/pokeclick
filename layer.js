console.log("layer");

const root = document.createElement("div");
root.classList.add("lc_root");
root.innerHTML = `
  <div id="lc_container">
    <div  id="lc_colapse">-</div>
    <div class="lc_button" id="lc_start">Start</div>
    <div class="lc_button" id="lc_stop">Stop</div>
    <div class="lc_button" id="lc_xy">XY</div>
  </div>
`;
document.body.appendChild(root);

// listener

document.getElementById("lc_start").addEventListener("click", start());
document.getElementById("lc_stop").addEventListener("click", stop());
document.getElementById("lc_xy").addEventListener("click", xy());
document.getElementById("lc_colapse").addEventListener("click", colapse());

function colapse() {
  document.getElementById("lc_container").classList.toggle("lc_colapse_flag");
}
