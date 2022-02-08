import React,{ useState, useEffect} from "react";
import Header from "./Component/header";
import TodoInput from "./Component/Todo-Input";
import TodoList from "./Component/Todo-list";

const App = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }

    const removeTodo = (id) => {
        setTodos(todos.filter( todo => todo.id !== id))
    }

    useEffect( () => {
        const data = localStorage.getItem('Todo')
        if(data) {
            setTodos(JSON.parse(data))
        }
    }, [])

    useEffect( () => {
        localStorage.setItem('Todo', JSON.stringify(todos))
    }, [todos])

    return (
        <div>
            {console.log(todos)}
            <Header />
            <div className="p-4 bg-slate-900 h-screen relative">
                <TodoInput addTodo={addTodo} />
                { todos ? (
                    <TodoList todos={todos} removeTodo={removeTodo}/>
                ) : (
                    <h2 className="text-white">Enter some Todo</h2>
                ) }
                
            </div>
            
        </div>
    );
}

export default App;
