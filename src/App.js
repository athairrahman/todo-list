import './App.css';
import Todoform from './Component/Todoform'
import Header from './Component/Header'
import TodoItem from './Component/TodoItem'
import {useState} from 'react'

function App() {

  const [todos, setTodos] = useState ([])

  const addTodo = (text) => {
    let id = 1
    if (todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = { id: id, text: text, completed: false }
    let newTodos = [todo, ...todos]
    console.log(newTodos)
    setTodos (newTodos)
  }

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
}
  return (
    <div>
      <Header />
      <Todoform addTodo={addTodo} />
      {
        todos.map((todo) => {
          return (
            <TodoItem removeTodo={removeTodo} todo={todo} key={todo.id} />
          )
        })
      }
    </div>
  )
}

export default App;
