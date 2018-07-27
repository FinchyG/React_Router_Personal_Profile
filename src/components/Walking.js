import React from 'react';

const Walking = () => {

    return(
        <div>
            <h1>Walking</h1>
            <p>Over the last few years I have walked the Pennine Way (a 268 long-distance route) in sections with 
                my dad. Below are some pictures from the scenic journey.</p>
            <div className="image_block">
                <figure>
                    <img className="interests_image" src={require('../images/walking1.png')} />
                    <figcaption>On Hadrian's Wall.</figcaption>
                </figure>
                <figure>
                    <img className="interests_image" src={require('../images/walking2.png')} />
                    <figcaption>River Tees waterfall.</figcaption>
                </figure>
                <figure>
                    <img className="interests_image" src={require('../images/walking3.png')} />
                    <figcaption>The glacial-carved Dufton Valley.</figcaption>
                </figure>
            </div>
        </div>
    );
};

export default Walking;