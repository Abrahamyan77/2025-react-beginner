import {dummyData} from "./data/todo.ts";
import TodoItem from "./components/TodoItem.tsx";

function App() {

  return (
   <main className="py-10 h-screen space-y-5">
       <h1 className="font-bold text-3xl text-center">
           My To do
       </h1>
       <div className="max-w-lg mx-auto bg-slate-100 p-5 rounded-md">
           <div className="space-y-2">
               {dummyData.map((todo) => {
                   return (
                       <TodoItem  todo={todo}/>
                   )
               })}
           </div>
       </div>
   </main>
  )
}

export default App
