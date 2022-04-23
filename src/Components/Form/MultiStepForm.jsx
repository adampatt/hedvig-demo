import React, { useContext } from "react";
import FormContext from "./formContext";
import {
	SectionContainer,
	HalfWidthContainer,
} from "../../Styles/ContainerStyles";

function MultiStepForm() {
	const { currentStep, formSteps } =
		useContext(FormContext);

	return (
		<SectionContainer>
			<HalfWidthContainer>
				<div>Get a Quote</div>
				{formSteps[currentStep]}
			</HalfWidthContainer>
		</SectionContainer>
	);
}

export default MultiStepForm;
