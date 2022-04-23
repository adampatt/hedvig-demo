/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import InfoCopy from "./InfoCopy";
import {
	SectionContainer,
	LargeContainer,
	HalfWidthContainer,
} from "../../../Styles/ContainerStyles";
import {
	InfoSectionTextContainer,
	ImageContainer,
} from "./InfoSectionStyles";

function InfoSection({ data }) {
	const infoDisplayData = data[0].infoData;
	const displayImage = data[0].infoImage;

	return (
		<SectionContainer>
			<LargeContainer>
				<HalfWidthContainer>
					<InfoSectionTextContainer>
						{data.map((d) => (
							<div key={d.id}>
								<h2>{d.infoTitle}</h2>
								<p>{d.infoBlurb}</p>
							</div>
						))}
						<InfoCopy data={infoDisplayData} />
						<button type="button">Get a quote</button>
					</InfoSectionTextContainer>
				</HalfWidthContainer>
				<HalfWidthContainer>
					<LazyLoad height={200} offset={100}>
						<ImageContainer>
							<img
								src={displayImage}
								alt="blue VW van from the front with stains on"
							/>
						</ImageContainer>
					</LazyLoad>
				</HalfWidthContainer>
			</LargeContainer>
		</SectionContainer>
	);
}

InfoSection.propTypes = {
	data: PropTypes.instanceOf(Array).isRequired,
};

export default InfoSection;
