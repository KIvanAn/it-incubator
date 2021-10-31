function countSmileys(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('D') || arr[i].includes(')')) {
            if (arr[i].includes(':') || arr[i].includes(';')) {
                if (arr[i].length === 2) {
                    count++
                }
                if (arr[i].length === 3) {
                    if (arr[i].includes('-') || arr[i].includes('~')) {
                        count++
                    }
                }
            }
        }
    }
    return count
}

console.log(countSmileys([':)',':(',':D',':O',':;']))