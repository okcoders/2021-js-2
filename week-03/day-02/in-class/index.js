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

const firstDeveloper = standupData[0]

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

const temp = makeEmailTextFromDeveloper(firstDeveloper)
console.log(temp)