const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

sizeControl.addEventListener("input", sizeInputHandler);

function sizeInputHandler(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}
