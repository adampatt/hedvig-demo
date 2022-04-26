import styled from "@emotion/styled";

export const QuestionContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`;

export const QuestionInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 1em;
	width: 100%;
	justify-content: center;
	align-items: center;
	&:hover {
		cursor: pointer;
	}
	hr {
		width: 100%;
	}
`;

export const QuestionInnerTitleContent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	margin: 1em 1em 1em 1em;
`;

export const AnswerInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1em 0 1em 0;
	align-items: center;
`;
