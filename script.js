const body = document.querySelector("body");
const workSection = document.querySelector(".workSection");
const container = document.querySelector("#container");
const btn = document.querySelector(".btn");
const inputBox = document.querySelector(".inputBox");
const clearBtn = document.querySelector(".clearBtn");

const checkBox = document.createElement("input");
checkBox.classList.add("checkBox");

function randomColor() {
  const h = Math.floor(Math.random() * 360);
  return `hsl(${h}, 100%, 30%)`;
}

function createGrid(size) {
  container.innerHTML = "";
  const itemSize = `calc(100% / ${size})`;

  const checkedOrNot = document.querySelector(".checkBox");
  checkedOrNot.checked = false;

  for (let i = 0; i < size * size; i++) {
    const squareDiv = document.createElement("div");

    squareDiv.classList.add("squareDiv");
    squareDiv.style.width = itemSize;
    squareDiv.style.height = itemSize;
    squareDiv.style.border = "none";

    squareDiv.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = randomColor();

      if (checkedOrNot.checked) {
        let currentOpacity = Number(e.target.style.opacity);
        if (currentOpacity < 1) {
          e.target.style.opacity = currentOpacity + 0.1;
        }
      } else {
        e.target.style.opacity = 1;
      }
    });

    container.appendChild(squareDiv);
  }
}

btn.addEventListener("click", () => {
  let size = inputBox.value;
  size = parseInt(size);

  if (size && size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Type a number between 1 and 100, please!");
    inputBox.value = "";
    inputBox.focus();
  }
});

clearBtn.addEventListener("click", () => {
  const square = document.querySelectorAll(".squareDiv");
  square.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});

createGrid(16);
