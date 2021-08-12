const convert = (s, numRows) => {
    if (numRows === 1 || s.length < numRows) {
        return s
    }
    // create array of arrays to hold rows and characters
    let rows = []
    let currentRow = 0
    let reverse = false
    let result = ''
    
    for (let j = 0; j < s.length; j++) {
        // if current row doesn't exist in rows add it
        if (!rows[currentRow]) {
            rows[currentRow] = []
        }
        
        // push current character in string to current row in rows
        rows[currentRow].push(s[j])
        
        // if current row is last row set reverse true
        if (currentRow === numRows - 1) {
            reverse = true
        // if current row is first row set reverse false
        } else if (currentRow === 0) {
            reverse = false
        }
        
        // ternary: if reverse is true reduce row by one else increase row by one
        reverse ? currentRow -- : currentRow ++
    }
    
    // create result by iterating through rows
    for (let k = 0; k < rows.length; k ++) {
        result += rows[k].join('')
    }
    
    console.log(result)
    return result
};

convert("AbCdEf", 3)