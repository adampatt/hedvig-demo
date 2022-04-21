/* eslint-disable import/prefer-default-export */
import styled from "@emotion/styled";
import { mq } from "../../../utils";

export const FurtherInfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const FurtherInfoText = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-evenly;
`;

export const FurtherInfoImage = styled.img`
	max-width: 100%;
	align-self: center;
	${mq.xl} {
		max-width: 40%;
	}
	${mq.lg} {
		max-width: 50%;
	}
	${mq.md} {
		max-width: 60%;
	}
	${mq.sm} {
		max-width: 90%;
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	width: 100%;
`;

export const FurtherInfoContent = styled.div`
	display: flex;
	border: 1px solid black;
	padding: 3em 0 3em 0;
	div:nth-child(odd) {
		background: tomato;
	}
`;
