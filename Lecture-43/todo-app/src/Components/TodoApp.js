import React,{useState,useEffect} from 'react'
import TodoList from './TodoList'
import Form from './Form';


const TodoApp = () => {

    const DUMMY_TODOS = JSON.parse(window.localStorage.getItem('todos') || "[]") 
    
    const [todos, setTodos] = useState(DUMMY_TODOS);
    
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }


    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);



    const deleteTodo = (id) => {
        setTodos((prevState) => {
            return prevState.filter((todo) => todo.id !== id);
        });
    }

    const checkTodo = (id) => {
        setTodos((prevState) => {
            return prevState.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        })
    }

    return (
        <div style={{width:'360px',margin:'30px auto'}}>
            <h1 style={{textAlign:'center'}}>Todo App</h1>
            <Form addTodo={addTodo} todos={todos} />
            <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} />
        </div>
    )
}

export default TodoApp
