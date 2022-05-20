const root = document.createElement("div");
root.style.position = "fixed";
root.style.bottom = "0";
root.style.right = "0";
root.style.width = "100px";
root.style.height = "100px";
root.style.zIndex = "9999";
root.style.backgroundColor = "red";
root.style.borderRadius = "50%";
root.style.cursor = "pointer";
root.style.transition = "all 0.5s";
root.style.opacity = "1";

document.body.appendChild(root);

function addCode(url) {
  fetch(url)
    .then((response) => response.text())
    .then((text) => {
      document.body.appendChild(document.createElement("script")).innerHTML =
        text;
    });
}
