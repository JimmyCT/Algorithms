 function generateNRowsPascalsTriangle(numRows) {
    const output = [];
    
    if (numRows === 0) {
        return output
    }
    
    output.push([1]);
    
    for(let i = 1; i < numRows; i++) {
        const nextRow = [1]
        const prevRow = output[i - 1];
        for (let j = 0; j < prevRow.length; j++) {
            if (j === prevRow.length - 1) {
                nextRow.push(1);
            } else {
                nextRow.push(prevRow[j] + prevRow[j + 1]);
            }
        }
        output.push(nextRow);
    }
    
    return output;
};