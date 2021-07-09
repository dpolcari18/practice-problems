function flippingBits(n) {
    // Write your code here
    let twoBit = n.toString(2)
    
    if (twoBit.length < 32) {
        while (twoBit.length !== 32) {
            twoBit = '0' + twoBit
        }
    }
    
    let flippedTwoBit = [...twoBit].map(i => {
            if (i === '0') {return '1'} else {return '0'}
        }).join('')
    
    console.log(parseInt(flippedTwoBit, 2))
    return parseInt(flippedTwoBit, 2)
}

flippingBits(10)