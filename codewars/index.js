function solution(list) {
    let newList = [...createArr(list[0], list[list.length -1]).map(el => list.includes(el) ? el : '-'), '-']
    let range = []
    let res = []

    for (let i = 0; i < newList.length; i++) {
        if (newList[i] !== '-') {
            range = [...range, newList[i]]
        } else {
            res = [...res, range]
            range = []
        }
    }

    return res.map(el => el.length < 3 ? `${el}` : `${el[0]}-${el[el.length - 1]}`).filter(el => el).join(',')
}

function createArr(start, end) {
    let res = []
    for (let i = start; i <= end; i++) {
        res = [...res, i]
    }
    return res
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))