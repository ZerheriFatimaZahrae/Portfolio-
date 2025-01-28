// ProjectsSection.jsx
import React from 'react';


const projectsSection = [
    {
        title: "PFA Internship | Fullstack Development of a 3D Application, 3D Smart Factory",
        description: "Development of a web application using React for uploading and visualizing 3D files (via VTK.js), deployed on Vercel.",
        techStack: ["React", "PyTorch", "Vercel", "VTK.js","MeshSegNet model", "vedo"],
        date: "07/2024 – 09/2024",
        duration: "3 months",
        location: "Mohammedia",
        type: "work",
        images: [ // Changé de 'image' à 'images'
            "/images/img_1.png",
            "/images/img_2.png",
            "/images/img_4.png",
            "/images/img.png"
        ]
    },
    {
        title: "PFE Internship | Fullstack Development of an Inheritance Management Platform, AbiSoft",
        description: "Web application dedicated to managing inheritance and succession processes using Java Spring Boot (back-end) and Angular (front-end).",
        techStack: ["Spring Boot", "Angular", "OAuth2", "UML", "Bootstrap", "Material-UI"],
        date: "04/2023 – 06/2023",
        duration: "2 months",
        location: "Fes",
        type: "work",
        images: [ // Changé de 'image' à 'images'
            "/images/img-pfe-4.png",
            "/images/img-pfe-3.png",
            "/images/img-pfe2.png",
            "/images/img-pfe-5.png",
            "/images/img-pfe-1.png",
            "/images/img-pfe.png",

        ]
    },
    {
        title: "E-commerce Application with Microservices (Fullstack)",
        description: "Design and implementation of an e-commerce application based on a microservices architecture, integrating independent services for managing users, products, and orders.",
        techStack: ["Spring Boot", "Spring Cloud", "Angular", "Eureka Server", "Material-UI", "OAuth2", "OpenID Connect", "Keycloak"],
        date: "11/2024",
        type: "academic",
        images: [ // Changé de 'image' à 'images'

            "/images/img_8.png",
            "/images/img_5.png",
            "/images/img_7.png",
            "/images/img_6.png",
        ]
    },
    {
        title: "Real-time Data Stream Analysis and Processing",
        description: "Creation of real-time pipelines for analyzing and processing massive data streams.",
        techStack: ["Apache Spark", "Kafka", "Kafka Streams", "Docker"],
        date: "10/2024",
        type: "academic",
        images: [ // Changé de 'image' à 'images'
            "/images/img_9.png",
            "/images/img_10.png",
            "/images/img_11.png",
        ]
    },
    {
        title: "Academic Management Application (Fullstack)",
        description: "Design of a web application for managing students, professors, and payments, using Spring Boot (back-end) and Angular (front-end).",
        techStack: ["Spring Boot", "Angular", "Angular Material", "Keycloak", "MySQL"],
        date: "Academic Project",
        type: "academic",
        images: [ // Changé de 'image' à 'images'
            "/images/img_12.png",
            "/images/img_13.png",
            "/images/img_14.png",
            "/images/img_15.png",
        ]
    },
    {
        title: "Article Recommendation System with BiLSTM and BERT",
        description: "Development of a recommendation system using BiLSTM for sequence modeling and BERT for semantic analysis to provide accurate and personalized suggestions.",
        techStack: ["Python", "TensorFlow", "PyTorch", "Hugging Face Transformers", "Flask","BILSTM", "Scikit-learn"],
        date: "12/2024",
        type: "datascience",
        images: [
            "/images/img_16.png",
            "/images/img_17.png",
            "/images/img_18.png",
            "/images/img_19.png",

        ]
    },
    {
        title: "Mental Health Chatbot with LLMs",
        description: "Development of a virtual assistant based on LLMs for sentiment analysis and relevant response generation.",
        techStack: ["BERT",  "LLMs (LLama 2.0)", "Python", "TensorFlow", "PyTorch"],
        date: "10/2024",
        type: "datascience",
        images: [
            "/images/img_20.png",
            "/images/img_21.png",
            "/images/img_22.png",
            "/images/img_23.png",

        ]
    },
    {
        title: "Colon Cancer Detection from Medical Images",
        description: "Development of a web application for colon cancer detection using medical images with optimized CNN model and interactive UI.",
        techStack: ["Flask API", "Streamlit", "CNN", "Transfer Learning (EfficientNet)"],
        date: "03/2024",
        type: "datascience",
        images: [
            "/images/img_26.png",
            "/images/img_27.png",
            "/images/img_25.png",
            "/images/img_24.png",

        ]

    }
];


const ProjectCard = ({ title, description, images, techStack, date, duration, location }) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    return (
        <div className="project-card">
            <div className="project-image-container">
                <img
                    src={images[currentImageIndex]}
                    alt={`${title} - Image ${currentImageIndex + 1}`}
                    className="project-image"
                />

                {images.length > 1 && (
                    <div className="image-navigation">
                        <button
                            onClick={handlePrev}
                            className="nav-button prev-button"
                            aria-label="Previous image"
                        >
                            &lt;
                        </button>
                        <button
                            onClick={handleNext}
                            className="nav-button next-button"
                            aria-label="Next image"
                        >
                            &gt;
                        </button>
                    </div>
                )}
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>

                <div className="project-meta">
                    {date && <span className="meta-item">📅 {date}</span>}
                    {duration && <span className="meta-item">⏳ {duration}</span>}
                    {location && <span className="meta-item">📍 {location}</span>}
                </div>

                <p className="project-description">{description}</p>

                <div className="tech-stack">
                    {techStack.map((tech, index) => (
                        <span key={index} className="tech-pill">{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProjectsSection = () => {
    return (
        <section  id="ProjectsSection" className="projects-section">
            <h2 className="section-title">Experiences</h2>
            <div className="projects-grid">
                {projectsSection.filter(p => p.type === 'work').map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

            <h2 className="section-title" style={{marginTop: '4rem'}}>Academic projects </h2>
            <div className="projects-grid">
                {projectsSection.filter(p => p.type === 'academic').map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <h2 className="section-title" style={{marginTop: '4rem'}}>Data Science Projects</h2>
            <div className="projects-grid">
                {projectsSection.filter(p => p.type === 'datascience').map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;