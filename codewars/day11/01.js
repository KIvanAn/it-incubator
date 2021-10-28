function createPhoneNumber(numbers){
    return ['(', ...numbers.slice(0, 3), ') ', ...numbers.slice(3, 6), '-', ...numbers.slice(6)].join('')
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

function duplicateEncode(word){
    let res = ''
    for (let i = 0; i < word.length; i++) {
        let letterCount = word.split('').filter(w => w.toUpperCase() === word[i].toUpperCase())
        if (letterCount.length <= 1) {
            res += '('
        } else {
            res += ')'
        }
    }
    return res
}

console.log(duplicateEncode("(( @"))