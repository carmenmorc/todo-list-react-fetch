import React, { useEffect, useState } from 'react';
import { readUserList, createUserTodo, updateTodo, deleteTodo } from 'src/services/api.js'; // Ajusta la ruta según la estructura de tu proyecto

function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = () => {
        readUserList(0, 10)
            .then(data => {
                if (Array.isArray(data)) {
                    setTodos(data);
                } else {
                    console.error('Error: Data is not an array', data);
                }
            })
            .catch(error => console.error('Error fetching todos:', error));
    };

    const handleAddTodo = (label) => {
        createUserTodo('defaultUser', label, false) // Ajusta el usuario según tus necesidades
            .then(() => fetchTodos())
            .catch(error => console.error('Error adding todo:', error));
    };

    const handleUpdateTodo = (id, todoData) => {
        updateTodo(id, todoData)
            .then(() => fetchTodos())
            .catch(error => console.error('Error updating todo:', error));
    };

    const handleDeleteTodo = (id) => {
        deleteTodo(id)
            .then(() => fetchTodos())
            .catch(error => console.error('Error deleting todo:', error));
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            <ul>
                {todos && todos.map(todo => (
                    <li key={todo.id}>
                        {todo.label}
                        <button onClick={() => handleUpdateTodo(todo.id, { ...todo, is_done: !todo.is_done })}>
                            {todo.is_done ? 'Mark as Undone' : 'Mark as Done'}
                        </button>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Add new todo"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleAddTodo(e.target.value);
                        e.target.value = '';
                    }
                }}
            />
        </div>
    );
}

export default Home;