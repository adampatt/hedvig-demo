/* eslint-disable react/prop-types */
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

FormInput.protoTypes = {
	name: PropTypes.string,
	handleChange: PropTypes.func,
};

export default FormInput;
