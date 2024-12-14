import React from 'react';
import './Contact.css'; // Ensure the CSS file is properly linked

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-header">
                <h2 className="contact-title">Contact Me</h2>
                <div className="contact-info">
                    <div className="contact-topic">Have a project in mind?</div>
                    <div>Let's work together.</div>
                    <p>I'm open to discussing new projects, creative ideas, and collaborations. Feel free to reach out to me, and let's bring your vision to life!</p>
                </div>
            </div>
            <div className="contact-form">
                <form action="/submit" method="post">
                    <div className="form-group">
                        <input type="text" placeholder="Full Name" name="name" required />
                        <input type="email" placeholder="Email" name="email" required />
                        <input type="tel" placeholder="Phone Number" name="phone" required />
                        <input type="text" placeholder="Subject" name="subject" required />
                        <textarea placeholder="Your Message" name="message" rows="8" required></textarea>
                    </div>
                    <button className="submit-btn" type="submit">Send a Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
