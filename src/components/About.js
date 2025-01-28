import React from 'react';
import aboutImage from '../assets/about-img.jpg'; // Adjust the image path

const About = () => {
    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        I'm a hybrid technologist with dual expertise in Data Science and Fullstack Java Development.
                        With a strong foundation in machine learning pipelines and data engineering, I build intelligent
                        systems that leverage big data insights. Simultaneously, I architect robust enterprise applications
                        using Java ecosystem technologies, ensuring seamless integration between data-driven backends
                        and responsive frontend interfaces.
                    </p>
                    <div className="skills-list">
                        <h3>Technical Arsenal:</h3>
                        <ul>
                            <li>📊 Data Science: Python, Pandas, TensorFlow, SQL, Big Data Processing</li>
                            <li>☕ Java Fullstack: Spring Boot, Hibernate, Microservices, REST APIs</li>
                            <li>🖥️ Frontend: React,Angular , JavaScript, HTML5/CSS3</li>
                            <li>🛠️ DevOps: Docker, Git/GitHub</li>
                        </ul>
                    </div>
                </div>
                <img
                    src={aboutImage}
                    alt="About Me Visual"
                    className="about-image"
                />
            </div>
        </section>
    );
};

export default About;