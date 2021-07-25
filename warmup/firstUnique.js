const word = 'bananas'
const secondWord = 'character'
const thirdWord = 'aaaa'
const fourthWord = 'aaabbbcccd'

const firstUnique = (string) => {
    let strArr = string.split('')

    for (let i = 0; i < strArr.length; i++) {
        let char = strArr[i]

        if (strArr.indexOf(char) === i && strArr.indexOf(char, i + 1) === -1) {
            console.log(i+1)
            return i + 1
        }
    }

    console.log(-1)
    return -1
}

firstUnique(word)
firstUnique(secondWord)
firstUnique(thirdWord)
firstUnique(fourthWord)