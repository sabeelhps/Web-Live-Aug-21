import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dog = () => {

    const navigate = useNavigate();

    const redirectPageHandler = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>Dog's Page : Wooof Woofff</h1>
            <button onClick={redirectPageHandler}>Redirect To Main Page</button>
        </div>
    )
}

export default Dog
