import React, { useState } from "react";
import { v4 } from "uuid";

const TodoInput = ({ addTodo }) => {
    const [todo, setTodo] = useState("");

    const handleSubmit = () => {
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
        <div className="p-6 px-8 mb-5 mx-4 bg-gray-800 font-medium rounded-md min-w-max">
            <form className="">
                <input
                    className="p-2 text-white bg-gray-500 placeholder-gray-800 focus:ring focus:ring-blue-500 focus:border-blue-500 rounded"
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
                    className="text-white p-2 rounded-md bg-blue-800 hover:bg-blue-900 focus:ring focus:ring-blue-600"
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default TodoInput;
