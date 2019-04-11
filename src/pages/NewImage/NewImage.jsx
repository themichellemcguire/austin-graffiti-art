import React from 'react';
import styles from './NewImage.module.css';

function NewImage(props) {
    const handler = props.handleSubmit
    return (
        <form onSubmit={handler} className={styles.NewImage}>
            <div class="card" >
            <img class="card-img-top" src=".../100px180/" alt="Card cap"></img>
            <div class="card-body">
                <h5 class="card-title" placeholder="your art title">New Graffiti Art</h5>
                <p class="card-text" placeholder="location description"></p>
                <a href="/gallery" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </form>
    )
}

export default NewImage