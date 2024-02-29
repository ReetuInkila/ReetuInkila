// Filename - pages/about.js

import React from "react";
import SkillsComponent from '../components/SkillsComponent';


const About = () => {
    const [skills] = React.useState(['JavaScript', 'C++', 'Python', 'REST', 'Jupyter Notebook', 'Firebase', 'GCP', 'SQL', 'Node.js', 'Docker', 'Chart.js', 'CSS', 'TypeScript', 'HTML', 'Git', 'Java', 'React', 'Flask', 'Arduino', 'C#', 'Leafet']);

	return (
		<div id="about">
			<p>
                Greetings! I'm Reetu, a passionate physics student who's decided to take a leap into
                the world of software development. While my academic roots lie in the complexities of
                physics, my heart and curiosity have led me to the ever-evolving realm of software
                development.
            </p>
            <p>
                While I'm comfortable with several programming languages, the easiest way to get in
                touch with me is through the languages JavaScript, C#, and Python.
            </p>
            <SkillsComponent skills={skills} />
		</div>
	);
};

export default About;