/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
	useState,
	useEffect,
} from "react";
import Step1 from "./FormQuestions/Step1";
import Step2 from "./FormQuestions/Step2";
import Step3 from "./FormQuestions/Step3";
import FormContext from "./formContext";
import MultiStepForm from "./MultiStepForm";
import FormAnswer from "./FormAnswer";
import {
	SectionContainer,
	LargeContainer,
	HalfWidthContainer,
} from "../../Styles/ContainerStyles";
import Header from "../Header";
import Footer from "../Footer";

const initialQuizState = {
	firstName: "",
	occupation: "",
	age: "",
	insuranceType: "",
	cover: "",
	carMake: "",
	carModel: "",
	carColor: "",
};

function QuizContainer() {
	const [quizState, setQuizState] = useState(
		initialQuizState
	);
	const [currentStep, setCurrentStep] =
		useState(0);

	const [wasSubmitted, setWasSubmitted] =
		useState(false);

	const [displayHeader] = useState(true);
	useEffect(() => {
		const quizData = JSON.parse(
			localStorage.getItem("QuizState")
		);
		if (quizData) {
			setQuizState(quizData);
		}
	}, []);

	const handleChange = (e) => {
		setQuizState({
			...quizState,
			[e.target.name]: e.target.value,
		});
	};
	const handleNextStep = () => {
		setQuizState(quizState);
		localStorage.setItem(
			"QuizState",
			JSON.stringify(quizState)
		);
		setCurrentStep(currentStep + 1);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setQuizState(quizState);
		localStorage.setItem(
			"QuizState",
			JSON.stringify(quizState)
		);
		setCurrentStep(currentStep + 1);
		setWasSubmitted(true);
	};

	const handlePrevStep = () => {
		setQuizState(quizState);
		setCurrentStep(currentStep - 1);
	};

	const formSteps = [
		<Step1 />,
		<Step2 />,
		<Step3 />,
	];

	return (
		<>
			<FormContext.Provider
				value={{
					quizState,
					currentStep,
					handleChange,
					handleNextStep,
					handlePrevStep,
					formSteps,
					handleSubmit,
					wasSubmitted,
				}}
			>
				<Header displayHeader={displayHeader} />
				<SectionContainer>
					<LargeContainer>
						<HalfWidthContainer>
							<MultiStepForm />
						</HalfWidthContainer>
						<HalfWidthContainer>
							<FormAnswer />
						</HalfWidthContainer>
					</LargeContainer>
				</SectionContainer>
			</FormContext.Provider>
			<Footer />
		</>
	);
}

export default QuizContainer;
