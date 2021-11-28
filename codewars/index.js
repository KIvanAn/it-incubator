function flatten(...arguments) {
    return req(arguments)
}

function req(arr, res = []) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            req(arr[i], res)
        } else {
            res.push(arr[i])
        }
    }
    return res
}

console.log(flatten(1, [2, 3], 4, 5, [6, [7]]))