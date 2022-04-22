import React, { useContext } from "react";
import OrderContext from "../formContext";

function Step3() {
	const {
		quizState,
		handlePrevStep,
		handleNextStep,
		handleChange,
	} = useContext(OrderContext);

	return (
		<>
			<div>step3</div>
			<button type="button" onClick={handlePrevStep}>
				Prev
			</button>
			<form onSubmit={handleNextStep}>
				<label htmlFor={quizState.carMake}>
					Car Make
					<input
						id={quizState.carMake}
						type="text"
						name="carMake"
						value={quizState.carMake}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor={quizState.carModel}>
					Car Model
					<input
						id={quizState.carModel}
						type="text"
						name="carModel"
						value={quizState.carModel}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor={quizState.carColor}>
					Car Color
					<input
						id={quizState.carColor}
						type="text"
						name="carColor"
						value={quizState.carColor}
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

export default Step3;
