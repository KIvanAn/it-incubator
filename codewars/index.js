function solution(number) {
    let res = 0
    if (number > 0) {
        res = Array(number)
            .fill().map((el, i) => i)
            .filter((el) => (el % 3 === 0) || (el % 5 === 0))
            .reduce((a, b) => a + b)
    }
    return res
}

console.log(solution(0))