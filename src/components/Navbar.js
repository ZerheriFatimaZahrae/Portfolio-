import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
                <li><Link to="ProjectsSection" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="certifications" smooth={true} duration={500}>Certifications</Link></li>
                <li><Link to="contacts" smooth={true} duration={500}>Contact</Link></li>

            </ul>

            <div className="nav-links">
                <p className="navbar-name">Fatima zahrae ZERHERI</p>
            </div>
        </nav>
    );
};

export default Navbar;