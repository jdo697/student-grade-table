class App {
  handleGetGradesError(error) {
    console.error(error)
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)

    var total = 0
    for (var i = 0; i < grades.length; i++) {
      total += grades[i].grade
    }
    var newAverage = total / grades.length;
    this.pageHeader.updateAverage(newAverage)
  }
  handleCreateGradeError(error) {
    console.error(error)
  }
  handleCreateGradeSuccess() {
    this.getGrades()
  }
  handleDeleteGradeError(error) {
    console.error(error)
  }
  handleDeleteGradeSuccess() {
    this.getGrades()
  }
  handleChangeGradeError(error) {
    console.error(error)
  }
  handleChangeGradeSuccess() {
    this.getGrades()
  }
  constructor(gradeTable, pageHeader, gradeForm, gradeChange) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)

    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this)
    this.createGrade = this.createGrade.bind(this)

    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this)
    this.deleteGrade = this.deleteGrade.bind(this)

    this.handleChangeGradeError = this.handleChangeGradeError.bind(this);
    this.handleChangeGradeSuccess = this.handleChangeGradeSuccess.bind(this)
    this.changeGrade = this.changeGrade.bind(this)

    this.gradeTable = gradeTable
    this.pageHeader = pageHeader
    this.gradeForm = gradeForm
    this.gradeChange = gradeChange
  }
  getGrades() {
    $.ajax({
      headers: {
        "X-Access-Token": "QL4ulI2r"
      },
      url: 'https://sgt.lfzprototypes.com/api/grades',
      method: 'GET',
      error: this.handleGetGradesError,
      success: this.handleGetGradesSuccess
    })
  }
  createGrade(name, course, grade) {
    $.ajax({
      headers: {
        "X-Access-Token": "QL4ulI2r"
      },
      url: 'https://sgt.lfzprototypes.com/api/grades',
      method: 'POST',
      data: {
        name: name,
        course: course,
        grade: grade
      },
      error: this.handleCreateGradeError,
      success: this.handleCreateGradeSuccess
    })
  }
  deleteGrade(id) {
    $.ajax({
      headers: {
        "X-Access-Token": "QL4ulI2r"
      },
      url: 'https://sgt.lfzprototypes.com/api/grades/' + id,
      method: 'DELETE',
      error: this.handleDeleteGradeError,
      success: this.handleDeleteGradeSuccess
    })
  }
  changeGrade(id, name, course, grade) {
    $.ajax({
      headers: {
        "X-Access-Token": "QL4ulI2r"
      },
      url: 'https://sgt.lfzprototypes.com/api/grades/' + id,
      method: 'PATCH',
      data: {
        name: name,
        course: course,
        grade: grade
      },
      error: this.handleChangeGradeError,
      success: this.handleChangeGradeSuccess
    })
  }
  start() {
    this.getGrades()
    this.gradeForm.onSubmit(this.createGrade)
    this.gradeTable.onDeleteClick(this.deleteGrade)
    this.gradeChange.onSubmit(this.changeGrade)
  }
}
