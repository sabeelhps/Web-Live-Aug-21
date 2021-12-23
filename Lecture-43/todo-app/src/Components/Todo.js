import React from 'react'
import './Todo.css';
import { FaTrashAlt } from 'react-icons/fa';

const Todo = ({todoItem,deleteTodo,checkTodo}) => {


    const deleteTodoHandler = (id) => {
        deleteTodo(id);
    }

    const inputChangeHandler = (id) => {
        checkTodo(id);
    }

    return (
        <li className={`${todoItem.checked ? 'todo checked' : 'todo'}`}>
            <input onChange={()=>inputChangeHandler(todoItem.id)} type="checkbox" defaultChecked={ todoItem.checked}/>
            <span>{todoItem.todo}</span>
            <span onClick={() => deleteTodoHandler(todoItem.id)}><FaTrashAlt /></span>
        </li>
    )
}

export default Todo
