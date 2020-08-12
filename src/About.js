import React, {useState} from 'react';
import {Link} from "react-router-dom";

const About = () => {
    const getClassName = () => 'About';

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <div className={getClassName().toLowerCase()}>
                <h1>This is About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam, at beatae doloremque
                    eos
                    fuga fugit impedit labore magni nihil obcaecati provident quaerat quasi quisquam reiciendis rerum
                    saepe
                    suscipit, voluptate!45</p>
            </div>
        </>
    );
}

export default About;
