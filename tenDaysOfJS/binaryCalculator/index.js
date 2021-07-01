document.addEventListener('DOMContentLoaded', () => {
    // get elements
    let btnZero = document.getElementById('btn0'), btnOne = document.getElementById('btn1'), btnClr = document.getElementById('btnClr'), btnEql = document.getElementById('btnEql'), btnSum = document.getElementById('btnSum'), btnSub = document.getElementById('btnSub'), btnMul = document.getElementById('btnMul'), btnDiv = document.getElementById('btnDiv'), res = document.getElementById('res')

    let operator = undefined

    // add 0 to res
    btnZero.addEventListener('click', ()=> {
        res.innerHTML += '0'
    })
    // add 1 to res
    btnOne.addEventListener('click', ()=> {
        res.innerHTML += '1'
    })
    // clear res and operator
    btnClr.addEventListener('click', ()=> {
        res.innerHTML = ''
        operator = undefined
    })
    btnEql.addEventListener('click', ()=> { 
    // split res on operator
    let expression = res.innerHTML.split(/[\/\+\-\*]/)
    
    let operandOne = parseInt(expression[0], 2)
    let operandTwo = parseInt(expression[1], 2)

    let result

    switch(operator) {
        case '+':
            result = operandOne + operandTwo
            break
        case '-':
            result = operandOne - operandTwo
            break
        case '*':
            result = operandOne * operandTwo
            break
        case '/':
            result = operandOne / operandTwo
            break
    }
    operator = undefined
    res.innerHTML = Math.floor(result.toString(2))

    })
    btnSum.addEventListener('click', ()=> {
        if (res.innerHTML !== '') {
            if (operator === undefined) {
                operator = '+'
                res.innerHTML += '+'
            }
        }
    })
    btnSub.addEventListener('click', ()=> {
        if (res.innerHTML !== '') {
            if (operator === undefined) {
                operator = '-'
                res.innerHTML += '-'
            }
        }
    })
    btnMul.addEventListener('click', ()=> {
        if (res.innerHTML !== '') {
            if (operator === undefined) {
                operator = '*'
                res.innerHTML += '*'
            }
        }
    })
    btnDiv.addEventListener('click', ()=> {
        if (res.innerHTML !== '') {
            if (operator === undefined) {
                operator = '/'
                res.innerHTML += '/'
            }
        }
    })
})