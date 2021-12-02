function solution(input, markers) {
    for (let i = 0; i < markers.length; i++) {
        input = input.replace(new RegExp('\\' + markers[i] + '(.+)', 'g'), '')
    }
    return input.split('\n').map(el => el.trim()).join('\n')
}


console.log(solution("a #b\nc\nd $e f g", [ '#', '$' ]))