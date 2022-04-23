import React, { useContext } from "react";
import FormContext from "../formContext";
import FormInput from "../FormInput";

function Step3() {
	const {
		quizState,
		handlePrevStep,
		handleChange,
		handleSubmit,
	} = useContext(FormContext);

	const step3Names = Object.keys(quizState).slice(
		5,
		8
	);
	return (
		<>
			<div>step3</div>
			<button type="button" onClick={handlePrevStep}>
				Prev
			</button>
			<form onSubmit={handleSubmit}>
				{step3Names.map((question) => (
					<FormInput
						name={question}
						handleChange={handleChange}
					/>
				))}
				<button type="submit" name="submit">
					Submit
				</button>
			</form>
		</>
	);
}

export default Step3;
