import React from 'react';

const Reading = () => {

    return(
        <div>
            <h1>Reading</h1>
            <p>I love to read, whether escaping into a modern or classic fictional story, or learning 
                about somebody's life from their personal experiences. Below are a few of the books 
                I have enjoyed reading.</p>
            <div className="list">
                <h2>Classics</h2>
                <ul>
                    <li>Robinson Crusoe</li>
                    <li>The Lost World</li>
                    <li>Dracula</li>
                    <li>White Fang</li>
                    <li>Oliver Twist</li>
                </ul>
            </div>
            <div className="list">
                <h2>Action / Thriller</h2>
                <ul>
                    <li>The Cobra</li>
                    <li>The Hunt for Red October</li>
                    <li>Do Androids Dream of Electric Sheep?</li>
                    <li>The Da Vinci Code</li>
                    <li>The Day of the Jackal</li>
                </ul>
            </div>
            <div className="list">
                <h2>Biographies</h2>
                <ul>
                    <li>Nelson Mandela</li>
                    <li>Brian Moore</li>
                    <li>Magaret Thatcher</li>
                    <li>Clive Woodward</li>
                    <li>Muhammad Ali</li>
                </ul>
            </div>
        </div>
        
    );
};

export default Reading;