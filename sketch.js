function make2DArray(cols, rows){
    let arr = new Array(cols);
    for(let i =0; i<arr.length; i++){
        arr[i] = new Array(rows);
    }
    return arr;
}

let grid;
// let cols = 10;
// let rows = 10;
let resolution = 5;

function setup(){
    createCanvas(800, 800);
    cols = width/ resolution;
    rows = width/ resolution;
    grid = make2DArray(cols, rows);
    ageGrid = make2DArray(cols, rows)
    for(let i =0; i< cols; i++){
        for(let j = 0; j<rows; j++){
            grid[i][j] = floor(random(2));
            ageGrid[i][j] = 0;
        }
    }
}

function draw(){
    background(0);
    for (let i =0 ; i< cols; i++){
        for(let j =0; j< rows; j++){
            let x = i* resolution;
            let y = j* resolution;
            if(grid[i][j] == 1){
                fill(255);
                let age  = ageGrid[i][j];
                let col  = color(map(age, 0, 50, 0, 255), 100, 200);
                fill(col);
                rect(x, y, resolution, resolution);
            }
        }
    }

    let next = make2DArray(cols, rows);
    for(let i =0; i< cols; i++){
        for(let j = 0; j<rows; j++)
        {
            let sum = 0;
            let neighbors = countNeighbors(grid, i, j, cols, rows);
            let state = grid[i][j];
            if(state == 0 && neighbors == 3){
                next[i][j] = 1;
                ageGrid[i][j] = 1;
            }
            else if(state == 1 && (neighbors < 2 || neighbors > 3)){
                next[i][j] = 0
                ageGrid[i][j] = 0;
            }
            else{
                next[i][j] = state;
                if(state == 1){
                    ageGrid[i][j]++;
                }
            }
        }
    } 
    grid = next;

}

function countNeighbors(grid, x, y, cols, rows){
    let sum = 0;
    for(let i = -1; i < 2; i++){
        for(let j = -1; j< 2; j++){
            let col = (x + i+ cols) % cols;
            let row = (y + j + rows) % rows;
            sum += grid[col][row];
        }
    }
    sum -= grid[x][y];
    return sum;
}