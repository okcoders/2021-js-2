var axios = require('axios')

axios
	.get('https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States')
	.then((response) => {
		console.log(response)
	})
