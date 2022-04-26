import React from "react";
import PropTypes from "prop-types";
import {
	FormInputContainer,
	FormLabel,
	FormInputHolder,
} from "./FormQuestions/FormStyles";
import { capitalize } from "../../utils";

function FormInput({ name, handleChange }) {
	return (
		<FormInputContainer key={name}>
			<FormLabel htmlFor={`${name}-input`}>
				<h3>{capitalize(name)}:</h3>
			</FormLabel>
			<FormInputHolder
				id={`quizState.${name}`}
				name={name}
				type="text"
				onChange={handleChange}
				required
			/>
		</FormInputContainer>
	);
}

FormInput.propTypes = {
	name: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
};

export default FormInput;
