const nodemailer = require('nodemailer')

const standupData = [
	{
		developer: 'Zach',
		tasks: [
			{ taskName: 'fix bug', status: 'active' },
			{ taskName: 'new feature', status: 'completed' },
		]
	},
	{
		developer: 'Woody',
		tasks: [
			{ taskName: 'fix a big bug', status: 'completed' },
			{ taskName: 'new awesome feature', status: 'active' },
		]
	},
]

const namesOfDevelopers = standupData.map((elem) => elem.developer)
// console.log(namesOfDevelopers)

const firstTask = standupData.map((elem) => elem.tasks[0].taskName)
// console.log(firstTask)
// ['fix bug', 'fix big bug']

const firstTaskStatus = standupData.map((elem) => elem.tasks[0].status)
// console.log(firstTaskStatus)

const allTaskStatuses = standupData.map((elem) => elem.tasks.map(task => task.status))
// console.log(allTaskStatuses)

const firstDeveloper = standupData[0]
const firstDevelopersActiveTasks = firstDeveloper.tasks.filter(task => task.status === "completed")
const firstDeveloperActiveTasksName = firstDevelopersActiveTasks.map(task => task.taskName)
console.log(firstDeveloperActiveTasksName)

const name = 'zach'
const age = 2

const sayHello = 'Hello there ' + name + ' you are age ' + age
// const betterSayHello = `
// 	Hi ${name},

// 	You are awesome and you probably want to buy this ${product}
// 	It is only ${price} right now

// 	Thanks!
// `


// data => data of another format
// an array of objects => one email string