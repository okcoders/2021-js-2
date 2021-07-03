import nodecron from 'node-cron'

export function testing() {
	console.log(nodecron.validate(''))
	return 'hello world'
}