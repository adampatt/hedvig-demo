/* eslint-disable import/prefer-default-export */
import styled from "@emotion/styled";
// import { mq } from "../../../utils";

export const MultiStepFormContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
`;

export const FormContainer = styled.form`
	display: flex;
	height: 80vh;
	flex-direction: column;
	padding-top: 3em;
	margin-top: 3em;
	align-content: center;
	border-radius: 0.5em;
	h1 {
		align-self: center;
		padding-bottom: 1em;
	}
	background-color: rgb(239, 239, 239);
`;

export const FormInputContainer = styled.div`
	display: flex;
	padding: 1em 0 1em 0;
	width: 100%;
	align-items: center;
	justify-content: space-between;
`;

export const FormLabel = styled.label`
	padding: 3em 0em 3em 1em;
`;

export const FormInputHolder = styled.input`
	height: 1.5em;
	margin: 3em 1em 3em 1em;
	padding: 1.5em 0em 1.5em 0em;
	width: 50%;
	border-radius: 0.5em;
	border-style: none;
`;

export const AnswerTile = styled.div`
	/* width: 90%; */
	/* height: auto; */
	width: 60%;
	/* height: 90%; */
	padding: 1.25rem;
	border-radius: 0.375rem;
	background-color: #ffff;
	flex-direction: column;
	align-items: space-between;
	display: flex;
	padding: 0.5rem 1rem 0.5rem 0.375rem;
	/* min-height: 3.75rem; */
	/* cursor: pointer; */
	justify-content: space-between;
	/* &:hover {
		box-shadow: rgb(0 0 0 / 8%) 0px 0px 16px;
		transform: translateY(-2px);
	} */
	p {
		text-align: left;
		padding: 1em 1em 1em 0em;
	}
`;

export const DetailsContent = styled.div`
	display: flex;
	background-color: yellow;
	flex-direction: column;
`;

export const FormAnswerContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 80%;
`;
