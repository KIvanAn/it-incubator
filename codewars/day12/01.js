function insertAtIndexes(phrase, word, indexes) {
    if (indexes.length === 0) {
        return phrase
    }
    let ind = indexes.sort((a, b) => a - b)
    let res = phrase.slice(0, ind[0]) + word + phrase.slice(ind[0])
    for (let i = 1; i < ind.length; i++) {
        res = res.slice(0, ind[i] + word.length * i) + word + res.slice(ind[i] + word.length * i)
    }
    return res
}

let phrase = "'I' write a wi said Phi"
console.log(insertAtIndexes(phrase, "ll", [3,14,24]))