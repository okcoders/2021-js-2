import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
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

async function main() {
	let info = await transporter.sendMail({
		from: '"Fred Foo 👻" <foo@example.com>', // sender address
		to: "zsmays@gmail.com", // list of receivers
		subject: "Hello ✔", // Subject line
		text: "Hello world?", // plain text body
		html: "<b>Hello world?</b>", // html body
	});

	console.log("Message sent: %s", info.messageId);

}

main().catch(console.log)