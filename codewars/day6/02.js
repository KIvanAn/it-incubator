function stray(numbers) {
    let firstNum = numbers[0]
    if(numbers.includes(firstNum, 1)) {
        return numbers.filter(num => num !== firstNum)[0]
    }
    return firstNum
}

console.log(stray([2,1,1]))