import React from 'react';
import './Testimonials.css'; // Ensure the CSS file is properly linked

const Testimonials = () => {
    return (
        <section className="testimonials" id="testimonials">
            <span className="title">Testimonials</span>
            <div className="testimonials-box">
                <div className="wrapper">
                    <div className="testimonial-item">
                        <h2>Farah S.</h2>
                        <p>Director of a Non-Profit Organization</p>
                        <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p>"Thanks to Aya's expertise, we successfully revamped our website, making it more accessible and user-friendly."</p>
                    </div>
                    <div className="testimonial-item">
                        <h2>John D.</h2>
                        <p>CEO of Tech Innovations</p>
                        <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p>"The project was completed on time and exceeded our expectations. Highly recommend their services!"</p>
                    </div>
                    <div className="testimonial-item">
                        <h2>Alice L.</h2>
                        <p>Marketing Specialist</p>
                        <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p>"Amazing work! Our online presence has greatly improved, and we’ve seen a significant increase in leads."</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
