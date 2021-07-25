let arr = ['code', 'cdoe', 'edco', 'leppa', 'apple', 'bbb']

const sortString = (str) => {
    return str.split('').sort().join('')
}

const findAnagrams = (arr) => {
    let answerArr = []

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            answerArr.push(arr[i])
            continue
        }

        if (answerArr.some(val => sortString(val) === sortString(arr[i]))) {
            continue
        } else {
            answerArr.push(arr[i])
        }
    }

    let answer = answerArr.sort()

    console.log(answer)
    return answer
}

findAnagrams(arr)