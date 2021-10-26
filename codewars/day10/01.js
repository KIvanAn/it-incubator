var superSecretChars = [['a', '@'],['s', '$'],['o', '0'], ['h', '5'], ['x', '*']];
function createSSP(password){
    let res = password
    for (let i = 0; i < superSecretChars.length; i++) {
        res = res.replace(new RegExp( superSecretChars[i][0], "gi" ), superSecretChars[i][1])
    }

    return res
}

// console.log(createSSP("haxorpassword"))

function computerToPhone(numbers){
  let compKeypad = [0,7,8,9,4,5,6,1,2,3]
    let phoneKeypad = [0,1,2,3,4,5,6,7,8,9]
    return numbers.split('').map((num, i) => phoneKeypad[compKeypad.indexOf(+num)]).join('')
}
console.log(computerToPhone("000"))