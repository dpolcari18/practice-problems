var maxArea = function(height) {
    //     let length = height.length
    //     // variable to store current volume
    //     let currentArea = 0
        
    //     // iterate through using i as left bound
    //     for (let i = 0; i < length - 1; i++) {
    //         // iterate through using j as right bound
    //         for (let j = i+1; j < length; j++) {
    //             // calculate area for each bound
    //             let currentHeight = height[i] <= height[j] ? height[i] : height[j]
    //             let currentLength = j - i
    //             let area = currentHeight * currentLength
    //             // if area is greater than currentArea => set equal to currentArea    
    //             if (area > currentArea) {
    //                 currentArea = area
    //             }
    //         }
    //     }
        
    //     // return currentArea
    //     return currentArea
        
        let max = 0
        let i = 0
        let j = height.length - 1
        
        while (j > i) {
            let leftBound = height[i]
            let rightBound = height[j]
            
                
            let area = Math.min(leftBound, rightBound) * (j - i)
            
            if (area > max) {
                max = area
            }
            
            if (height[j] > height[i]) {
                i++
            } else {
                j--
            }
        }
        
        console.log(max)
        return max
    };

let heights = [5, 1, 4, 3, 6, 7, 4]

maxArea(heights)