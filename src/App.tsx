import AddTodoForm from "./components/AddTodoForm.tsx";
import TodoList from "./components/TodoList.tsx";
import TodoSummary from "./components/TodoSummary.tsx";
import useTodos from "./hooks/useTodos.ts";

function App() {
  const {todos, deleteTodo, setTodoCompleted, deleteAllCompletedTodo, addTodo} = useTodos()
    return (
   <main className="py-10 h-screen space-y-5 overflow-y-auto">
       <h1 className="font-bold text-3xl text-center">
           My To do
       </h1>
       <div className="max-w-lg mx-auto bg-slate-100 p-5 rounded-md space-y-6">
           <AddTodoForm  onSubmit={addTodo}/>
           <TodoList  todos={todos}  onCompletedChange={setTodoCompleted} onDelete={deleteTodo} />
       </div>
       <TodoSummary todo={todos}  deleteAllCompleted={deleteAllCompletedTodo} />
   </main>
  )
}

export default App
