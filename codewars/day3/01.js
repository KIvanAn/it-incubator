function enough(cap, on, wait) {
	if((cap - on - wait) >= 0) {
	  return 0
	} else {
	  return Math.abs(cap - on - wait)
	}
}