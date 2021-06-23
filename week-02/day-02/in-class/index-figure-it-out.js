const axios = require("axios")
const cheerio = require("cheerio")

const url = 'https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States'

axios.get(url)
	.then(function (response) {
		const loadedPage = cheerio.load(response.data)
		const presidentTableRows = loadedPage('table[class=wikitable]').find('tbody').children('tr')
		presidentTableRows.each((i, e) => {
			if (i === 1) {
				var cells = e.children
				cells.forEach((element, i) => {
					// console.log("=============================")
					// console.log(element.type)
					// console.log(element.name)
					if (element.children) {

						// console.log(element.children.length)
					}
					if (i === 7) {
						element.children.forEach((element, i) => {
							// console.log(element.type)
							// console.log(element.name)
							if (element.children) {
								console.log(element.children[0].children[0].data)
							}

						})
					}
					// console.log("=============================")
				});
			}
		})
	})
	.catch(function (error) {
		console.log(error);
	})
