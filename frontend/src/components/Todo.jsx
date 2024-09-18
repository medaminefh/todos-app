import { useState } from "react"
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";


function Todo(props) {

    /*
    props = { todo:{
      id: 1,
      text: "Learn React",
      done: false
    }, 
    EditTodo: (),
    RemoveTodo: (),
    MarkDone: ()
    }
    */

    const {todo, EditTodo, RemoveTodo, MarkDone} = props

    const handleEdit = (e) => {
        console.log("Edit")
        EditTodo(todo.id, e.target.value)
    }

    const hanldeRemove = () => {
        RemoveTodo(todo.id)
    }

    const [isEdittable, setIsEdittable] = useState(false)

    const handleClick = () => {
        setIsEdittable(!isEdittable)
    }

    const handleDone = () => {
        MarkDone(todo.id)
        console.log(todo)
    }


    return (
        <div className="flex items-center justify-between border gap-3 w-[500px] p-2">
            { isEdittable ? <input className="border pl-1" value={todo.text} onChange={handleEdit} /> : <h1 className={`text-blue-400 ${todo.done ? 'line-through' : ''}`}>{todo.text}</h1>}
            <div className="flex gap-3 items-center">
            <button className="bg-blue-300 text-gray-800 px-2 py-1 flex items-center" onClick={handleClick}>
            <AiOutlineEdit /> <span>EDIT</span></button>
            <button className='bg-slate-500 text-white px-2 py-1 flex items-center' onClick={handleDone}> <AiOutlineCheck /> <span>DONE</span> </button>
            <button className="bg-red-500 text-white px-2 py-1"
            onClick={hanldeRemove}
            > <AiOutlineClose size={24} /> </button>
            </div>
        </div>
    )
}

export default Todo