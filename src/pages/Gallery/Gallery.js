import React from "react"
import styles from "./Gallery.module.css"
import hello from "./images/Hello.jpg"
import bob from "./images/BobBarker.jpg"
import kindness from "./images/kindness.jpg"
import optimist from "./images/OptimistPrime.jpg"

const imageArray = [
  { image : hello, title : 'hello', location : 'location description' },
  { image : bob , title : 'bob', location : 'location description'},
  { image : kindness , title : 'kindness', location : 'location description'},
  { image : optimist ,  title : 'optomist', location : 'location description'}

]

const Gallery = props => {
  return imageArray.map((image, index) => {
    console.log(image)
    return (
      <div className={styles.card} key={index}>
        <img className="card-img-top" src={image.image} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{image.title}</h5>
          <p className="card-text">{image.location}</p>
          <a href="./" className="btn btn-primary">
            Enlarge
          </a>
        </div>
      </div>
    );
  });
};

export default Gallery;
