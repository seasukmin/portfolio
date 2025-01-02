const words = ["DW", "JavaScript", "DOM", "BOM", "document", "window", "Event"];
const input = document.querySelector("#input");
const scorePanel = document.querySelector(".score");
let count = 0;
let score = 0;
// 단어들이 뿌려질 container의 범위를 파악한다.
const container = document.querySelector("#container");
const maxPositionX = container.offsetWidth - 100;
const maxPositionY = container.offsetHeight - 100;

// 단어를 생성하고 화면에 출력하는 부분
function init() {
  words.forEach(function (el) {
    const span = document.createElement("span");
    span.innerHTML = el;
    span.classList.add("word");
    span.setAttribute("id", el); //?
    span.style.top = `${Math.floor(Math.random() * maxPositionY)}px`;
    span.style.left = `${Math.floor(Math.random() * maxPositionX)}px`;
    container.append(span);
  });
}
// 사용자가 입력한 텍스트와 동일한 id를 가진 span 태그를 제거한다.
input.addEventListener("change", function () {
  const word = document.querySelector(`span[id=${input.value}]`);
  if (word != null) {
    word.remove();
    score = score + 100;
    scorePanel.innerHTML = `총점 : ${score}`;
    count++;

    // 게임 클리어
    if (count == words.length) {
      alert("clear!!");
      if (confirm("재도전??")) {
        window.location.reload();
      }
    }
  }
  input.value = "";
});

function wordRain() {
  const words = document.querySelectorAll(".word");
  setInterval(function () {
    words.forEach(function (el) {
      const rectSize = el.getBoundingClientRect();
      el.style.top = `${rectSize.top - 65}px`;
      if (
        el.getBoundingClientRect().bottom >
        container.getBoundingClientRect().bottom -
          parseInt(getComputedStyle(input).height.split("px")[0])
      ) {
        //?
        el.remove();
      }
    });
  }, 1000);
}

init();
wordRain();
