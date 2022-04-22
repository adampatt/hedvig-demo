import React, {
	useState,
	useEffect,
} from "react";
import Step1 from "./FormQuestions/Step1";
import Step2 from "./FormQuestions/Step2";
import Step3 from "./FormQuestions/Step3";
import OrderContext from "./formContext";
import MultiStepForm from "./FormQuestions/MultiStepForm";

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
		<OrderContext.Provider
			value={{
				quizState,
				currentStep,
				handleNextStep,
				handlePrevStep,
				formSteps,
				handleChange,
			}}
		>
			<MultiStepForm />
		</OrderContext.Provider>
	);
}

export default QuizContainer;
