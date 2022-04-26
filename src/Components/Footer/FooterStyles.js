/* eslint-disable import/prefer-default-export */
import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
	display: flex;
	background-color: black;
	justify-content: space-evenly;
	min-height: 40vh;
	padding-top: 3em;
	    align-items: flex-start;
	color; white;
	h2 {
		color: white
	}
`;

export const FooterContent = styled.div`
	display: flex;
	flex-direction: column;
	ul {
		width: 80%;
		list-style: none;
		padding: 1em 0 1em 0;
	}
	li {
		padding: 0.375em 0 0.375em 0;
	}
`;
