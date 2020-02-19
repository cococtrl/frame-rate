import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <h1>Frame Rate</h1>
            </Link>
            <ul>
                <li>
                    <Link to="/films">Films</Link>
                </li>
                <li>
                <Link to="/login">Login</Link>
                </li>
                <li>
                <Link to="/signup">Signup</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;