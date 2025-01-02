const input = document.querySelector("#my-input");
const key = document.querySelector("#key");
const code = document.querySelector("#code");
const keypress = document.querySelector("#keypress");
const keydown = document.querySelector("#keydown");
const keyup = document.querySelector("#keyup");

function keypressEvent() {
  keypress.classList.add("check");

  setTimeout(function () {
    keypress.classList.remove("check");
  }, 300);
}

function keydownEvent(e) {
  const el = document.querySelector(`#${e.code}`);
  key.innerHTML = `key : ${e.key}`;
  code.innerHTML = `code : ${e.code}`;
  keydown.classList.add("check");
  el.classList.add("on");
  colorArr = [];
  for (let i = 0; i < 3; i++) {
    colorArr.push(parseInt(Math.random() * 256));
  }
  el.style.setProperty("--main-color", `rgb(${colorArr})`);

  setTimeout(function () {
    keydown.classList.remove("check");
    el.classList.remove("on");
  }, 300);
}

function keyupEvent(e) {
  const el = document.querySelector(`#${e.code}`);
  keyup.classList.add("check");
  el.classList.remove("on");

  setTimeout(function () {
    keyup.classList.remove("check");
  }, 300);
}

input.addEventListener("keypress", keypressEvent);
input.addEventListener("keydown", keydownEvent);
input.addEventListener("keyup", keyupEvent);
