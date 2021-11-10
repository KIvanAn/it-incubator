function findNumber(array) {
    let arr = array.sort((a, b) => a - b)
    if (arr[0] !== 1) {
        return 1
    }
    if (arr[arr.length - 1] !== arr.length + 1) {
        return arr.length + 1
    }

    return req(arr, 2)
}

function req (arr, num) {
    if (arr[num - 1] === num) {
        num++
        return req(arr, num)
    }
    return num
}

console.log(findNumber([1,2,3,5]))
