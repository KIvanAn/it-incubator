function freqSeq(str, sep) {
    let res = []
    for (let i = 0; i < str.length; i++) {
        let count = 0
        let data = str.split('')
        for (let d = 0; d < data.length; d++) {
            if (data[d] == str[i]) {
                count +=1
            }
        }
        res.push(count)
    }
    return res.join(sep)
}
console.log(freqSeq("hello world", "-"))

var stringToNumber = function(str){
    // put your code here
    return Number(str);
}

console.log(stringToNumber("-7"))