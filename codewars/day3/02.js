function doubleChar(str) {
	return str.split('').map(el => el + el).join('')
}

console.log(doubleChar('Hello'))

function booleanToString(b){
	return String(b)
}

console.log(booleanToString(false))

function invert(array) {
	return array.map((el) => {
	  if(el < 0) {
		return Math.abs(el)
	  } else {
		return -el
	  }
	});
 }

 console.log(invert([]))