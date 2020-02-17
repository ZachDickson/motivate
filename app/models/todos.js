export default class Todos {
  constructor(data){
    this.task = data.task
  }

get todoTemplate(){
  return /*html*/`
  <div id="tasklist">${this.task}</div>

  `

}
}