import React, { useContext } from "react";
import OrderContext from "../formContext";

function Step2() {
	const {
		quizState,
		handlePrevStep,
		handleNextStep,
		handleChange,
	} = useContext(OrderContext);

	return (
		<>
			<div>step2</div>
			<button type="button" onClick={handlePrevStep}>
				Prev
			</button>
			<form onSubmit={handleNextStep}>
				<label htmlFor={quizState.insuranceType}>
					Insurance Type
					<input
						id={quizState.insuranceType}
						type="text"
						name="insuranceType"
						value={quizState.insuranceType}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor={quizState.cover}>
					Cover type
					<input
						id={quizState.cover}
						type="text"
						name="cover"
						value={quizState.cover}
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

export default Step2;
