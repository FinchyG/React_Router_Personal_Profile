import React from 'react';

const Travel = () => {

    return(
        <div>
            <h1>Travel</h1>
            <p>I love to travel to and explore new places, whether in the UK or abroad. 
                Below are some pictures from my journeys with friends, family and colleagues.</p>
            <div className="image_block">
                <figure>
                    <img className="interests_image" src={require('../images/travel1.png')} />
                    <figcaption>At NASA's Houston Space Centre.</figcaption>
                </figure>
                <figure>
                    <img className="interests_image" src={require('../images/travel2.png')} />
                    <figcaption>Exploring the streets of Budapest.</figcaption>
                </figure>
                <figure>
                    <img className="interests_image" src={require('../images/travel3.png')} />
                    <figcaption>Boating around Venice.</figcaption>
                </figure>
            </div>
        </div>
    );
};

export default Travel;