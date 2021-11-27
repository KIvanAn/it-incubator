class Num {
    constructor(num) {
        this.num = num;
        this.indt = false
    }
    toString() {
        return "The number is " + this.num;
    }
    valueOf() {
        return {num: this.num};
    }
}

Num.prototype.valueOf = function valueOf () {
    this.indt = true
    return {num: this.num}
}

Num.prototype.toString = function toString () {
    if (this.indt) {
        return this.num
    }
    return "The number is " + this.num;
}

console.log(new Num(5))
console.log(new Num(5) + new Num(5))
console.log(typeof new Num(150).valueOf().num)
console.log(new Num(100).toString())