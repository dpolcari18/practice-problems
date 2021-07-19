function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleStrikes = 0, orangeStrikes = 0

    /* loop through apples array and find landing point -- if landing point in range of         house increment apple count */
    for (let i = 0; i < apples.length; i++) {
        let landingPoint = a + apples[i]
        if (landingPoint > a && landingPoint >= s && landingPoint <= t) {
            appleStrikes ++
        }
    }
    
    /* loop through oragnes array and find landing point -- if landing point in range of         house increment orange count */
    for (let j = 0; j < oranges.length; j++) {
        let landingPoint = b + oranges[j]
        if (landingPoint < b && landingPoint <= t && landingPoint >= s) {
            orangeStrikes ++
        }
    }
    
    
    // print apple strikes
    console.log(appleStrikes)
    // print orange strikes
    console.log(orangeStrikes)
}

let apples = [0, 2, -1, 5]
let oranges = [-4, -3, 2, 4]

countApplesAndOranges(5, 7, 3, 10, apples, oranges)