function zero(func = 0) {
    if (func !== 0) {
        return mathmatic(0, func)
    }
    return func
}
function one(func = 1) {
    if (func !== 1) {
        return mathmatic(1, func)
    }
    return func
}
function two(func = 2) {
    if (func !== 2) {
        return mathmatic(2, func)
    }
    return func
}
function three(func = 3) {
    if (func !== 3) {
        return mathmatic(3, func)
    }
    return func
}
function four(func = 4) {
    if (func !== 4) {
        return mathmatic(4, func)
    }
    return func
}
function five(func = 5) {
    if (func !== 5) {
        return mathmatic(5, func)
    }
    return func
}
function six(func = 6) {
    if (func !== 6) {
        return mathmatic(6, func)
    }
    return func
}
function seven(func = 7) {
    if (func !== 7) {
        return mathmatic(7, func)
    }
    return func
}
function eight(func = 8) {
    if (func !== 8) {
        return mathmatic(8, func)
    }
    return func
}
function nine(func = 9) {
    if (func !== 9) {
        return mathmatic(9, func)
    }
    return func
}

function plus(operand) {
    return {operation: 'plus', operand}
}
function minus(operand) {
    return {operation: 'minus', operand}
}
function times(operand) {
    return {operation: 'times', operand}
}
function dividedBy(operand) {
    return {operation: 'dividedBy', operand}
}

function mathmatic(num, func) {
    if (func.operation === 'times') {
        return num * func.operand
    }
    if (func.operation === 'plus') {
        return num + func.operand
    }
    if (func.operation === 'minus') {
        return num - func.operand
    }
    if (func.operation === 'dividedBy') {
        return Math.floor(num / func.operand)
    }
}

// console.log(seven(times(five()))) // must return 35
// console.log(four(plus(nine())))  // must return 13

console.log(one(dividedBy(six())))

// console.log(eight(minus(three())))  // must return 5
// console.log(six(dividedBy(two()))) // must return 3