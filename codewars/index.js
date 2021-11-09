// function isPrime(num) {
//     let divisors = []
//     for (let i = 1; i <= num; i++) {
//         if (divisors.length > 2) {
//             return false
//         }
//         if (num % i === 0) {
//             divisors.push(i)
//         }
//     }
//     return num > 1 && divisors.length === 2
// }

function isPrime(num) {
    let divisors = []
    for (let i = 1; i <= num; i++) {
        if (divisors.length > 2) {
            return false
        }
        if (num % i === 0) {
            divisors = [...divisors, i]
        }
    }
    return num > 1 && divisors.length === 2
}

console.log(isPrime(3))
console.log([1,2,3,4,5][-1])