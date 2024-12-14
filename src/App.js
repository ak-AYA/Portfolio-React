import React from 'react';
import "./App.css";
import Nav from './components/Navbar/Navbar';
import AboutMe from './Sections/About/About';
import Skills from './Sections/Skills/Skills';
import Services from './Sections/Services/Services';
import Projects from './Sections/Projects/Projects';
import Testimonials from './Sections/Testimonials/Testimonials';
import Contact from './Sections/Contact/Contact';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

const App = () => {
    return (
        <Router>
            {/* Add the wrapper div */}
            <div className="app-wrapper">
                <Nav />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<AboutMe />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
