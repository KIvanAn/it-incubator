function onesCounter(input) {
    return input.join('').split('0').map(el => el.length).filter(el => el > 0)
}

// console.log(onesCounter([1, 1, 1, 0, 1]))

function minimumSteps(numbers, value){
    let sortNum = numbers.sort((a, b) => a - b)
    let step = 0
    let val = sortNum[0]
    for (let i = 1; i < sortNum.length; i++) {
        if (val < value) {
            val += sortNum[i]
            step++
        } else {
            return step
        }
    }
    return step
}
console.log(minimumSteps([19,98,69,28,75,45,17,98,67], 464))