import React,{useState} from 'react'
import TodoList from './TodoList'
import Form from './Form';

const TodoApp = () => {

    const DUMMY_TODOS = [
        {
            id: 0,
            todo: "Go to Shopping"
        },
        {
            id: 1,
            todo: "Buy Groceries"
        },
        {
            id: 2,
            todo: "Watch Movies"
        },
        {
            id: 3,
            todo: "Learn React"
        }
    ];

    const [todos, setTodos] = useState(DUMMY_TODOS);
    
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    return (
        <div style={{width:'360px',margin:'30px auto'}}>
            <h1 style={{textAlign:'center'}}>Todo App</h1>
            <Form addTodo={addTodo} todos={todos} />
            <TodoList todos={todos} />
           
        </div>
    )
}

export default TodoApp
