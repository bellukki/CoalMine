const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const rnColorBtn = document.querySelector("#rnColorBtn");
const rnColor = document.querySelector("#rnColor");
const rnColor2 = document.querySelector("#rnColor2");

function changeColor() {
  const bgColor1 = Math.floor(Math.random() * colors.length);
  const bgColor2 = Math.floor(Math.random() * colors.length);
  if (bgColor1 === bgColor2) {
    return changeColor();
  }
  rnColor.style.background = `linear-gradient(90deg, ${colors[bgColor1]}, ${colors[bgColor2]})`;
  rnColor2.style.background = `linear-gradient(90deg, ${colors[bgColor2]}, ${colors[bgColor1]})`;
}

rnColorBtn.addEventListener("click", changeColor);
