const beeramid = function(bonus, price) {
    const countBanks = Math.floor(bonus / price)
    return req(countBanks, 1, 1, 0)
}

function req (countBanks, banks, count, levels, allLevelsBanks = 0) {
    if (allLevelsBanks < countBanks) {
        count += 2
        levels++
        let newBanks = banks + count
        allLevelsBanks += newBanks
        return req(countBanks, newBanks, count, levels, allLevelsBanks)
    }
    return levels
}

console.log(beeramid(5000, 3))