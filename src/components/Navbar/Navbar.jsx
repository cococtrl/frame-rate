import React from 'react';
import styles from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={styles.navbar}>
            <h1>Frame Rate</h1>
            <ul>
                <li>Films</li>
                <li>Login</li>
                <li>Signup</li>
            </ul>
        </nav>
    )
};

export default Navbar;