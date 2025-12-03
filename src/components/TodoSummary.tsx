import type {Todo} from "../types/todo.ts";

interface  TodoSummaryProps {
    todo: Todo[];
    deleteAllCompleted: () => void
}

export default  function TodoSummary({todo, deleteAllCompleted}: TodoSummaryProps) {

    const completedTodos = todo.filter(todo => todo.completed)
    return (
       <div className="text-center space-y-2">
           <p className="text-sm font-medium">
               {completedTodos.length} / {todo.length} todos completed
           </p>
           {completedTodos.length > 0 && (
               <button
                   className="text-red-500 hover:underline text-sm font-medium"
                    onClick={deleteAllCompleted}
               >
                   Delete all completed
               </button>
           )}
       </div>
    )
}