let arrOfArr = [
    [1, 2, 3, 5, 6, 7],
    [4, 5, 6, 1, 2, 9],
    [7, 8, 9, 4, 8, 3]
]

const checkMatrix = (matrix) => {
    let range = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return range.every(val => matrix.includes(val))
}

const checkArr = (arr) => {
    // create answer array
    let ans = []

    // loop through each possible matrix - n < (arr[0].length - 2)
    for (let i = 0; i < arr[0].length - 2; i++) {
        // for each matrix create an array to store values
        let matrix = []
        
        // loop through each of the three value positions and push the corresponding values to matrix
        for (let j = i; j <= i + 2; j++) {
            matrix.push(arr[0][j])
            matrix.push(arr[1][j])
            matrix.push(arr[2][j])
        }

        // send array of integers to be checked for integers in range of 1 through 9
        if (checkMatrix(matrix)) {
            ans.push(true)
        } else {
            ans.push(false)
        }
    }

    console.log(ans)
}

checkArr(arrOfArr)