import React from "react";
import PropTypes from "prop-types";

function FormInput({ name, handleChange }) {
	return (
		<div key={name}>
			<label htmlFor={`${name}-input`}>
				{name}:
			</label>
			<input
				id={`quizState.${name}`}
				name={name}
				type="text"
				onChange={handleChange}
				required
			/>
		</div>
	);
}

FormInput.propTypes = {
	name: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
};

export default FormInput;
