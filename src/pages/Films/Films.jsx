import React from 'react';
// import styles from './Films.module.css';
import FilmForm from '../../components/FilmForm/FilmForm';

const Films = (props) => {
    return (
        <main>
            <h1>Films</h1>
            {
                props.films.map(({title, director, _id}) => (
                <section key={_id}>{title}
                <h1>{title}</h1>
                <p>Director: {director}</p>
                </section>
                ))
            }
            <FilmForm {...props}/>
        </main>
    );
};

export default Films;