import React from "react";

const TodoList = ({ todos, removeTodo }) => {
    return (
        <div className="text-white text-center">
            {todos.map((Todo) => (
                <span key={Todo.id} className="mx-12">
                    {Todo.todo}
                    <button
                        className="border border-white p-2 ml-2 my-2 hover:bg-red-600"
                        onClick={() => {
                            removeTodo(Todo.id)
                        }}
                    >
                        Remove
                    </button>
                    <hr />
                </span>
            ))}
        </div>
    );
};

export default TodoList;
