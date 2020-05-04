import React from 'react';
import styles from './Login.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = (props) => {
    return (
        <main>
            <LoginForm {...props}/>
        </main>
    );
};

export default Login;