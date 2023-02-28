import React, { useState } from "react";
import { v4 } from "uuid";

const TodoInput = ({ addTodo }) => {
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todo === "") {
            return alert("Please enter a todo then submit !");
        }

        const Todo = {
            todo,
            id: v4(),
        };
        // console.log(Todo)
        addTodo(Todo);
        setTodo("");
    };

    return (
        <div className="mb-8 w-full">
            <form className="flex justify-center">
                <input
                    className="w-3/4 max-w-lg p-2 text-white bg-gray-500 placeholder-gray-800 rounded rounded-r-none "
                    type="text"
                    placeholder="Enter your todos here"
                    value={todo}
                    onChange={(event) => {
                        setTodo(event.target.value);
                    }}
                />

                <button
                    onClick={(e) => {
                        handleSubmit(e)
                    }}
                    className="w-50 text-white p-2 rounded-md bg-blue-800 hover:bg-blue-900 rounded-l-none"
                >
                    
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default TodoInput;


