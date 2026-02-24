import React, { useState, useEffect } from 'react'

function TodoForm() {
  const [tasks, setTasks] = useState([])
  const [taskValue, setTaskValue] = useState('')

  function AddTodo(e){
    e.preventDefault()
    
    if(!taskValue.trim()) return
    
    let copytodo = JSON.parse(localStorage.getItem('tasks')) || []
    
    const newTask = {
        task: taskValue,
        completed: false,
        id: Date.now()
    }
    
    copytodo.push(newTask)
    
    localStorage.setItem("tasks", JSON.stringify(copytodo))

    setTasks(copytodo)    
    setTaskValue('')        
  }

  useEffect(()=>{
    const stored = JSON.parse(localStorage.getItem('tasks')) || []
    setTasks(stored)
  },[])

  return (
    <form className="flex" onSubmit={AddTodo}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={taskValue}
        onChange={(e)=>setTaskValue(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm