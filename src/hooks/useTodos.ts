import type {Todo} from "../types/todo.ts";
import {useState, useEffect} from "react";
import {dummyData} from "../data/todo.ts";


export default function useTodos() {

    const [todos, setTodos] = useState(() => {
        const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos")  || "" )
        return  savedTodos.length > 0 ? savedTodos : dummyData
    })

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    },[todos])



    function  setTodoCompleted (id: number, completed: boolean) {
        setTodos((prevState) =>
            prevState.map((todo: Todo) => (todo.id === id ? {...todo, completed} : todo))
        )
    }

    function  addTodo(title: string){
        setTodos((prevState) => [
            {
                id: Date.now(),
                title,
                completed: false
            },
            ...prevState
        ] )
    }

    function  deleteTodo(id: number) {
        setTodos(prevState => prevState.filter(todo => todo.id !== id))
    }

    function  deleteAllCompletedTodo() {
        setTodos(prevState => prevState.filter(todo => !todo.completed))
    }

    return {
        todos,
        setTodoCompleted,
        addTodo,
        deleteTodo,
        deleteAllCompletedTodo
    }

}