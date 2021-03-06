import React from 'react';
import styles from './Signup.module.css';
import SignupForm from '../../components/SignupForm/SignupForm';

const Signup = (props) => {
    return (
        <main>
            <SignupForm 
                {...props} 
                handleSignupOrLogin={props.handleSignupOrLogin}/>
        </main>
    );
};

export default Signup;