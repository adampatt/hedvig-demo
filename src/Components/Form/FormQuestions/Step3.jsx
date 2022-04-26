import React, { useContext } from "react";
import FormContext from "../formContext";
import FormInput from "../FormInput";
import { FormContainer } from "./FormStyles";
import { DetailsContainer } from "../../../Styles/ContainerStyles";
import { TwentyPercent } from "../../../constants";
import { OutlinedButton } from "../../Button";

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
		<FormContainer onSubmit={handleSubmit}>
			<DetailsContainer
				height={TwentyPercent}
				justifyContent="center"
			>
				<h1>Car details</h1>
			</DetailsContainer>

			{step3Names.map((question) => (
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
					onClick={handleSubmit}
				>
					Submit
				</OutlinedButton>
			</DetailsContainer>
		</FormContainer>
	);
}

export default Step3;
