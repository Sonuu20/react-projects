import { useState, useEffect } from 'react'
import './App.css'
import { TodoContext } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (
      prevTodo.id === id ? todo : prevTodo
    )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const checkmark = (id) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if(todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    
  }, [todos])
  
  

  return (
    <TodoContext.Provider value={{todos, addTodo, updateTodo, deleteTodo, checkmark}}>
  <div className='flex justify-center items-center px-4 py-1 md:p-10'>
  <div className="bg-[#172842] w-full md:w-[100wh] h-screen py-1 m-0 px-1 md:py-8">
         <div className="w-full max-w-3xl mx-auto shadow-md rounded-lg  px-1 py-1 md:px-3 md:py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
               <div className="mb-4">
                   <TodoForm />
              </div>
               <div className="flex flex-wrap gap-y-3">
                   {todos.map((todo) => (
                    <div key={todo.id} className='w-full'>
                      <TodoItem todo={todo}/>
                    </div>
                   ))}
              </div>
          </div>
      </div>
  </div>
    </TodoContext.Provider>
  )
}

export default App
