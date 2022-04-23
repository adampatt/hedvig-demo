import React, { useContext } from "react";
import FormContext from "../formContext";
import FormInput from "../FormInput";

function Step1() {
	const {
		quizState,
		handleNextStep,
		handleChange,
	} = useContext(FormContext);

	const step1Names = Object.keys(quizState).slice(
		0,
		3
	);

	return (
		<>
			<div>step1</div>
			<form onSubmit={handleNextStep}>
				{step1Names.map((question) => (
					<FormInput
						name={question}
						handleChange={handleChange}
					/>
				))}
				<button type="submit" name="submit">
					Next
				</button>
			</form>
		</>
	);
}

export default Step1;
