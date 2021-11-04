function getScore(n) {
    let res = 0
    for (let i = 0; i <= n; i++) {
        res += 50 * i
    }
    return res
}

console.log(getScore(5))