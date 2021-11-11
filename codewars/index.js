function rota(rooms) {
    if (rooms.length >= 7) {
        return rooms.sort(() => Math.random() - 0.5).slice(0, 7)
    }
    return [...rooms.sort(() => Math.random() - 0.5), ...rooms.sort(() => Math.random() - 0.5), ...rooms.sort(() => Math.random() - 0.5)].slice(0, 7)
}

console.log(rota(["One", "Two", "Three", "Four", "Five", "Six", "Seven"]))
console.log(rota(["One", "Two", "Three"]))
