let arr = [3, 3, 2, 1]

function birthdayCakeCandles(candles) {
    // Write your code here
    let max = Math.max.apply(null, candles)
    
    let count = candles.reduce((acc, val) => val === max ? acc += 1 : acc, 0)

    console.log(count)
    return count
}

birthdayCakeCandles(arr)