import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { emailBody } from './createEmailBody.mjs'

dotenv.config()

const transporter = nodemailer.createTransport({
	host: "smtp.mailgun.org",
	port: 587,
	secure: false, // upgrade later with STARTTLS
	auth: {
		user: process.env.USERNAME,
		pass: process.env.PASSWORD
	}
});

export async function sendEmail() {
	const emailTextBody = await emailBody()
	let info = await transporter.sendMail({
		from: '"Standup Bot" <standup@okcoders.com>', // sender address
		to: "zsmays@gmail.com", // list of receivers
		subject: "Standup Status " + new Date().toISOString(), // Subject line
		text: emailTextBody,
		html: emailTextBody
	});

	console.log("Message sent: %s", info.messageId);

}