import React, { Component } from 'react';
import styles from './FilmForm.module.css';

import userService from '../../utils/userService';
import filmService from '../../utils/filmService';

class FilmForm extends Component {

    state = this.getInitialState();

    getInitialState() {
        return {
            title: '',
            director: '',
            error: ''
        };
    }

    isFormValid = () => {
        return (
            this.state.title && 
            this.state.director
        )
    }

    handleChange = e => {
        this.setState({
            error: '',
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        if(!this.isFormValid()) return;
        try {
            const { title, director } = this.state;
            const addedBy = userService.getUser()._id
            await userService.create({ title, director, addedBy });
            this.setState(this.getInitialState(), () => {
                this.props.hangleGetFilms();
                this.props.historn.push('/films')
            });
        } catch (error) {
            this.setState({
                title: '',
                director: '',
                error: error.message 
            });
        }
    }

    render () {
        return (
        <section className={styles.section}>
                {
                    this.state.error && <p>{this.state.error}</p>
                }
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>New Film Form</legend>

                    <label htmlFor="title">Title</label>
                    <input 
                        id="title" 
                        name="title" 
                        type="title" 
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="directot">Director</label>
                    <input 
                        id="director" 
                        name="director" 
                        type="director" 
                        value={this.state.director}
                        onChange={this.handleChange}
                    />
                    <button disabled={!this.isFormValid()} type="submit">Add Film</button>
                </fieldset>
            </form>
        </section>
        );
    }
}

export default FilmForm;