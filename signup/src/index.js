import "./styles.css";
let button = document.querySelector("button");
function doAlert() {
  window.alert("Yay you signed up!");
}
button.addEventListener("click", doAlert);
