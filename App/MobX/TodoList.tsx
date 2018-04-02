import {observable} from 'mobx'

class TodoList {
  @observable list = [
    'item1',
    'item2',
    'item3'
  ]

  addTodo (item:string) {
    this.list.push(item)
  }

  removeTodo (index:number) {
    this.list.splice(index, 1)
  }
}


const observableTodoList = new TodoList()
export default observableTodoList
