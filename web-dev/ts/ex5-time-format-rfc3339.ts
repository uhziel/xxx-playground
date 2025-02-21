Date.prototype.rfc3339 = function(): string {
	function atLeast2Digits(n: number): string {
		return (n < 10 ? '0': '') + n
	}

	const YYYY = this.getFullYear()
	const MM = atLeast2Digits(this.getMonth() + 1)
	const DD = atLeast2Digits(this.getDate())
	const HH = atLeast2Digits(this.getHours())
	const mm = atLeast2Digits(this.getMinutes())
	const ss = atLeast2Digits(this.getSeconds())

 	// TODO 使用 Date.prototype.getTimezoneOffset() 让时区反应实际情况而不是写死
	return `${YYYY}-${MM}-${DD}T${HH}:${mm}:${ss}+08:00`
}

const d = new Date()
console.log(d.getTimezoneOffset())
console.log(d.rfc3339())
