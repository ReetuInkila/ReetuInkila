import React from "react";
import LinkComponent from '../components/LinkComponent';
import linkedinLogo from "./logos/linkedin_icon.svg";
import githubLogo from "./logos/github_icon_white.svg";
import stravaLogo from "./logos/strava_icon.svg";

const Links = () => {
	return (
		<div id="contact">
            <p>
                Curious about how I spend my free time? Take a sneak peek into my latest
                run <a href="https://syke.inkilareetu.fi/">here</a>. If you're feeling a bit more
                adventurous, you can indulge in some "temperature espionage" and check out the
                current climate in our home <a href="http://reetuinkila.eu.pythonanywhere.com/">here</a>.
            </p>
            <p>
                I'm always looking for new challenges and especially 
                now I'm looking for a job where I can continue learning 
                to become a full-stack professional!
            </p>
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
	);
};

export default Links;
