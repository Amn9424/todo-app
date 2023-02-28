import React from "react";


const TodoList = ({ todos, removeTodo }) => {
    return (
        <div className="w-full flex flex-col items-center">
            {todos.map((Todo) => (
                <div key={Todo.id} 
                    className="w-4/5 max-w-2xl px-2 text-white  bg-gray-800/40 mb-4 rounded-md flex justify-between items-center ">
                    
                    <span className="w-80 max-w-2xl px-2 overflow-hidden text-ellipsis whitespace-nowrap text-center">
                        {Todo.todo}
                    </span>

                    <button
                            className="border border-white ml-2 my-2 rounded-md p-2 px-3"
                            onClick={() => {
                                removeTodo(Todo.id)
                            }}
                    >
                        &times;
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
