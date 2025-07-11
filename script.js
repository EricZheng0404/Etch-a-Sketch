document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".flex-container");
  let gridSize = 30; // 16x16 grid
  let currentColor = "black"; // Default color

  // Set up the flexbox container
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.width = "600px";
  container.style.height = "600px";
  container.style.border = "2px solidrgb(238, 232, 232)";

  // Create grid cells
  createGrid(container.clientWidth, gridSize, currentColor);

  const changeSizeButton = document.getElementById("change-size");
  changeSizeButton.addEventListener("click", () => {
    const newSize = prompt(
      "Enter the new size of the grid less than or equal to 150"
    );
    if (newSize <= 150) {
      gridSize = newSize;
    } else {
      alert("Please enter a number less than or equal to 150");
    }
    createGrid(container.clientWidth, gridSize, currentColor);
  });

  // Handle color button clicks
  const colorButtons = document.querySelectorAll(".color-button");
  colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      colorButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");
      // Update current color
      currentColor = button.getAttribute("data-color");
      // Update all existing cells to use new color for drawing
      updateCellDrawingColor(currentColor);
    });
  });

  const clearGridButton = document.getElementById("clear-grid");
  clearGridButton.addEventListener("click", () => {
    const cells = document.querySelectorAll(".grid-cell");
    cells.forEach((cell) => {
      cell.style.backgroundColor = "white";
    });
  });
});

function createGrid(containerSize, gridSize, color) {
  const container = document.querySelector(".flex-container");
  container.innerHTML = "";
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cell.style.width = `${containerSize / gridSize}px`;
    cell.style.height = `${containerSize / gridSize}px`;
    cell.style.backgroundColor = "white";
    cell.style.border = "1px solid #ccc";
    cell.style.boxSizing = "border-box";

    // Add hover effect for drawing
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = color;
    });

    container.appendChild(cell);
  }
}

function updateCellDrawingColor(color) {
  const cells = document.querySelectorAll(".grid-cell");
  cells.forEach((cell) => {
    // Remove existing mouseenter listeners
    cell.replaceWith(cell.cloneNode(true));
  });

  // Re-add mouseenter listeners with new color
  const newCells = document.querySelectorAll(".grid-cell");
  newCells.forEach((cell) => {
    if (cell.style.backgroundColor !== "white") {
      cell.style.backgroundColor = color;
    }
    cell.addEventListener("mouseenter", () => {
      cell.style.backgroundColor = color;
    });
  });
}
