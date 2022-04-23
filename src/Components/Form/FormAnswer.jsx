import React, { useContext } from "react";
import FormContext from "./formContext";
import {
	SectionContainer,
	HalfWidthContainer,
} from "../../Styles/ContainerStyles";

function FormAnswer() {
	const { currentStep, quizState, wasSubmitted } =
		useContext(FormContext);

	const step2Answers = Object.keys(
		quizState
	).slice(0, 3);

	const step3Answers = Object.keys(
		quizState
	).slice(0, 5);

	const allAnswers = Object.keys(quizState);

	const formAnswerDisplay = () => {
		switch (currentStep) {
			case 0:
				return null;
			case 1:
				return step2Answers.map((name) => (
					<p>Answer {quizState[name]}</p>
				));
			case 2:
				return step3Answers.map((name) => (
					<p>Answer {quizState[name]}</p>
				));
			default:
				return null;
		}
	};
	return (
		<SectionContainer>
			<HalfWidthContainer>
				<div>FormAnswer</div>
				<p>{formAnswerDisplay(currentStep)}</p>
				{wasSubmitted
					? allAnswers.map((name) => (
							<p>{quizState[name]}</p>
					  ))
					: null}
			</HalfWidthContainer>
		</SectionContainer>
	);
}

export default FormAnswer;
