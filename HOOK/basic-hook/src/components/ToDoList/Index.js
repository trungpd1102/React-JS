import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import List from './TodoList'
import TodoForm from './TodoForm'

TodoList.propTypes = {

};

function TodoList(props) {
    const [todoList, setTodoList] = useState([
        { id: 0, title: 'Hello React Hook✨' },
        { id: 1, title: 'This is basic React Hook🎇' },
        { id: 2, title: 'Hope this one can help me improve my React skill ⌨' },
    ])
    // const [id, setId] = useState()

    // function handleTodoClick(todo) {
    //     if (id && id !== todo.id) document.getElementById(id).style.color = '';

    //     document.getElementById(todo.id).style.color = 'blue';
    //     setId(todo.id);
    // }

    function handleTodoClick(todo) {
        console.log(todo);
        const index = todoList.findIndex(x => x.id === todo.id);

        if (index < 0) return;

        let newTodoList = [...todoList];
        newTodoList.splice(index, 1);

        setTodoList(newTodoList);
    }

    function handleTodoFormSubmit(formValue) {
        console.log("Form values:", formValue);
        // add new todo to list
        const newTodo = {
            id: todoList.length,
            ...formValue,
        }
        const newTodoList = [...todoList];
        
        newTodoList.push(newTodo);
        setTodoList(newTodoList)
    }

    return (
        <div>
            <h1>React Hook - TodoList</h1>

            <List
                todos={todoList}
                onTodoClick={handleTodoClick}
            />
            <TodoForm onSubmit={handleTodoFormSubmit}/>
        </div>
    );
}

export default TodoList;