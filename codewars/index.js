function findNumber(array) {
    let res
    for (let i = 0; i < array.length + 1; i++) {
        let num = binarySearch(array.sort((a, b) => a - b), i + 1)
        if (num === -1) {
            res = i + 1
            return res
        }
    }
    return res
}

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
    const mid = Math.floor((start + end) / 2);

    if (val === arr[mid]) {
        return mid;
    }

    if (start >= end) {
        return -1;
    }

    return val < arr[mid]
        ? binarySearch(arr, val, start, mid - 1)
        : binarySearch(arr, val, mid + 1, end);
}

console.log(findNumber([1, 2, 3]))