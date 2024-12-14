import React, { useEffect, useState } from 'react';
import './Skills.css';

// Import images
import htmlIcon from '../../assets/images/html.png';
import cssIcon from '../../assets/images/css.png';
import photoshopIcon from '../../assets/images/ps.png';
import reactIcon from '../../assets/images/react.png';
import laravelIcon from '../../assets/images/laravel.png';
import phpIcon from '../../assets/images/php.png';
import mysqlIcon from '../../assets/images/myadmin.png';
import githubIcon from '../../assets/images/git.png';

const Skills = () => {
    // List of skill images
    const skills = [
        { src: htmlIcon },
        { src: cssIcon },
        { src: photoshopIcon },
        { src: reactIcon },
        { src: laravelIcon },
        { src: phpIcon },
        { src: mysqlIcon },
        { src: githubIcon }
    ];

    const [shuffledSkills, setShuffledSkills] = useState([]);

    // Shuffle the skills list when the component is mounted
    useEffect(() => {
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        setShuffledSkills(shuffleArray([...skills]));
    }, []);

    return (
        <div className="skills-section" id="skills">
            <div className="skills-container">
                <h2 className="skills-title">My Skills</h2>
                <p className="skills-description">
                    I possess a solid foundation in HTML and CSS, allowing me to create visually appealing and responsive web designs. Proficiency in Photoshop enhances my ability to craft stunning graphics and user interfaces. I also have experience with both front-end and back-end development, along with version control tools.
                </p>
                <div className="skills-list">
                    {shuffledSkills.map((skill, index) => (
                        <img
                            key={index}
                            src={skill.src}
                            alt={`Skill ${index + 1}`}
                            className="skill-icon"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
