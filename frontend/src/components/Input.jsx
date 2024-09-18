import { useState } from "react"

function Input(props) {
    const [text, setText] = useState("")

    const handleChange = (e) => {
        const newText = e.target.value
        setText(newText)
    }

    const handleEnter = (e) => {
        if(e.key == "Enter") {
            props.AddTodo(text)
            setText("")
        }
    }

    return (
        <div>
            <input value={text} onChange={handleChange} type="text" className="pl-1 border-2 border-gray-600"
            onKeyDown={handleEnter}
             />
        </div>
    )
}

export default Input