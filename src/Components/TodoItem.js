import React from 'react'

const TodoItem = ({ todoItem, index, setTodoToRemove, priority }) => {

    var today = new Date();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


    return (
        <>
            {(priority) ? (<li className='priority' onClick={e => {
                console.log("im a priority")
                console.log(e.target.textContent);
                setTodoToRemove(e.target.textContent);
            }} key={index} ></li>)
                :
                <li onClick={e => {
                    console.log("im not a priority")
                    console.log(e.target.textContent);
                    setTodoToRemove(e.target.textContent);
                }} key={index}>

                    {todoItem}

                </li>}
        </>
    )
}

export default TodoItem