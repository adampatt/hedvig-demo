import React from "react";
import PropTypes from "prop-types";

function About({ data }) {
	return (
		<section className="aboutContainer">
			<div className="headerContentContainer">
				{data.map((d) => (
					<>
						<h1>{d.aboutTitle}</h1>
						<p>{d.aboutCopy}</p>
						<button type="button">Get a quote</button>
					</>
				))}
			</div>
		</section>
	);
}

About.propTypes = {
	data: PropTypes.arrayOf().isRequired,
};

export default About;
