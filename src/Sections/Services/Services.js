import React from 'react';
import './Services.css'; // Import the CSS file for styles

const Services = () => {
    return (
        <section className="services-section" id="services">
            <div className="services-container">
                <h2 className="services-title">My Services</h2>
                <div className="services-content">
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="fa-solid fa-paint-brush"></i>
                        </div>
                        <h3 className="service-name">Front-End Design</h3>
                        <p className="service-description">
                            Crafting visually stunning and user-friendly front-end designs using the latest web technologies.
                        </p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="fa-solid fa-code"></i>
                        </div>
                        <h3 className="service-name">Full-Stack Website Development</h3>
                        <p className="service-description">
                            Developing complete, functional websites with seamless integration of front-end and back-end systems.
                        </p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="fa-solid fa-file-lines"></i>
                        </div>
                        <h3 className="service-name">Landing Page Creation</h3>
                        <p className="service-description">
                            Designing and building high-conversion landing pages to meet your business goals effectively.
                        </p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="fa-solid fa-chart-line"></i>
                        </div>
                        <h3 className="service-name">Admin Dashboard Development</h3>
                        <p className="service-description">
                            Creating intuitive and feature-rich admin dashboards for efficient management and analysis.
                        </p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="fa-solid fa-mobile"></i>
                        </div>
                        <h3 className="service-name">Mobile-Friendly Design</h3>
                        <p className="service-description">
                            Ensuring your websites and applications are fully responsive and optimized for all devices.
                        </p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">
                            <i className="fa-solid fa-tools"></i>
                        </div>
                        <h3 className="service-name">Website Maintenance</h3>
                        <p className="service-description">
                            Providing ongoing support and maintenance to keep your website running smoothly and securely.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;