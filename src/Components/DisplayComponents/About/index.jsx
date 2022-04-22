import React from "react";
import PropTypes from "prop-types";
import {
	SectionContainer,
	XlContainer,
} from "../../../Styles/ContainerStyles";
import {
	AboutSectionContainer,
	AboutDataContainer,
} from "./AboutStyles";

function About({ data }) {
	const backgroundImage = data[0].aboutImg;
	return (
		<SectionContainer>
			<XlContainer img={backgroundImage}>
				<AboutSectionContainer>
					{data.map((d) => (
						<AboutDataContainer>
							<h1>{d.aboutTitle}</h1>
							<p>{d.aboutCopy}</p>
							<button type="button">Get a quote</button>
						</AboutDataContainer>
					))}
				</AboutSectionContainer>
			</XlContainer>
		</SectionContainer>
	);
}

About.propTypes = {
	data: PropTypes.arrayOf().isRequired,
};

export default About;
