function lovefunc(flower1, flower2){
    return isEven(flower1) + isEven(flower2) === 1
}

function isEven(number) {
    if (number % 2 === 0) {
        return 0
    }
    return 1
}
// console.log(isEven(779))
// console.log(lovefunc(521,779))
