import React from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import {
	SectionContainer,
	LargeContainer,
	HalfWidthContainer,
} from "../../../Styles/ContainerStyles";
import {
	FurtherInfoContainer,
	FurtherInfoText,
	FurtherInfoImage,
	ImageContainer,
	FurtherInfoContent,
} from "./FurtherInfoStyles";

function FurtherInfoSection({ data }) {
	const displayData = data[0].furtherInfo;
	return (
		<SectionContainer>
			<LargeContainer>
				<FurtherInfoContainer>
					{displayData.map((d, index) => (
						<FurtherInfoContent
							rowDirection={index % 2 === 0}
						>
							<HalfWidthContainer>
								<FurtherInfoText>
									<h2>{d.heading}</h2>
									<p>{d.text}</p>
								</FurtherInfoText>
							</HalfWidthContainer>
							<HalfWidthContainer>
								<ImageContainer>
									<LazyLoad
										height={200}
										offset={100}
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<FurtherInfoImage
											src={d.img}
											alt={d.alt}
										/>
									</LazyLoad>
								</ImageContainer>
							</HalfWidthContainer>
						</FurtherInfoContent>
					))}
				</FurtherInfoContainer>
			</LargeContainer>
		</SectionContainer>
	);
}

FurtherInfoSection.propTypes = {
	data: PropTypes.arrayOf().isRequired,
};

export default FurtherInfoSection;
