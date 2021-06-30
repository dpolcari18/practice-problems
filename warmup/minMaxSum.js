let arr = [1, 3, 2, 4, 5]

const minMaxSum = (arr) => {
  let cloneOne = arr.slice()
  let cloneTwo = arr.slice()

  cloneOne.sort((a, b) => a - b)
  
  cloneTwo.sort((a, b) => a - b)

  let min = cloneOne.splice(0, 4).reduce((acc, val) => acc + val, 0)
  let max = cloneTwo.splice(1, 4).reduce((acc, val) => acc + val, 0)

  
  console.log(min + ' ' + max)  
}  

minMaxSum(arr)