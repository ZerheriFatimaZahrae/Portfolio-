// Certifications.jsx
import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
    const certifications = [
        {
            title: "Artificial Intelligence Technology and\n" +
                "Applications",
            issuer: "Huawei",
            date: "2024",
            link: "https://www.credly.com/badges/8ed00988-f211-4065-9acf-1f7ca59f1f45/public_url"
        },
        {
            title: "Programming in Java EE (AD183)",
            issuer: "Red Hat",
            date: "2024",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7235278421528920065/"
        },

        // Ajoutez d'autres certifications ici
    ];

    return (
        <section id="certifications" className="certifications-section">
            <div className="container">
                <h2 className="section-title">Certifications</h2>

                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-card">
                            <div className="cert-icon">
                                <FaCertificate />
                            </div>
                            <div className="cert-content">
                                <h3 className="cert-title">{cert.title}</h3>
                                <div className="cert-meta">
                                    <span className="issuer">{cert.issuer}</span>
                                    <span className="date">{cert.date}</span>
                                </div>
                                <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
                                    View Credential
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;