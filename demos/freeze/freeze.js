var XLSX = require('../../xlsx.js');

var sheet = {
	'!freeze': {rows: 1},
	'!ref': "A1:A2",
	'A1': {t:"s", v: "frozen"},
	'A2': {t:"s", v: "fluid"},
};

const book = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(book, sheet, "Freeze 1 row");
XLSX.writeFile(book, "/tmp/freeze.xlsx");
