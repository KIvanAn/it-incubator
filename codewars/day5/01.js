function longest(s1, s2) {
	let str = s1 + s2
	let res = []
	str.split('').map(el => {
		if(!res.includes(el)) {
			res.push(el)
		} 
	})
	return res.sort().join('')
}

let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"
// console.log(longest(a, b))
