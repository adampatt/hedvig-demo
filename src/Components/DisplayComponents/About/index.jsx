import React from "react";
import PropTypes from "prop-types";
import {
	SectionContainer,
	XlContainer,
} from "../../../Styles/ContainerStyles";

function About({ data }) {
	return (
		<SectionContainer>
			<XlContainer img="../../../Assets/wide1.jpg">
				{data.map((d) => (
					<>
						<h1>{d.aboutTitle}</h1>
						<p>{d.aboutCopy}</p>
						<button type="button">Get a quote</button>
					</>
				))}
			</XlContainer>
		</SectionContainer>
	);
}

About.propTypes = {
	data: PropTypes.arrayOf().isRequired,
};

export default About;
