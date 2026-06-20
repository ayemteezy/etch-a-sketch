const container = document.querySelector("#container");
const cell = document.querySelector(".cell");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let userInput = parseInt(
    prompt("What is the number of squares per side for the new grid?"),
  );

  // checks if userInput is valid 1 to 100
  if (userInput > 0 && userInput <= 100) {
    generateGrid(userInput);
  } else {
    alert("Please enter a valid number between 1 and 100!");
  }
});

function generateGrid(numOfSquares) {
  // erase the old squares before drawing new ones
  container.innerHTML = "";

  let numOfGrid = numOfSquares ** 2;
  let cellWidth = 100 / numOfSquares;

  // this loop will create the 16x16 grid
  for (let i = 0; i < numOfGrid; i++) {
    const cell = document.createElement("div");
    cell.classList = "cell";
    cell.style.width = `${cellWidth}%`;
    container.append(cell);
  }
}

document.addEventListener("mouseover", (e) => {
  if (e.target.matches(".cell")) {
    e.target.style.backgroundColor = "black";
  }
});

generateGrid(16);
