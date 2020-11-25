var table = document.querySelector('table')
var p = document.querySelector('p')
var gradeTable = new GradeTable(table, p)

var header = document.querySelector('h2')
var pageHeader = new PageHeader(header)

var form = document.querySelector('form')
var gradeForm = new GradeForm(form)

var app = new App(gradeTable, pageHeader, gradeForm)
app.start()
