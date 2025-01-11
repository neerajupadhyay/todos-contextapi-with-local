import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo =(todo)=>{
  setTodos((prevTodos)=>[...prevTodos,{id:Date.now(),complete:false,...todo}])
  }
  const updateTodo = (id,todo) => {
      setTodos((prevTodo)=> prevTodo.map((prev) => prev.id === id ? todo: prev))
  }

  const deleteTodo = (id) =>{
    setTodos((prevTodo) => prevTodo.filter((obj) => obj.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prevTods) => prevTods.map((todo) => todo.id === id ? {...todo,complete: !todo.complete}:todo))
  }

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todos"))
      if(todo && todo.length){
        setTodos(todo)
      }
  },[])

  useEffect(() => {
     localStorage.setItem("todos",JSON.stringify(todos))
     
  },[todos])
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      <TodoForm></TodoForm>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                          todos.map((todo) =>(
                            <div key={todo.id} className='w-full'>
                              <TodoItem todo={todo}></TodoItem>
                            </div>
                          ))
                        }
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
