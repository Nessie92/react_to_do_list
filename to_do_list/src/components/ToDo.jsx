import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDo = ({task, toggleComplete, deleteToDo, editToDo}) => {
  return (
    <div className={`bg-white shadow-md p-4 rounded-md mb-4 flex justify-between items-center cursor-pointer ${task.completed ? 'bg-slate-400 text-red-500 line-through cursor-pointer' : 'text-black'}`}>
        <p onClick={() => toggleComplete(task.id)} className="text-lg hover:text-red-600">{task.task}</p>
        <div className="flex space-x-2">
            <FontAwesomeIcon icon={faPenToSquare} className="text-blue-500 cursor-pointer" onClick={()=> editToDo(task.id)}/>
            <FontAwesomeIcon icon={faTrash} className="text-red-500 cursor-pointer" onClick={() => deleteToDo(task.id)}/>
        </div>
    </div>
  )
}
