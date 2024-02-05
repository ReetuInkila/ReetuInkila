import React from 'react';

function SkillsComponent({ skills }: { skills: string[] }) {
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
}

export default SkillsComponent;