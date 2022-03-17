import React from 'react';
import './Person.css'

const Person = () => {
    return (
        <div>
            <h1>This is my person component</h1>
            <nav className="menu">
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About us</a>
            </nav>
        </div>
    );
};

export default Person;