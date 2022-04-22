import React, { useContext } from "react";
import OrderContext from "../formContext";

function MultiStepForm() {
	const { currentStep, formSteps } =
		useContext(OrderContext);

	return (
		<>
			<div>MultiStepForm</div>
			{formSteps[currentStep]}
		</>
	);
}

export default MultiStepForm;
