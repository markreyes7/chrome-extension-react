import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

const TodoList = ({ listItems, setTodoToRemove, priority }) => {

    return (
        <ul>
            {(listItems === undefined) ? (<li>empty guy</li>) : listItems.map((elem, index) => <TodoItem priority={priority} setTodoToRemove={setTodoToRemove} key={index} todoItem={elem}></TodoItem>)}
        </ul>
    )
}

TodoList.propTypes = {
    listItems: PropTypes.array
}

export default TodoList