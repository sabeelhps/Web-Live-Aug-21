import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const ShowQuotes = () => {

    const params = useParams();
    const [quote, setQuote] = useState({
        author: '',
        text: ''
    });


    async function fetchAQuote() {
        
        const res = await axios.get(`http://localhost:8000/quotes/${params.id}`);
        
        const { author, text } = res.data;

        setQuote({ author, text });
    }

    useEffect(() => {
        
        fetchAQuote()

    },[])

    

    return (
        <div>
            <h1>{quote.author}</h1>
            <p>{quote.text }</p>
        </div>
    )
}

export default ShowQuotes
