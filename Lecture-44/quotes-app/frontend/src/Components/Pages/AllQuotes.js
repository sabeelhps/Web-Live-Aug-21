import React,{useState,useEffect} from 'react'
import Quote from '../Quote/Quote';
import axios from 'axios';


const AllQuotes = () => {

    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    async function getAllQuoutes() {
        try {
            const res = await axios.get('http://localhost:8000/allquotes')
            setQuotes(res.data);
            setIsLoading(false);
        }
        catch (e) {
            console.log('Cannot Fetch The Quotes At the moment');
        }
    }

    useEffect(() => {
        getAllQuoutes();
    }, []);



    return (
        <div>
            <h1>All Quotes</h1>
            {isLoading ?
                <p>Loading....</p> :
                <ul style={{padding:'0px'}}>
                {
                    quotes.map((quote) => {
                        return <Quote
                            key={quote._id}
                            author={quote.author}
                            text={quote.text}
                            id={quote._id}
                        />
                    })
                }
            </ul>
            }
          
          
        </div>
    )
}

export default AllQuotes
