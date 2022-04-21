import React from "react";
import PropTypes from "prop-types";
import { TileButton } from "./TileStyles";

function TileIndividual({
	id,
	title,
	onClickHandler,
}) {
	return (
		<TileButton
			type="button"
			onClick={onClickHandler}
			key={id}
		>
			<p>{id}</p>
			<p>{title}</p>
		</TileButton>
	);
}

TileIndividual.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	onClickHandler: PropTypes.func.isRequired,
};
export default TileIndividual;
