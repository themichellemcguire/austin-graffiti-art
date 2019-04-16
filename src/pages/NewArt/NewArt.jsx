import React, {Component} from 'react';
// import styles from './NewImage.module.css';

class NewImage extends Component {
// function NewImage(props) {
    // const handler = props.handleSubmit
    fileSelectedHandler = event => {
        console.log(event);
    }
    render() {
        return (
            <div className="card" >
            <input type="file" onChange={this.fileSelectedHandler} />
            <div className="card-body">
                <h5 className="card-title" placeholder="your art title">New Graffiti Art</h5>
                <p className="card-text" placeholder="location description"></p>
                <a href="/gallery" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        )
    }
}

export default NewImage

