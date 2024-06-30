// src/services/api.js

const createUser = (username) => {
    return fetch(`https://playground.4geeks.com/todo/users/${username}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error creating user:', error);
        throw error;
    });
}

const deleteUser = (username) => {
    return fetch(`https://playground.4geeks.com/todo/users/${username}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error deleting user:', error);
        throw error;
    });
}

const readUser = (username) => {
    return fetch(`https://playground.4geeks.com/todo/users/${username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error reading user:', error);
        throw error;
    });
}

const readUserList = (offset, limit) => {
    return fetch(`https://playground.4geeks.com/todo/users?offset=${offset}&limit=${limit}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error reading user list:', error);
        throw error;
    });
}

const createUserTodo = (username, label, is_done) => {
    return fetch(`https://playground.4geeks.com/todo/todos/${username}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            label: label,
            is_done: is_done,
        }),
    })
    .then(response => {
        if (response.status === 201) {
            console.log('TODO created successfully');
        } else {
            throw new Error('Failed to create TODO');
        }
    })
    .catch(error => {
        console.error('Error creating TODO:', error);
        throw error;
    });
}

const updateTodo = (todoId, todoData) => {
    return fetch(`https://playground.4geeks.com/todo/todos/${todoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todoData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update TODO');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error updating TODO:', error);
        throw error;
    });
}

const deleteTodo = (todoId) => {
    return fetch(`https://playground.4geeks.com/todo/todos/${todoId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error deleting TODO:', error);
        throw error;
    });
}

export {
    createUser,
    deleteUser,
    readUser,
    readUserList,
    createUserTodo,
    updateTodo,
    deleteTodo,
};