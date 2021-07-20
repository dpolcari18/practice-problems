let arr = [5, 7, 1, 2, 8, 4, 3]

let val = 19
// let val = 10

const sumOfTwoIntegers = (arr, val) => {
    let visited = {}

    for (let i = 0; i < arr.length; i++) {
        if (visited[val - arr[i]]) {
            console.log(true)
            return
        } else {
            visited[arr[i]] = arr[i]
        }
    }  

    console.log(false)
    return
}

sumOfTwoIntegers(arr, val)