import React, { useContext } from "react";
import FormContext from "../formContext";
import FormInput from "../FormInput";

function Step2() {
	const {
		quizState,
		handlePrevStep,
		handleNextStep,
		handleChange,
	} = useContext(FormContext);

	const step2Names = Object.keys(quizState).slice(
		3,
		5
	);
	return (
		<>
			<div>step2</div>
			<button type="button" onClick={handlePrevStep}>
				Prev
			</button>
			<form onSubmit={handleNextStep}>
				{step2Names.map((question) => (
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

export default Step2;
