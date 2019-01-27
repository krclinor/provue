export function multiply(values){
	return values.reduce((total, val) => total * val, 1)
}

export function subtract(amount, values){
	return values.reduce((total, value) => total - value, amount)
}

export function divide(first, second){
	return first / second
}