import {dummyData} from "./data/todo.ts";
import {useState} from "react";
import type {Todo} from "./types/todo.ts";
import AddTodoForm from "./components/AddTodoForm.tsx";
import TodoList from "./components/TodoList.tsx";

function App() {

    const [todos, setTodos] = useState(dummyData)

    function  setTodoCompleted (id: number, completed: boolean) {
        setTodos((prevState) =>
            prevState.map((todo: Todo) => (todo.id === id ? {...todo, completed} : todo))
        )
    }

    function  addTodo(title: string){
        setTodos((prevState) => [
            {
                id: prevState.length + 1,
                title,
                completed: false
            },
            ...prevState
        ] )
    }

    function  onDelete() {

    }

    return (
   <main className="py-10 h-screen space-y-5">
       <h1 className="font-bold text-3xl text-center">
           My To do
       </h1>
       <div className="max-w-lg mx-auto bg-slate-100 p-5 rounded-md space-y-6">
           <AddTodoForm  onSubmit={addTodo}/>
           <TodoList  todos={todos}  onCompletedChange={setTodoCompleted} onDelete={onDelete} />
       </div>
   </main>
  )
}

export default App
