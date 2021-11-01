function solve(s) {
    let alphabet = new Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 97 + i ) )
    const reducer = (previousValue, currentValue) => previousValue + currentValue
    let res = s.split(/[aeiou]/).map(el => el.split('').map(el => alphabet.indexOf(el) + 1)).map(el => el.reduce(reducer, 0))
    return Math.max.apply(null, res)
}

console.log(solve("zodiacs"))