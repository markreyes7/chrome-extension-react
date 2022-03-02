import { useEffect, useState } from 'react'

const Form = ({ setTodo, todo, setToDoList, todoList, todoToRemove }) => {
    const [value, setValue] = useState('');
    const [addOrRemove, setAddOrRemove] = useState('');


    const handleChange = e => {
        e.preventDefault()
        setValue(e.target.value)

    }
    const onSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        const timer = setTimeout(async () => {

            if (addOrRemove === "add") {
                console.log("i initalized from form")
                //  localStorage.clear()
                if (todoList === []) return
                localStorage.setItem("todo-list", todoList)
                console.log(todoList)
                console.log("Added")
            }
            else if(addOrRemove === "remove"){
                if (todoList === []) return
                localStorage.setItem("todo-list", todoList)
                console.log(todoList)
                console.log("removed")
            }
        }, 2000)
        console.log("adding")
        return () => clearTimeout(timer)
    }, [todoList, addOrRemove])



    return (
        <form onSubmit={onSubmit} className="form-example">
            <div className="form-example">
                <label htmlFor="text">Enter your todos.
                    <input type="text" value={value} onChange={handleChange} />
                    <button onClick={() => {
                        setTodo(value);
                        setToDoList(prevTodos => [...prevTodos, value]);
                        setAddOrRemove("add");

                    }}>Add me </button>
                    <button onClick={() => {
                        setToDoList((prevList) => prevList.filter(word => word !== todoToRemove));
                        setAddOrRemove("remove")

                    }
                    }>Remove me</button>
                </label>
                <input type="checkbox" />
                <span>Priority?</span>
            </div>
            <div className="form-example">

            </div>
        </form>
    )
}

export default Form