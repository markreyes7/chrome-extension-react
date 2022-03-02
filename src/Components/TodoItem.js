import React from 'react'

const TodoItem = ({ todoItem, index, setTodoToRemove }) => {
    return (
        <li onClick={e => {
            console.log(e.target.textContent);
            setTodoToRemove(e.target.textContent);
        }} key={index}>
            {todoItem}

        </li>
    )
}

export default TodoItem