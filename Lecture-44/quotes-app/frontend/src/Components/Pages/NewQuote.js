import React,{useRef} from 'react'
import styles from './NewQuote.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewQuote = () => {


    const usernameInputRef = useRef();
    const quoteInputRef = useRef();

    const navigate = useNavigate();


    const addQuoteHandler = async(e) => {
        e.preventDefault();

        const author = usernameInputRef.current.value;
        const text = quoteInputRef.current.value;

        try {
            const res = await axios.post('http://localhost:8000/addQuotes', { author, text });
            console.log(res);
            navigate('/'); //to redirect to the allQuotes page after creating a new quote
        }
        catch (e) {
            console.log('Cannot Create Quote at the moment');            
        }

    }

    return (
        <form onSubmit={addQuoteHandler} className={styles['new-quote-form']}>
                <div>
                    <label htmlFor="author">Author</label>
                <input type="text" id="author" placeholder="Author Name" ref={ usernameInputRef}/>
                </div>
                <div>
                    <label htmlFor="quote">Quote</label>
                    <textarea cols={20} rows={3} ref={quoteInputRef}></textarea>
                </div>
                <button>Submit</button>
        </form>
    )
}

export default NewQuote
