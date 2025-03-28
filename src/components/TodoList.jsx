import React, { useEffect, useState } from 'react'
import "../css/TodoList.css"
import { Circle, CircleCheckBig, Moon, Sun, Trash2 } from 'lucide-react'

function TodoList() {
  
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.body.classList = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  
  return (
    <div className="todo-list">
      <header>
        <h1>Todo List</h1>
        <button onClick={toggleTheme} >
          {theme === "light" ? <Moon /> : <Sun />}
        </button>
      </header>
      <ul className="todos">
        <li className='todo'>
          <span><Circle /> Unchecked</span><Trash2 />
        </li>
        <li className='todo'>
          <span><CircleCheckBig /> Checked</span><Trash2 />
        </li>
      </ul>
    </div>
  )
}

export default TodoList