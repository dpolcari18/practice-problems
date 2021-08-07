var isPalindrome = function(x) {
    let arr = x.toString().split('')
    let i = 0 
    let j = arr.length - 1
    
    while (i < arr.length) {
        if (arr[i] !== arr[j]) {
            console.log(false)
            return false
        }
        i ++
        j --
    }
    console.log(true)
    return true
};

isPalindrome(121)
isPalindrome(1221)
isPalindrome(123)
isPalindrome(-131)