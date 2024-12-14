import React from 'react';
import './Projects.css'; // Ensure the CSS file is properly linked

const projectsData = [
    {
        name: 'Portfolio',
        repoLink: 'https://github.com/ak-AYA/portfolio',
        description: 'HTML & CSS portfolio.'
    },
    {
        name: 'Movie Maze',
        repoLink: 'https://github.com/shadi-alnkhatin/Movies_Web_App',
        description: 'User-friendly website for exploring movies.'
    },
    {
        name: 'Waggy',
        repoLink: 'https://github.com/ak-AYA/waggy/tree/main',
        description: 'E-commerce project with a functional backend.'
    },
    {
        name: 'Admin Dashboard',
        repoLink: 'https://github.com/ak-AYA/MasterPiece',
        description: 'Admin dashboard with a functional database.'
    },
    {
        name: 'Go Movies',
        repoLink: 'https://github.com/ak-AYA/Movies-Project-React-LarvelApi',
        description: 'Movies website with back-end and front-end.'
    },
    {
        name: 'The Help',
        repoLink: 'https://github.com/ak-AYA/MasterPiece',
        description: 'Cleaning services website with an admin dashboard.'
    }
    
];

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="Projects-container">
            <h2 className="Projects-title">Projects</h2>
            </div>
            
            <div className="project-cards">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a className="repo-link" href={project.repoLink} target="_blank" rel="noopener noreferrer">
                            View
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
