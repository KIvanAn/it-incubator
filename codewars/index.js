Array.prototype.sameStructureAs = function (other) {
    return isArray(other) ? (req(this) === req(other)) : false
}

function req (arr, dip = '-') {
    return JSON.stringify([].concat(...arr.map((el, i) => isArray(el) ? req(el, dip.repeat(i + 1)) : dip)))
}

console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ))

function isArray(arr) {
    return Array.isArray(arr)
}
