import React from "react";
import styles from "./Gallery.module.css";

const Gallery = props => {
  return props.gallery.map((item, index) => {
    return (
      <div className={styles.card} >
        <img className="card-img-top" src=".../100px180/" alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">Location Description</p>
          <a href="./" className="btn btn-primary">
            Enlarge
          </a>
        </div>
      </div>
    );
  });
};

export default Gallery;
