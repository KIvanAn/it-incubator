var isSquare = function(n){
    let scrt = Math.floor(Math.sqrt(n))
    if(scrt * scrt === n) {
        return true
    }
    return false
}

// console.log(isSquare(35))

var number = function(busStops){
    const reducer = (prevValue, currValue) => prevValue + currValue;
    let allPass = busStops.map(el => el[0] - el[1])
    return allPass.reduce(reducer)
}
// console.log(number([[10,0],[3,5],[5,8]]))
"use strict";
function flattenAndSort(array) {
    // Good luck, brave code warrior!
    return array.flat().sort((a, b) => a - b);
}

console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))