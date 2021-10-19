function nthChar(words){
    let res = ''
    for (let i = 0; i < words.length; i++) {
        res += words[i][i]
    }
    return res
}

console.log(nthChar([]))