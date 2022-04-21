import React, {
	useEffect,
	useState,
} from "react";
import {
	SectionContainer,
	SmallContainer,
	SmallSectionTitle,
} from "../../Styles/ContainerStyles";
import {
	QuestionContentContainer,
	QuestionInnerContainer,
	AnswerInnerContainer,
} from "./QuestionStyles";

function QuestionContainer() {
	const [question, setQuestion] = useState([]);
	const [clickedIndex, setClickedIndex] = useState(
		{}
	);

	useEffect(() => {
		fetch(
			"https://625e9bd83b039517f1f8f2ee.mockapi.io/hedvig-example/questions"
		)
			.then((response) => response.json())
			.then((data) => setQuestion(data));
	}, []);

	const handleClick = (index) => () => {
		setClickedIndex((state) => ({
			...state,
			[index]: !state[index],
		}));
	};

	return (
		<SectionContainer>
			<SmallContainer>
				<SmallSectionTitle>
					<h2>Common questions and answers</h2>
				</SmallSectionTitle>
				<QuestionContentContainer>
					{question.map((q, index) => (
						<QuestionInnerContainer
							className="questionContainer"
							key={q.id}
							onClick={handleClick(index)}
							onKeyDown={handleClick(index)}
							role="button"
							tabIndex={index}
						>
							<h2>{q.title}</h2>
							<hr />
							{clickedIndex[index] ? (
								<AnswerInnerContainer>
									<p>{q.answer}</p>
								</AnswerInnerContainer>
							) : null}
						</QuestionInnerContainer>
					))}
				</QuestionContentContainer>
			</SmallContainer>
		</SectionContainer>
	);
}

export default QuestionContainer;
