const axios = require("axios")
const cheerio = require("cheerio")

const url = 'https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States'

axios.get(url)
	.then(function (response) {
		const loadedPage = cheerio.load(response.data)
		const presidentTableRows = loadedPage('table[class=wikitable] > tbody > tr').each((i, e) => {

			if (i === 0) {
				const children = e.children
				children.forEach((e) => console.log(e))

			}
		})
		// console.log(presidentTableRows.html())
	})
	.catch(function (error) {
		console.log(error);
	})
