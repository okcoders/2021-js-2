import axios from 'axios'

function makeEmailTextForAllDevelopers(developerData) {
	const developerTexts = developerData.map(makeEmailTextFromDeveloper)
	return developerTexts.join('\n ===============================')
}

function makeEmailTextFromDeveloper(developerData) {
	const name = developerData.developer
	const activeTasksText = makeBulletedListOfTasksWithStatus(developerData.tasks, "active")
	const completedTasksText = makeBulletedListOfTasksWithStatus(developerData.tasks, "completed")
	return `
	Dev Name: ${name}
	Active Tasks:
	 ${activeTasksText} 
	Completed Tasks:
	 ${completedTasksText} 
	`
}

function makeBulletedListOfTasksWithStatus(taskList, status) {
	const tasks = taskList.filter(task => task.status === status)
	const tasksNames = tasks.map(task => task.taskName)
	const taskNamesWithHyphen = tasksNames.map(name => '- ' + name)
	const tasksText = taskNamesWithHyphen.join('\n')
	return tasksText
}

export async function emailBody() {
	const resp = await axios.get('http://localhost:3000/tasks')
	const emailBody = makeEmailTextForAllDevelopers(resp.data)
	return emailBody
}