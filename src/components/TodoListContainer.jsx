import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const TodoListContainer = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = (event) => {
        event.preventDefault();
        if (newTodo.trim() !== "") {
            setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
            setNewTodo("");
        }
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="h-full overflow-auto p-4 bg-my-green-2">
            <h2 className="md:text-xl mb-4">Todo List</h2>
            <form onSubmit={addTodo} className="mb-4 flex">
                <input
                    type="text"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                    placeholder="New Todo"
                    className="flex-grow border p-2 mr-2 rounded"
                />
                <button type="submit" className="bg-button-color text-white hover:bg-button-color-hover px-4 py-2 rounded">Add</button>
            </form>
            <ul className="mt-4 space-y-2">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center justify-between border p-2 my-2 rounded shadow">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                                className="mr-2"
                            />
                            <span className={todo.completed ? "line-through text-gray-500" : ""}>{todo.text}</span>
                        </div>
                        <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-700">
                            <FaTrash/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoListContainer;


