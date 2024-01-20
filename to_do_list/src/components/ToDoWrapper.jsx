import React, {useState} from 'react'
import { ToDoForm } from './ToDoForm'
import { v4 as uuidv4} from 'uuid'
import { ToDo } from './ToDo'
import { EditToDoForm } from './EditToDoForm'
uuidv4()

export const ToDoWrapper = () => {
    const [toDos, setToDos] = useState([])
    const addToDo = toDo => {
        setToDos([...toDos, {id:uuidv4(), task: toDo, completed: false, isEditing: false}])
    }
    console.log(toDos)

    const toggleComplete = id => {
        setToDos(toDos.map(toDo => toDo.id === id ? {...
        toDo, completed: !toDo.completed} : toDo))
    }
    const deleteToDo = id => {
        setToDos(toDos.filter(toDo => toDo.id !== id))
    }
    const editToDo = id => {
        setToDos(toDos.map(toDo => toDo.id === id ? {...
        toDo, isEditing: !toDo.isEditing} : toDo))
    }
    const editTask = (task, id) => {
        setToDos(toDos.map(toDo => toDo.id === id ? {...
        toDo, task, isEditing: !toDo.isEditing} :toDo) )
    }
    return (
        <div className="bg-slate-200 min-h-screen flex flex-col items-center justify-center ">
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold pt-10 mb-4">Shit that needs doing...</h1>
            <ToDoForm addToDo={addToDo} />
            <div className="mt-4">
              {toDos.map((toDo, index) => (
                toDo.isEditing ? (
                  <EditToDoForm editToDo={editTask} task={toDo} />
                ) : (
                  <ToDo
                    task={toDo}
                    key={index}
                    toggleComplete={toggleComplete}
                    deleteToDo={deleteToDo}
                    editToDo={editToDo}
                  />
                )
              ))}
            </div>
          </div>
        </div>
    )}
