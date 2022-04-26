import React, { useContext } from "react";
import FormContext from "../formContext";
import FormInput from "../FormInput";
import { FormContainer } from "./FormStyles";
import { DetailsContainer } from "../../../Styles/ContainerStyles";
import { TwentyPercent } from "../../../constants";
import { OutlinedButton } from "../../Button";

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
		<FormContainer onSubmit={handleNextStep}>
			<DetailsContainer
				height={TwentyPercent}
				justifyContent="center"
			>
				<h1>Personal Details</h1>
			</DetailsContainer>
			{step1Names.map((question) => (
				<DetailsContainer
					height={TwentyPercent}
					key={question}
				>
					<FormInput
						name={question}
						handleChange={handleChange}
					/>
				</DetailsContainer>
			))}
			<DetailsContainer
				height={TwentyPercent}
				justifyContent="center"
			>
				<OutlinedButton
					primary
					type="submit"
					name="submit"
					onClick={handleNextStep}
				>
					Next
				</OutlinedButton>
			</DetailsContainer>
		</FormContainer>
	);
}

export default Step1;
