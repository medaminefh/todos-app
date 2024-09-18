import Todo from "./Todo"

function TodoList(props) {



    /*
    props = {
        todos={todos}
        EditTodo={EditTodo} 
        RemoveTodo={RemoveTodo}
        MarkDone={MarkDone}
    }
    */

   const { todos, EditTodo, RemoveTodo, MarkDone} = props
    return (
        <div className="mt-5">
            <ul className="flex flex-col gap-2">
                {
                    todos.map(todo => <div key={todo.id} className="flex flex-col gap-2">
                        <Todo todo={todo} EditTodo={EditTodo}
                            RemoveTodo={RemoveTodo}
                            MarkDone={MarkDone}
                        />
                        </div>)
                }
            </ul>
        </div>
    )
}

export default TodoList