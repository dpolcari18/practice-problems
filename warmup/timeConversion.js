let s = '05:34:20PM'

function timeConversion(s) {
    // Write your code here
    let amPm = s.slice(8,10)
    
    if (amPm === 'AM') {
        if (s.slice(0, 2) === '12') {
            console.log('00' + s.slice(2,8))
            return '00' + s.slice(2,8)
        } else {
            console.log(s.slice(0,8))
            return s.slice(0, 8)
        }
    } else {
        if (s.slice(0,2) === '12') {
            console.log(s.slice(0,8))
            return s.slice(0, 8)
        } else {
            let hour = 12 + (+ s.slice(0, 2))
            console.log(hour + s.slice(2,8))
            return `${hour}` + s.slice(2,8)
        }
    }
}

timeConversion(s)