const nodemailer = require('nodemailer')

async function main(emailBodyText) {
	let testAccount = await nodemailer.createTestAccount();

	let transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: testAccount.user, // generated ethereal user
			pass: testAccount.pass, // generated ethereal password
		},
	});

	let info = await transporter.sendMail({
		from: '"The Vidaly Bot" <bot@vidaly.com>', // sender address
		to: "developers@vidaly.com", // list of receivers
		subject: "Daily Standup Report: " + new Date().toISOString(), // Subject line
		text: emailBodyText, // plain text body
		html: emailBodyText, // html body
	});

	console.log("Message sent: %s", info.messageId);

	console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);