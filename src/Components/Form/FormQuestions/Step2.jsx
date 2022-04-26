import React, { useContext } from "react";
import FormContext from "../formContext";
import FormInput from "../FormInput";
import { FormContainer } from "./FormStyles";
import { DetailsContainer } from "../../../Styles/ContainerStyles";
import { TwentyPercent } from "../../../constants";
import { OutlinedButton } from "../../Button";

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
		<FormContainer onSubmit={handleNextStep}>
			<DetailsContainer
				height={TwentyPercent}
				justifyContent="center"
			>
				<h1>Insurance Type</h1>
			</DetailsContainer>

			{step2Names.map((question) => (
				<DetailsContainer height={TwentyPercent}>
					<FormInput
						name={question}
						handleChange={handleChange}
					/>
				</DetailsContainer>
			))}
			<DetailsContainer
				height={TwentyPercent}
				justifyContent="space-evenly"
			>
				<OutlinedButton
					type="button"
					onClick={handlePrevStep}
				>
					Prev
				</OutlinedButton>
				<OutlinedButton
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

export default Step2;
