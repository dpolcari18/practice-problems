var lengthOfLastWord = function(s) {
    // trim blank space and split into an array of words
    let arr = s.trim().split(' ')
    
    // return length of last word in arr
    console.log(arr[arr.length-1].length)
    return arr[arr.length-1].length
};

lengthOfLastWord("hello worlds")
lengthOfLastWord(" happy birthday    ")