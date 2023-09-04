const fontSizeControl = document.querySelector("#font-size-control");
console.log(fontSizeControl);

const textSpan = document.querySelector("#text");
console.log(textSpan);

fontSizeControl.addEventListener("input", () => {
  textSpan.style.fontSize = fontSizeControl.value + "px";
});
