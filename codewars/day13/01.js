function pigIt(str){
    let punctuationMarks = [',', '.', '!', '?', ';', ':', '(', ')']
    return str.split(' ').map(el => !punctuationMarks.includes(el[el.length - 1]) ? el.slice(1) + el[0] + 'ay' : el).join(' ')
}

// console.log(pigIt('Pig latin, is cool !'))

// function findNumber(array) {
//     let numbers = array.sort((a, b) => a - b)
//     if (numbers[0] !== 1) {
//         return 1
//     }
//     return numbers.filter((num, i) => num === (i + 1)).pop() + 1
// }

function findNumber(array) {
    let res = 1
    for (let i = 0; i < array.length + 1; i++) {
        if (!array.includes(i + 1)) {
            res = i + 1
        }
    }
    return res
}

console.log(findNumber([1,2,3,5]))