let arr = [1, 3, 5, 6, 9, 2, 8, 7]

const findMissingNumber = (arr) => {

    let expectedLength = arr.length + 1

    let sumArr = arr.reduce((acc, val) => acc + val)
    let expectedSum = Math.floor((expectedLength * (expectedLength + 1))/ 2)

    console.log(expectedSum - sumArr)
}

findMissingNumber(arr)