var reverse = function(x) {
    // reverse by converting to string, splitting into arr, and joining arr into string then parsing to int
    let reversedInt = parseInt(Math.abs(x).toString().split('').reverse().join(''))
    
    // check if greater than 32 bit int
    // don't check negative because we took absolute value while creating reversed int
    if(reversedInt > 2**31) {return 0}
    
    console.log(reversedInt * Math.sign(x))
    return reversedInt * Math.sign(x)
};

reverse(-3225)
reverse(1111)
reverse(1234)
reverse(-9993)