function zeroPlentiful(arr){
    let res = arr.join('')
        .replace(/[^0]/gi, ' ')
        .split(' ')
        .filter(el => el)
        .sort((a, b) => a.length - b.length)
    return res.length ? res[0].length >= 4 ? res.length : 0 : 0
    // return res[0].length >= 4 ? res.length : 0
}

console.log(zeroPlentiful([3]))