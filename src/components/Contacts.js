import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../assets/Contacts.css';

const Contact = () => {
    return (
        <section  id="contacts" className="contact-section">

            <div className="container">
                <h2 className="section-title">Contact Me!</h2>



                {/* Informations de contact */}
                <div className="contact-content">
                    <div className="contact-item">
                        <FaPhoneAlt className="icon" />
                        <a href="tel:+212602018753" className="contact-link">+212 602 01 87 53</a>
                    </div>

                    <div className="contact-item">
                        <FaEnvelope className="icon" />
                        <a href="mailto:fatimazahraezerheripc@gmail.com" className="contact-link">fatimazahraezerheripc@gmail.com</a>
                    </div>
                </div>
                {/* Icônes sociales en cercle */}

                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/fatima-zahrae-zerheri-26aa59298" target="_blank" rel="noopener noreferrer" className="social-circle">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="https://github.com/ZerheriFatimaZahrae" target="_blank" rel="noopener noreferrer" className="social-circle">
                        <FaGithub className="social-icon" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;