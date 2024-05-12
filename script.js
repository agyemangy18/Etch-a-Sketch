document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    const resetButton = document.getElementById("resetButton");

    // Function to create grid
    function createGrid(rows, cols) {
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        for (let i = 0; i < rows * cols; i++) {
            let cell = document.createElement("div");
            container.appendChild(cell).className = "grid-item";
        }
    }

    // Initial grid creation
    createGrid(16, 16);

    // Function to reset grid based on user input
    function resetGrid() {
        let squaresPerSide = prompt("Enter number of squares per side (max 100):");
        squaresPerSide = parseInt(squaresPerSide);
        if (!isNaN(squaresPerSide) && squaresPerSide > 0 && squaresPerSide <= 100) {
            container.innerHTML = ''; // Clear existing grid
            createGrid(squaresPerSide, squaresPerSide);
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    }

    // Event listener for reset button
    resetButton.addEventListener("click", resetGrid);

    // Hover effect
    container.addEventListener("mouseover", function(e) {
        if (e.target.classList.contains("grid-item")) {
            e.target.style.backgroundColor = "black";
        }
    });

    // Clear hover effect when mouse leaves the grid
    container.addEventListener("mouseleave", function(e) {
        if (e.target.classList.contains("grid-item")) {
            e.target.style.backgroundColor = "";
        }
    });
});
styles.css