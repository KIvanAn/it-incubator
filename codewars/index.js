function solve(str){
    let replaceArr = str.replace(/\(/g, '').replace(/\)/g, '').split('').reverse()
    let res = ''
    for (let i = 0; i < replaceArr.length; i++) {
        if (Number.isInteger(+replaceArr[i])) {
            res = res.repeat(+replaceArr[i])
        } else {
            res = res + replaceArr[i]
        }
    }
    return res.split('').reverse().join('')
}

console.log(solve("2(a3(b))"))