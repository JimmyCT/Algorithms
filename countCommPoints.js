//A cell is in the matrix is denoted as "on" by the value 1 and "off" by the value 0
//An active cell in the matrix is communicating if there is another active cell within its row or column
//This function takes in a matrix and returns the number of communicating points within the matrix

function countCommunicatingPoints(grid) {
    let numComms = 0;
    const map = {
        row: {},
        col: {}
    }
    
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
            if (grid[rowIndex][colIndex] === 1) {
                map.row[rowIndex] = map.row[rowIndex] === undefined ? 1 : map.row[rowIndex] + 1;
                map.col[colIndex] = map.col[colIndex] === undefined ? 1 : map.col[colIndex] + 1;
            }
        }
    }
    
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
            if (grid[rowIndex][colIndex] === 1 && (map.row[rowIndex] > 1 || map.col[colIndex] > 1)) {
                numComms++;
            }
        }
    }
    
    return (numComms);
}