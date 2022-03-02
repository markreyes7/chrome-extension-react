import Header from './Components/Header';
import './App.css';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react'
import TodoList from './Components/TodoList';
import Form from './Components/Form';
import TodoItem from './Components/TodoItem';

function App() {
  const [theme, setTheme] = useState('boring')
  const [todo, setTodo] = useState()
  const [todoList, setToDoList] = useState([])
  const [todoToRemove, setTodoToRemove] = useState()


  useEffect(() => {
    var saved = localStorage.getItem("todo-list");
    
    let savedList = () => (saved !== null) ? saved.split(',') : [];
    
    setToDoList(savedList)
  },[])

  return (
    <div className="App">
      <div className={theme}>
        <Header></Header>
        <Form todo={todo} setTodo={setTodo} setToDoList={setToDoList} todoList={todoList} todoToRemove={todoToRemove}></Form>
        {(typeof todo === "undefined") ? (<p>hello</p>) :
          <TodoList listItems={todoList} setTodoToRemove={setTodoToRemove}>

          </TodoList>}
        <Footer setTheme={setTheme}></Footer>
      </div>
    </div>
  );
}

export default App;
