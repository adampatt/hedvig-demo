import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import { useNavigate } from "react-router-dom";
import InfoCopy from "./InfoCopy";
import {
	LargeContainer,
	HalfWidthContainer,
} from "../../../Styles/ContainerStyles";
import {
	InfoSectionTextContainer,
	ImageContainer,
} from "./InfoSectionStyles";
import { Button } from "../../Button";
import FadeInSection from "../../FadeInContainer";

function InfoSection({ data }) {
	const navigate = useNavigate();
	const infoDisplayData = data[0].infoData;
	const displayImage = data[0].infoImage;

	return (
		<FadeInSection>
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
						<Button
							onClick={() => {
								navigate(`/quote`);
							}}
							width="30"
						>
							Get a quote
						</Button>
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
		</FadeInSection>
	);
}

InfoSection.propTypes = {
	data: PropTypes.instanceOf(Array).isRequired,
};

export default InfoSection;
