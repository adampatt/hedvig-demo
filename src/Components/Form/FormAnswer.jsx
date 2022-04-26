import React, { useContext } from "react";
import FormContext from "./formContext";
import {
	// AnswerTile,
	FormAnswerContent,
} from "./FormQuestions/FormStyles";
import {
	MediumContainer1,
	DetailsContainer1,
	DetailsContainer,
} from "../../Styles/ContainerStyles";
import { ThirtyPercent } from "../../constants";
import { capitalize } from "../../utils";

function FormAnswer() {
	const { currentStep, quizState, wasSubmitted } =
		useContext(FormContext);

	const step2Answers = Object.keys(
		quizState
	).slice(0, 3);

	const step3Answers = Object.keys(
		quizState
	).slice(3, 5);

	const allAnswers = Object.keys(quizState);

	const formAnswerDisplay = () => {
		switch (currentStep) {
			case 0:
				return null;
			case 1:
				return (
					<DetailsContainer1 height={ThirtyPercent}>
						<FormAnswerContent>
							{step2Answers.map((name) => (
								<p>
									{capitalize(name)}: {quizState[name]}
								</p>
							))}
						</FormAnswerContent>
					</DetailsContainer1>
				);

			case 2:
				return (
					<>
						<DetailsContainer1 height={ThirtyPercent}>
							<FormAnswerContent>
								{step2Answers.map((name) => (
									<p>
										{capitalize(name)}:{quizState[name]}
									</p>
								))}
							</FormAnswerContent>
						</DetailsContainer1>
						<DetailsContainer1 height={ThirtyPercent}>
							<FormAnswerContent>
								{step3Answers.map((name) => (
									<p>
										{capitalize(name)}:{quizState[name]}
									</p>
								))}
							</FormAnswerContent>
						</DetailsContainer1>
					</>
				);
			default:
				return null;
		}
	};

	return (
		<MediumContainer1>
			{wasSubmitted ? (
				<>
					<h2>Your answers</h2>
					{allAnswers.map((name) => (
						<DetailsContainer>
							{name}: {quizState[name]}
						</DetailsContainer>
					))}
				</>
			) : null}
			{currentStep === 0
				? null
				: formAnswerDisplay(currentStep)}
		</MediumContainer1>
	);
}

export default FormAnswer;
