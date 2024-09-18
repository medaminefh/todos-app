import { useState } from 'react'
import TodoList from "./components/TodoList"
import Input from "./components/Input"

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      done: false
    },
    {
      id: 2,
      text: "Learn JavaScript",
      done: true
    },
    {
      id: 3,
      text: "Learn CSS",
      done: false
    }
  ])

  const EditTodo = (id, newText) => {
    const newTodos = todos.map(todo => {
      if(todo.id == id) return {...todo, text: newText}
      return todo
    })

    setTodos(newTodos)
  }

  const RemoveTodo = (id) => {
    const newTodos = todos.filter(todo => {
      if(todo.id == id) return false
      return true
    })

    setTodos(newTodos)
  }

  const AddTodo = (todo) => {
    /*
      {
      id: 3,
      text: "Learn CSS",
      done: false
    }
    */

    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text: todo,
      done: false
    }

    setTodos([newTodo, ...todos])
  }

  const MarkDone = (id) => {
    const newTodos = todos.map(todo => {
      if(todo.id == id) return {...todo, done: !todo.done}
      return todo
    })

    setTodos(newTodos)
  }

  return (
    <>
    <div className="flex place-items-center h-screen mt-40 flex-col">
    <Input AddTodo={AddTodo} />

    
    <TodoList todos={todos} EditTodo={EditTodo} 
      RemoveTodo={RemoveTodo}
      MarkDone={MarkDone}
    />
    </div>
    </>
  )
}

export default App
