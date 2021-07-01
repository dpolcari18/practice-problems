document.addEventListener('DOMContentLoaded', () => {
    let buttonOrder = ['1', '2', '3', '6', '9', '8', '7', '4']
    let buttonIds = ['btn1', 'btn2', 'btn3', 'btn6', 'btn9', 'btn8', 'btn7', 'btn4']
    
    document.getElementById('btn5').addEventListener('click', () => {
        // for each button id not including button 5 move innerHTML one place
            for (let i = 0; i < buttonIds.length; i++) {
            // find current button while iterating
            let current = document.getElementById(buttonIds[i])

            // find current index in array
            let currentIndex = buttonOrder.indexOf(current.innerHTML)
            // debugger
            
            // create next index - if last go to index 0
            let nextIndex = currentIndex === 0 ? 7 : currentIndex -= 1
            
            // set current innerHTML equal to value of next index
            current.innerHTML = buttonOrder[nextIndex]   
        }
    })
})