function incrementer(nums) {
    return nums.map((num, i) => {
        let res = num + (i + 1)
        if (res > 9) {
            return +String(res).split('')[1]
        } else {
            return res
        }
    })
}

console.log(incrementer([4, 6, 9, 1, 3]))