import React from 'react';
import './App.css';
import LinkComponent from './LinkComponent';
import linkedinLogo from "./logos/linkedin_icon.svg";
import githubLogo from "./logos/github_icon_white.svg";
import stravaLogo from "./logos/strava_icon.svg";

function App() {
  return (
    <div className="App">
      <h1>How Did You Find Here?</h1>
      <div className='container'>
        <div id='text'>
          <p>
            Greetings! I'm Reetu, a passionate physics student who's decided to take a leap into 
            the world of software development. While my academic roots lie in the complexities of 
            physics, my heart and curiosity have led me to the ever-evolving realm of web 
            development.
          </p>
          <p>
            While I'm comfortable with several programming languages, the easiest way to get in 
            touch with me is through the languages JavaScript, C#, and Python.
          </p>
          <p>
            Curious about how I spend my free time? Take a sneak peek into my latest 
            run <a href="https://syke.inkilareetu.fi/">here</a>. If you're feeling a bit more 
            adventurous, you can indulge in some "temperature espionage" and check out the 
            current climate in our home <a href="http://reetuinkila.eu.pythonanywhere.com/">here</a>.
          </p>
        </div>
        <div id="links">
          <LinkComponent
            url="https://www.linkedin.com/in/reetuinkila/"
            iconPath={linkedinLogo}
          />
          <LinkComponent
            url="https://github.com/ReetuInkila"
            iconPath={githubLogo}
          />
          <LinkComponent
            url="https://www.strava.com/athletes/40032012"
            iconPath={stravaLogo}
          />
        </div>
      </div>
      
      <p id="skills">
      <hr/>
        JavaScript | C++ | Python | Jupyter Notebook | Firebase | GCP | SQL | Docker | Chart.js | CSS | TypeScript | HTML | Git | Java | React | Flask | Arduino | C# | Leafet
      </p>
    </div>
  );
}

export default App;
