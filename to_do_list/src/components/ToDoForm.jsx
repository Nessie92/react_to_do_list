import React, {useState} from 'react'

export const ToDoForm = ({addToDo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = event => {
        event.preventDefault()
        addToDo(value)
        setValue("")
    }
  return (
    <form className="flex items-center space-x-2" onSubmit={handleSubmit}>
        <input className="border border-gray-300 p-2 rounded-md" type="text" value={value} placeholder='Enter Task.' onChange={(event) => setValue(event.target.value)} />
        <button  className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-600" type='submit'>Add Task</button>
    </form>
  )
}
