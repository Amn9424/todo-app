import React, { useState } from "react";
import { v4 } from "uuid";

const TodoInput = ({ addTodo }) => {
    const [todo, setTodo] = useState("");

    const handleSubmit = () => {

        if(todo === "") {
            return alert("Please enter a todo then submit !")
        }

        const Todo = {
            todo,
            id: v4()
        }
        // console.log(Todo)
        addTodo(Todo);
        setTodo("");
    }

    return (
        <div className="p-6 bg-gray-800 mx-4 font-medium px-8 rounded-md mb-5 ">
            <input
                className="text-white bg-gray-500  placeholder-gray-800 focus:ring focus:ring-blue-500 focus:border-blue-500 rounded w-4/5 p-2"
                type="text"
                placeholder="Enter your todos here"
                value={todo}
                onChange={(event) => {
                    setTodo(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    handleSubmit();
                }}
                className="p-2.5 rounded-md bg-blue-800 hover:bg-blue-900 focus:ring focus:ring-blue-600"
            >
                Add Todo
            </button>
        </div>
    );
};

export default TodoInput;
