// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  // Generate grid cells
  const gridContainer = document.querySelector('.grid-container');
  const cellSize = 20; // matches CSS grid cell size
  const cols = Math.ceil(window.innerWidth / cellSize);
  const rows = Math.ceil((window.innerHeight * 2) / cellSize); // 200% height

  // Create grid cells
  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement('div');
    cell.className = 'grid-cell';

    // Add coordinate overlay (DEBUG MODE)
    const row = Math.floor(i / cols);
    const col = i % cols;
    cell.innerHTML = `<span style="font-size: 4px; color: rgba(0,0,0,0.3); pointer-events: none;">c${col},r${row}</span>`;
    cell.style.display = 'flex';
    cell.style.alignItems = 'center';
    cell.style.justifyContent = 'center';

    gridContainer.appendChild(cell);
  }

  // Get all cells
  const cells = document.querySelectorAll('.grid-cell');

  // Define specific cells to animate based on coordinates
  // Helper function to get cell index from column and row
  function getCellIndex(col, row) {
    return row * cols + col;
  }

  // Fixed array of 12 cells to loop through
  const animationSequence = [
    getCellIndex(23, 13),  // c23, r13
    getCellIndex(60, 13),  // c60, r13
    getCellIndex(98, 12),  // c98, r12
    getCellIndex(30, 11),  // c30, r11
    getCellIndex(28, 10),  // c28, r10
    getCellIndex(32, 9),   // c32, r9
    getCellIndex(25, 13),  // c25, r13
    getCellIndex(63, 13),  // c63, r13
    getCellIndex(95, 12),  // c95, r12
    getCellIndex(35, 11),  // c35, r11
    getCellIndex(33, 10),  // c33, r10
    getCellIndex(27, 9)    // c27, r9
  ];

  // Cycle through the animation sequence
  let currentIndex = 0;

  function animateNextCell() {
    // Add pulse to current cell in sequence
    const cellIndex = animationSequence[currentIndex];
    if (cellIndex < cells.length) {
      cells[cellIndex].classList.add('pulse');

      // Remove pulse class after animation completes
      setTimeout(() => {
        cells[cellIndex].classList.remove('pulse');
      }, 2000);
    }

    // Move to next cell in sequence
    currentIndex = (currentIndex + 1) % animationSequence.length;
  }

  // Start the animation cycle
  setInterval(animateNextCell, 300); // Cycle every 300ms
});
