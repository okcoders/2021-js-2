const axios = require("axios")
const cheerio = require("cheerio")

const url = 'https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States'

const presidents = []

axios.get(url)
	.then(handleResponse)
	.catch(handleError)

function handleResponse(response) {
	const loadedPage = cheerio.load(response.data)
	const presidentTableRows = loadedPage('table[class=wikitable]').find('tbody').children('tr')
	presidentTableRows.each(processPresidentTableRows)
	console.log(presidents)
}

function processPresidentTableRows(i, e) {
	// skip table header
	if (i === 0) {
		return
	}
	if (isRowWithPresidentData(e)) {
		processPresidentDataRow(e.children);
	}
}

function isRowWithPresidentData(row) {
	var minCellsForPresidentRow = 8
	return row.children && row.children.length > minCellsForPresidentRow
}

function processPresidentDataRow(rowCells) {
	var nameData = getPresidentNameFromRow(rowCells)
	// add an additional piece of row data here
	// example
	// var firstTermParty = getPartyFromRow(rowCells)
	presidents.push({ name: nameData })
}

function getPresidentNameFromRow(rowCells) {
	let name = ""
	rowCells.forEach((element, index) => {
		var cellWithPresidentDataPosition = 7
		if (index === cellWithPresidentDataPosition) {
			var cell = element.children[0]
			var ahref = cell.children[0]
			var text = ahref.children[0]
			name = text.data
		}

	})
	return name
}

function handleError(error) {
	console.log(error);
}
