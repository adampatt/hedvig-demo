import React from "react";
import PropTypes from "prop-types";

function InfoCopy({ data }) {
	return (
		<>
			{data.map((d) => (
				<>
					<h3>{d.heading}</h3>
					<p>{d.text}</p>
				</>
			))}
		</>
	);
}

InfoCopy.propTypes = {
	data: PropTypes.arrayOf().isRequired,
};

export default InfoCopy;
