const axios = require("axios")
const cheerio = require("cheerio")

const url = 'https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States'

axios.get(url)
	.then(function (response) {
		const loadedPage = cheerio.load(response.data)
		const presidentTableRows = loadedPage('table[class=wikitable]').find('tbody').children('tr')
		presidentTableRows.each((i, e) => {
			var cells = e.children
			if (cells && cells.length > 8) {
				cells.forEach((element, i) => {
					if (i === 7) {
						var cell = element.children[0]
						if (cell) {
							if (cell.children) {
								console.log(cell.children[0].children[0].data)
							}
						}
					}
				});

			}
		})
	})
	.catch(function (error) {
		console.log(error);
	})
