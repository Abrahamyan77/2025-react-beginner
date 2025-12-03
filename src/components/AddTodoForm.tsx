import {useState} from "react";


interface  AddTodoFormProps {
    onSubmit: (title: string) => void;
}
export default function AddTodoForm({onSubmit} :AddTodoFormProps) {

    const [input, setInput] = useState("");

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!input.trim()) return;
        onSubmit(input)
        setInput("")

    }

    return(
        <form className="flex" onSubmit={handelSubmit}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="what needs to be done?"
                className="rounded-s-md grow border border-gray-400 p-2"
            />
            <button
                className="w-16 rounded-e-sm border bg-slate-900 text-white hover:bg-slate-800"
                type="submit"
            >
                Add
            </button>
        </form>
    )
}