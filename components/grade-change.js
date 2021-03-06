class GradeChange {
  constructor(updateElement) {
    this.updateElement = updateElement
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateElement.addEventListener('submit', this.handleSubmit)
    this.updateElement.addEventListener('reset', this.resetForms)
  }
  copyUser(data) {
    this.updateElement.parentNode.classList.remove('d-none')
    form.parentNode.classList.add('d-none')

    var changeName = document.getElementById('changeName')
    var changeCourse = document.getElementById('changeCourse')
    var changeGrade = document.getElementById('changeGrade')
    var gradeId = document.getElementById('gradeId')

    changeName.value = data.name
    changeCourse.value = data.course
    changeGrade.value = data.grade
    gradeId.value = data.id
  }
  resetForms() {
    this.parentNode.classList.add('d-none')
    form.parentNode.classList.remove('d-none')
  }
  onSubmit(changeGrade) {
    this.changeGrade = changeGrade
  }
  handleSubmit(event) {
    event.preventDefault()
    var formData = new FormData(event.target)
    var id = formData.get('id');
    var formName = formData.get('name');
    var formCourse = formData.get('course');
    var formGrade = formData.get('grade');
    this.changeGrade(id, formName, formCourse, formGrade)
    event.target.reset()
    this.resetForms
  }
}
// event.target = form
//combine methods?
//return?
