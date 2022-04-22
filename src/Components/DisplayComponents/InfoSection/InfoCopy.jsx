import React from "react";
import PropTypes from "prop-types";
import { InfoCopyContainer } from "./InfoSectionStyles";

function InfoCopy({ data }) {
	return (
		<>
			{data.map((d) => (
				<InfoCopyContainer key={d.id}>
					<h4>{d.heading}</h4>
					<p>{d.text}</p>
				</InfoCopyContainer>
			))}
		</>
	);
}

InfoCopy.propTypes = {
	data: PropTypes.instanceOf(Array).isRequired,
};

export default InfoCopy;
