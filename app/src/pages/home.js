import React from "react";
import scrollLogo from "./images/scroll.svg";

const Home = () => {
	return (
        <div id="home">
            <h1>How Did You Find Here?</h1>
            <a href="#about" ><img className="icon" alt="" src={scrollLogo}></img></a>
        </div>
		
	);
};

export default Home;
