import React from 'react';
import './About.css';
import aboutImg from '../../assets/images/about.jpg';
import resume from '../../assets/images/Emam-Khalid-jion-resume.pdf';
import Info from './Info';

const About = () => {
    return (
        <div className='about section' id='about'>
            <h2 className='section_title'>About Me</h2>
            <span className='section_subtitle'>My Introduction</span>
            <div className='about_container container grid'>
                <img src={aboutImg} className="about_img" />
                <div className='about_data'>
                    <Info/>
                    <p className='about-description'>
                        A MERN Stack Developer plays a crucial role in developing modern web applications and should be proficient in both front-end and back-end technologies.
                    </p>
                    <a download='' href={resume} className='button button_flex'>Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default About;