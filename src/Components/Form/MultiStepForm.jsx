import React, { useContext } from "react";
import FormContext from "./formContext";
// import { MultiStepFormContainer } from "./FormQuestions/FormStyles";
import { MediumContainer } from "../../Styles/ContainerStyles";

function MultiStepForm() {
	const { currentStep, formSteps } =
		useContext(FormContext);

	return (
		<MediumContainer>
			{formSteps[currentStep]}
		</MediumContainer>
	);
}

export default MultiStepForm;
