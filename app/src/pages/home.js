import React from "react";
import scrollLogo from "./images/scroll.svg";

const Home = () => {
	return (
        <div id="home">
            <h1>How Did You Find Here?</h1>
            <div className="navigate"><img className="icon" alt="Scroll down" src={scrollLogo}></img></div>
        </div>
		
	);
};

export default Home;
