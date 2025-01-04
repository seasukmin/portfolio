const mainheadbottom = document.querySelector(".mainhead-bottom");
mainheadbottom.addEventListener("click", function () {
  location.href = "#aboutme";
});

const headlinenav = document.querySelectorAll(".headline-nav");
headlinenav.forEach((element, idx) => {
  element.addEventListener("click", function () {
    if (idx == 0) {
      location.href = "#aboutme";
    }
    if (idx == 1) {
      location.href = "#skiils";
    }
    if (idx == 2) {
      location.href = "#results";
    }
    if (idx == 3) {
      location.href = "#middle-pro";
    }
    if (idx == 4) {
      location.href = "#last-pro";
    }
  });
});
