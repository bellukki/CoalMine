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

const rnColorBtn = document.querySelector("button");

function changeColor(event) {
  event.preventDefault();
  const bgColor1 = Math.floor(Math.random() * colors.length);
  const bgColor2 = Math.floor(Math.random() * colors.length);
  if (bgColor1 === bgColor2) {
    const bgColor1 = bgColor2 - 1;
    document.body.style.background = `linear-gradient(90deg, ${colors[bgColor1]}, ${colors[bgColor2]})`;
  } else {
    document.body.style.background = `linear-gradient(90deg, ${colors[bgColor1]}, ${colors[bgColor2]})`;
  }
}

rnColorBtn.addEventListener("click", changeColor);
