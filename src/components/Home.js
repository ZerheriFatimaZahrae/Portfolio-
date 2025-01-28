import React from 'react';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import profileImage from '../assets/my-img.jpg'; // Import de l'image
import cvPdf from '../assets/Zerheri-Fatima-zahrae-Resume.pdf';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <div className="text-content">
                    <h3>Hi There!</h3>
                    <h1>Fatima Zahrae Zerheri</h1>
                    <h2>
                        <Typewriter
                            options={{
                                strings: [" FullStack Developer"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <a href={cvPdf} download="Fatima_Zahrae_Zerheri_CV.pdf" className="btn">
                        Download CV
                    </a>
                </div>
                <div className="image-container">
                    <img
                        src={profileImage}
                        alt="Fatima Zahrae Zerheri"
                        className="profile-img"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
