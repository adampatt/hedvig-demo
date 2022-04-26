import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
	SectionContainer,
	XlContainer,
} from "../../../Styles/ContainerStyles";
import {
	AboutSectionContainer,
	AboutDataContainer,
} from "./AboutStyles";
import { Button } from "../../Button";

function About({ data }) {
	const navigate = useNavigate();
	const backgroundImage = data[0].aboutImg;
	return (
		<SectionContainer noPadding>
			<XlContainer img={backgroundImage}>
				<AboutSectionContainer>
					{data.map((d) => (
						<AboutDataContainer key={d.id}>
							<h1>{d.aboutTitle}</h1>
							<p>{d.aboutCopy}</p>
							<Button
								onClick={() => {
									navigate(`/quote`);
								}}
							>
								Get a quote
							</Button>
						</AboutDataContainer>
					))}
				</AboutSectionContainer>
			</XlContainer>
		</SectionContainer>
	);
}

About.propTypes = {
	data: PropTypes.instanceOf(Array).isRequired,
};

export default About;
