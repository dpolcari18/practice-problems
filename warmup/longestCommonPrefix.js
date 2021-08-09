var longestCommonPrefix = function(strs) {
    let firstString = strs[0]
    let length = strs[0].length
    
    // iterate and check if full length of index is included in all other indexes
    while (firstString) {
        if (strs.every(val => val.startsWith(firstString))) {
            console.log(firstString)
            return firstString
        }
        
        firstString = firstString.slice(0, -1)
    }
    
    console.log(firstString)
    return ""
};

longestCommonPrefix(["flower","flow","flight"])