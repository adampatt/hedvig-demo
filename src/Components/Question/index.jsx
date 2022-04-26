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
	QuestionInnerTitleContent,
	AnswerInnerContainer,
} from "./QuestionStyles";
import { capitalize } from "../../utils";

function QuestionContainer() {
	const [question, setQuestion] = useState([]);
	const [clickedIndex, setClickedIndex] = useState(
		{}
	);

	useEffect(() => {
		const controller = new AbortController();
		fetch(
			"https://625e9bd83b039517f1f8f2ee.mockapi.io/hedvig-example/questions"
		)
			.then((response) => response.json())
			.then((data) => setQuestion(data));
		return () => controller.abort();
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
							<QuestionInnerTitleContent>
								<h2>{capitalize(q.title)}</h2>
								<h2>X</h2>
							</QuestionInnerTitleContent>

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
