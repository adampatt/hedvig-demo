import styled from "@emotion/styled";

export const QuestionContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const QuestionInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 1em;
	&:hover {
		cursor: pointer;
	}
`;

export const AnswerInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1em 0 1em 0;
`;
