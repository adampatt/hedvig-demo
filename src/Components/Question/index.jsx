import React, {
	useEffect,
	useState,
} from "react";

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
		<>
			<div>
				<h2>common questions and answers</h2>
			</div>
			<div className="questionContentContainer">
				{question.map((q, index) => (
					<div key={q.id}>
						<div
							className="questionContainer"
							key={q.id}
							onClick={handleClick(index)}
							onKeyDown={handleClick(index)}
							role="button"
							tabIndex={index}
						>
							<h1>{q.title}</h1>
							<hr />
						</div>
						{clickedIndex[index] ? (
							<div className="answerContainer">
								<p>{q.answer}</p>
							</div>
						) : null}
					</div>
				))}
			</div>
		</>
	);
}

export default QuestionContainer;
