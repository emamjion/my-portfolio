import React from 'react';
import resume from '../../assets/images/Emam-Khalid-jion-resume.pdf';

const Data = () => {
    return (
        <div className='home_data'>
            <h1 className='home_title'>Emam Khalid Jion</h1>
            <h3 className='home_subtitle'>MERN stack Developer</h3>
            <p className='home_description'>
                I'm MERN Stack Developer. I'm very passionate and dedicated to my work.
            </p>
            <a href={resume} download='' className='button button--flex'>Download Resume</a>
        </div>
    );
};

export default Data;