function nthChar(words){
    let res = ''
    for (let i = 0; i < words.length; i++) {
        res += words[i][i]
    }
    return res
}

// console.log(nthChar([]))

function abbrevName(name){
    return name.split(' ').map(el => el.split('')[0].toUpperCase()).join('.')
}

// console.log(abbrevName("patrick feeney"))

// var a = "code";
// var b = "wa.rs";
// var name = a + b;

function positiveSum(arr) {
    let res = 0
    let nums = arr.filter(el => el > 0).map(el => res += el)
    return res
}

// console.log(positiveSum([1,-4,7,12]))

function boolToWord( bool ){
    return bool ? 'Yes' : 'No'
}