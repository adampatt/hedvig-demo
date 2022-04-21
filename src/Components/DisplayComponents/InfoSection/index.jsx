import React from "react";
import PropTypes from "prop-types";
import InfoCopy from "./InfoCopy";

function InfoSection({ data }) {
	const infoDisplayData = data[0].infoData;
	return (
		<section>
			<div className="infoContentContainer">
				{data.map((d) => (
					<>
						<h2>{d.infoTitle}</h2>
						<p>{d.infoBlurb}</p>
					</>
				))}
				<InfoCopy data={infoDisplayData} />
				<button type="button">Get a quote</button>
			</div>
		</section>
	);
}

InfoSection.propTypes = {
	data: PropTypes.arrayOf().isRequired,
};

export default InfoSection;
