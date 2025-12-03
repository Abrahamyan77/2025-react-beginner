import type {Todo} from "../types/todo.ts";
import TodoItem from "./TodoItem.tsx";


interface TodoListProps {
    todos: Todo[],
    onCompletedChange: (id: number, completed: boolean) => void,
    onDelete: (id: number) => void
}

export default  function TodoList(
    {todos, onCompletedChange, onDelete} : TodoListProps) {

     const todoSorted = todos.sort((a,b) => {
         if(a.completed === b.completed){
             return b.id - a.id
         }
         return a.completed ? 1 : -1
     })


    return(
        <>
        <div className="space-y-2">
            {todoSorted.map((todo) => {
                return (
                    <TodoItem key={todo.id}
                              todo={todo}
                              onCompletedChange={onCompletedChange}
                              onDelete={onDelete}
                    />
                )
            })}
        </div>
            {todos.length == 0 && (
                <p className="text-center text-sm text-gray-500">
                    Not todo yet. Add a new one above.
                </p>
            )}
        </>
    )
}