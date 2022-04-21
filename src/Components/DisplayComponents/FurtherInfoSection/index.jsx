import React from "react";
import PropTypes from "prop-types";

function FurtherInfoSection({ data }) {
	const displayData = data[0].furtherInfo;
	return (
		<section>
			<div className="furtherInfoContentContainer">
				{displayData.map((d) => (
					<>
						<h2>{d.heading}</h2>
						<p>{d.text}</p>
					</>
				))}
			</div>
			<div> IMAGE</div>
		</section>
	);
}

FurtherInfoSection.propTypes = {
	data: PropTypes.arrayOf().isRequired,
};

export default FurtherInfoSection;
