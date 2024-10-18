Conway's Game of Life in JavaScript
This project is an implementation of John Conway’s Game of Life using JavaScript, showcasing the famous cellular automaton simulation. The game operates on a grid of cells that evolve over successive generations based on a simple set of rules, creating complex and often unpredictable patterns from simple initial states.

Rules of the Game:

Any live cell with fewer than two live neighbors dies (underpopulation).
Any live cell with two or three live neighbors survives.
Any live cell with more than three live neighbors dies (overpopulation).
Any dead cell with exactly three live neighbors becomes a live cell (reproduction).
How It Works:

The grid is represented as a 2D array of cells.
Each cell is either "alive" or "dead" and evolves based on the state of its eight neighboring cells.
The next generation of the grid is calculated by applying the rules to each cell, and the grid is updated accordingly.
