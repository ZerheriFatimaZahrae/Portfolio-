// src/components/Education.js
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    const educationData = [
        {
            year: '2023 - Present',
            title: 'Master\'s in Distributed Systems and Artificial Intelligence',
            institution: 'Higher Normal School of Technical Education Mohammedia ENSET-M',

        },
        {
            year: '2020 - 2023',
            title: 'Bachelor\'s in Computer Engineering',
            institution: 'Faculty of Science and Technology FST-F',

        },
        {
            year: '2019 - 2020',
            title: 'Baccalaureate in Mathematical Sciences B',
            institution: 'BENSOUDA High School, Fez',

        }
    ];

    return (
        <section id="education" className="education-section">
            <h2>Education</h2>
            <div className="timeline">
                {educationData.map((edu, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-marker">
                            <FaGraduationCap className="icon" />
                        </div>
                        <div className="timeline-content">
                            <span className="year">{edu.year}</span>
                            <h3 className="title">{edu.title}</h3>
                            <p className="institution">{edu.institution}</p>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;