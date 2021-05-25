import React from 'react';
import PropTypes from 'prop-types';

List.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

List.defaultProps = {
    todos: [],
    onTodoClick: null,
}

function List(props) {
    const { todos, onTodoClick } = props;
    console.log(todos);
    function handleClick(todo) {
        if (onTodoClick) onTodoClick(todo)
    }

    return (
        <div>
            <ul className='to-do'>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        id={todo.id}
                        onClick={() => handleClick(todo)}
                        style={{ cursor: 'pointer' }}
                    >
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;