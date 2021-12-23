import React,{useState,useEffect} from 'react'
import styles from './Github.module.css';


const GithubUser = (props) => {


    const [user, setUser] = useState({
        imgUrl: '',
        followers: 0,
        following: 0
    });


    useEffect(() => {
        
        async function getUser(username) {
            
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            
            const { avatar_url,followers,following } = data;

            setUser(() => {
                return { imgUrl: avatar_url, followers: followers, following: following };
            })
        }

        getUser(props.username);

    }, []);


    return (
        <figure className={styles.user}>
            <img src={ user.imgUrl} alt="profile-picture"/>
            <figcaption>
                <p>Username : {props.username}</p>
                <p>Followers : { user.followers}</p>
                <p>Following : { user.following}</p>
            </figcaption>
        </figure>
    )
}

export default GithubUser;
