function staircase(n) {
    // Write your code here
    let i = n
    let j = 1
    while (i > 0) {
        let spaces = (i - 1)
        let hashtags = j
        console.log(' '.repeat(spaces)+'#'.repeat(hashtags))
        i--
        j++
    }
}

staircase(10)