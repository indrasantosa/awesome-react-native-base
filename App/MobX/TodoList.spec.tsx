import todoList from './todoList'

describe('Todo List', () => {
  it('Should able to do increament', () => {
    expect(todoList.list.length).toBe(3)
    todoList.addTodo('additional item')
    expect(todoList.list.length).toBe(4)
  })
})