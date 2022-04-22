import React, { useContext } from "react";
import OrderContext from "../formContext";

function Step1() {
	const {
		quizState,
		currentStep,
		handleNextStep,
		handleChange,
	} = useContext(OrderContext);

	return (
		<>
			<div>step1</div>
			<p>{currentStep}</p>
			<form onSubmit={handleNextStep}>
				<label htmlFor={quizState.firstName}>
					Name
					<input
						id={quizState.firstName}
						type="text"
						name="firstName"
						value={quizState.firstName}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor={quizState.occupation}>
					Occupation
					<input
						id={quizState.occupation}
						type="text"
						name="occupation"
						value={quizState.occupation}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor={quizState.age}>
					Age
					<input
						id={quizState.age}
						type="number"
						name="age"
						value={quizState.age}
						onChange={handleChange}
					/>
				</label>
				<button type="submit" name="submit">
					Submit
				</button>
			</form>
		</>
	);
}

export default Step1;
