let arr = [-100, -20, 0, 3, 6, 21, 99, 21, 33, 45]

function plusMinus(arr) {
    // Write your code here
    let denominator = arr.length
    let pos = 0, neg = 0, zero = 0
    
    for (let i = 0; i < denominator; i++) {
       if (arr[i] > 0) {
           pos ++
       } else if (arr[i] < 0) {
           neg ++
       } else {
           zero ++
       }
    }
    
    console.log((pos/denominator).toFixed(6))
    console.log((neg/denominator).toFixed(6))
    console.log((zero/denominator).toFixed(6))
}

plusMinus(arr)