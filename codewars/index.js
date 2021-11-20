function extractIds(data, res = []){
    for (const [key, value] of Object.entries(data)) {
        if (key === 'id') {
            res.push(value)
        } else {
            return value.map(el => extractIds(el, res))
        }
    }
    return res
}

let data = {
    id: 1,
    items: [
        {id: 2},
        {id: 3, items: [
                {id: 4},
                {id: 5}
            ]}
    ]
}

const data1 = {
    id : 1,
    items : [
        {id : 2},
        {id : 3}
    ]
};
const data2 = {
    id : 1,
    items : [
        {id : 2},
        {id : 3, items : [
                {id : 4},
                {id : 5}
            ]}
    ]
}
const data3 = {
    id : 1,
    items : [{
        id : 2,
        items : [{
            id : 3,
            items : [
                {id : 4},
                {id : 5}
            ]
        },{
            id : 6,
            items : [{id : 7}]
        }]
    }]
}

console.log(extractIds(data))
console.log(extractIds(data1))
console.log(extractIds(data2))
console.log(extractIds(data3))
