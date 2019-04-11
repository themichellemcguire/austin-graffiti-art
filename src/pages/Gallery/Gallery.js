import React from "react";
import styles from "./Gallery.module.css";

const Gallery = props => {
  return props.gallery.map((item, index) => {
    return (
      <div class={styles.card} >
        <img class="card-img-top" src=".../100px180/" alt="Card cap" />
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">Location Description</p>
          <a href="#" class="btn btn-primary">
            Enlarge
          </a>
        </div>
      </div>
    );
  });
};

export default Gallery;
