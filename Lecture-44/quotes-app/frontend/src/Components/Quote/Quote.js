import React from 'react'
import styles from './Quote.module.css';
import { useNavigate } from 'react-router-dom';

const Quote = (props) => {

    const navigate = useNavigate();

    const showQuoteHandler = (id) => {
        navigate(`/quotes/${id}`);
    }


    return (
        <li className={styles.quote}>
            <span>
                <p>{props.text}</p>
                <p>{props.author}</p>
            </span>
            <button onClick={()=>showQuoteHandler(props.id)}>View Fullscreen</button>
        </li>
    )
}

export default Quote;
