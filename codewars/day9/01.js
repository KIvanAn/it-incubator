// function riders(stations) {
//     return Math.ceil(stations.reduce((a, b) => a + b, 0) / 100)
// }
//
// console.log(riders([44,15,37,26,14,33,47,50,10]))

function onesComplement(n) {
    return n.split('').map(el => el === '0' ? '1' : '0').join('')
}
// console.log(onesComplement("1101"))

function getCount(str) {
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelsCount++
        }
    }

    return vowelsCount;
}

// console.log(getCount("abracadabra"))
