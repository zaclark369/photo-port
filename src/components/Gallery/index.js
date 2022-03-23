import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg';

function Gallery() {
    const currentCategory = {
        name: "commercial",
        description: "Photos of grocery stores, food trucks, and other commercial projects",
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{capitalizeFirstLetter(currentCategory.description)}</p>
            <div>
                <img src={photo} alt="Commercial Example" className="img-thumnail mx-1"/>
            </div>
        </section>
    );
}

export default Gallery;