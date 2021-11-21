function lastSurvivors(str) {
    let res = {}
    alphabetGen().split('').map(el => res[el] = 0)

    for (let i = 0; i < str.length; i++) {
        res[str[i]] += 1
    }

    res = resArr(res)

    return Object.entries(res).filter(el => el[1]).map(el => el[0]).join('')
}

function alphabetGen() {
    return [...Array(26)].reduce(a => a + String.fromCharCode(i++), '', i = 97) + 'a'
}

function resArr(res) {
    let alphabet = alphabetGen()
    for (let key in res) {
        if (res[key] >= 2) {
            let remains = res[key] % 2
            let count = (res[key] - remains) / 2
            let nextLetter = alphabet[alphabet.indexOf(key) + 1]

            if (res.hasOwnProperty(nextLetter)) {
                res[nextLetter] += count
            } else {
                res[nextLetter] = count;
            }

            res[key] = remains
        }
    }

    let maxValue = Math.max.apply(null, Object.values(res))

    return maxValue >= 2 ? resArr(res) : res
}

// function lastSurvivors(str) {
//     let alphabet = [...Array(26)].reduce(a => a + String.fromCharCode(i++), '', i = 97) + 'a'
//     let res = {}
//     alphabet.split('').map(el => res[el] = 0)
//
//     for (let i = 0; i < str.length; i++) {
//         res[str[i]] += 1
//     }
//
//     for (let key in res) {
//         if (res[key] >= 2) {
//             let remains = res[key] % 2
//             let count = (res[key] - remains) / 2
//             let nextLetter = alphabet[alphabet.indexOf(key) + 1]
//
//             if (res.hasOwnProperty(nextLetter)) {
//                 res[nextLetter] += count
//             } else {
//                 res[nextLetter] = count;
//             }
//
//             res[key] = remains
//         }
//     }
//
//     return Object.entries(res).filter(el => el[1]).map(el => el[0]).join('')
// }

// console.log(lastSurvivors('abaa'))
// console.log(lastSurvivors('zzab'))
console.log(lastSurvivors('xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh'))
