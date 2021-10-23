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
