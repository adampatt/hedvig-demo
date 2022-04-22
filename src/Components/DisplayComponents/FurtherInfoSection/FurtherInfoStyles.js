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

// NEED TO REVERSE EACH LINE
// FADE IN WORKING In codesandbox
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
	background-color: #f7f7f7;
	display: flex;
	padding: 3em 0 3em 0;
	flex-direction: ${(props) =>
		props.rowDirection ? "row" : "row-reverse"};
`;
