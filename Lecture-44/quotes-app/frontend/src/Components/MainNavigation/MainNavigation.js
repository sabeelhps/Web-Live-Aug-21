import React from 'react'
import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <nav className={styles.nav}>
            <h2>Great Quotes</h2>
            <ul>
                <li><Link to="/">All Quotes</Link></li>
                <li><Link to="/new">Add Quotes</Link></li>
            </ul>
        </nav>
    )
}

export default MainNavigation
