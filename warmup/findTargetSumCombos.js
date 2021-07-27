const prices = [1, 6, 3, 8, 9, 2, 4]
const targetPrice = 10

const findTargetCombos = (arr, target) => {
    // define answer arr and hash table
    let results = [], hashMap = {}

    // iterate through arr and store target value with index
    for (let i = 0; i < arr.length; i++) {
        let targetDiff = target - arr[i]

        hashMap[targetDiff] = arr[i]
        
        if (hashMap[arr[i]]) {
            console.log(i)
            results.push([hashMap[arr[i]], arr[i]])
            continue
        }
        

    }
    console.log(results)
}

findTargetCombos(prices, targetPrice)

// Expect result => [[0, 4], [1, 6], [3, 5]]