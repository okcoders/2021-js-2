import nodecron from 'node-cron'
import { sendEmail } from './sendEmail.mjs'

nodecron.schedule('* * * * *', () => {
	sendEmail().catch(console.log)
})