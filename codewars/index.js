var isMonotone = function(arr){
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= res) {
            res = arr[i]
        } else {
            return false
        }
    }
    return true
}

console.log(isMonotone([ 95, 94, 93 ]))
