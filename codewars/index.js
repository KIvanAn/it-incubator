var moveZeros = function (arr) {
    let withoutZerosArr = arr.filter(el => el !== 0)
    let zeroCount = arr.length - withoutZerosArr.length
    return [...withoutZerosArr, ...Array(zeroCount).fill(0)]
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
