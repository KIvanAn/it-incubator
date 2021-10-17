function firstNonConsecutive (arr) {
	let firstEl = arr[0]

	for(let i = 1; i < arr.length; i++) {
		if((firstEl + 1) == arr[i]) {
			firstEl = arr[i]
	  	} else {
			return arr[i]
	  	}
	}

	return null
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]))