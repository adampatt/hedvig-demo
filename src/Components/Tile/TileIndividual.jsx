import React from "react";
import PropTypes from "prop-types";

function TileIndividual({
	id,
	title,
	onClickHandler,
}) {
	return (
		<button
			type="button"
			onClick={onClickHandler}
			key={id}
		>
			<p>{id}</p>
			<p>{title}</p>
		</button>
	);
}

TileIndividual.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	onClickHandler: PropTypes.func.isRequired,
};
export default TileIndividual;
