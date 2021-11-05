function narcissistic(value) {
    let sum =  String(value)
        .split('')
        .map((a, i, arr) => Math.pow(Number(a), arr.length))
        .reduce((a, b) => a + b)
    return sum === value
}

console.log(narcissistic(153))