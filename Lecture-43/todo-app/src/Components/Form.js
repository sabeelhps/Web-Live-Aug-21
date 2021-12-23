import React,{useState} from 'react'
import './Form.css';
import { v4 as uuid } from 'uuid';

const Form = (props) => {

    const [input, setInput] = useState('');
    const [isValid, setIsValid] = useState(true);

    const inputChangeHandler = (e) => {
        setInput(e.target.value);
        if (input.trim().length > 0) {
            setIsValid(true);
        }
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        
        if (input.trim().length === 0) {
            setIsValid(false);
            return;
        }

        const newTodo = {
            id: uuid(),
            todo: input,
            checked:false
        }
        props.addTodo(newTodo);
        setInput('');
    }

    return (
        <form className="input-form" onSubmit={formSubmitHandler}>
            <input style={{border: `${!isValid ? '2px solid red':''}`}} onChange={inputChangeHandler} type="text" placeholder="Add Your Todos" value={ input}/>
        </form>
    )
}

export default Form
