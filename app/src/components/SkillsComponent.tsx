import React from 'react';

/**
 * React component for rendering a list of skills with randomly assigned colors.
 * @param {string[]} skills - An array of skills to be displayed.
 * @returns {JSX.Element} A React JSX element representing the skills list.
 */
const SkillsComponent: React.FC<{ skills: string[] }> = React.memo(function SkillsComponent({ skills }) {
  let colors: string[] = ['#59d4d2', '#e59560', '#f28ad3', '#7fed64'];

  return (
    <div id="skills">
      <hr />
      {skills.map((skill, index) => (
        <p key={index} style={{ color: colors[Math.floor(Math.random() * (colors.length))] }}>
          -{skill}-
        </p>
      ))}
    </div>
  );
});

export default SkillsComponent;
