function digital_root(n) {
	let nums = String(n).split('')
	let res = 0
	nums.map((el) => res += Number(el))

	if (res <= 9) {
		return res
	} else {
		return digital_root(res)
	}
}

console.log(digital_root(942))